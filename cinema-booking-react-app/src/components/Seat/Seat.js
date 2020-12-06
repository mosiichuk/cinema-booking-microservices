import React from 'react';
import classes from "./Seat.module.sass";
import SeatType from "./SeatType";
import {useAppState} from "../../context/AppContext";
import ReservationsService from "../../api/ReservationsService";

const reservationsService = new ReservationsService();

const SEAT_STATE = {
    FREE: "free",
    BOOKED: "booked",
    BOOKED_BY_USER: 'booked by user'
}

const Seat = ({seat, showingId, onReservationStatusChangedCallback}) => {
    const seatClasses = [];
    const appState = useAppState();

    seatClasses.push(seat.seatType === SeatType.ADVANCED ? classes.SeatsSofaLg : classes.SeatsSofa);

    if (seat.reserved && !seat.reservedByUser)
        seatClasses.push(classes.SeatsSofaTaken);
    else if (seat.reservedByUser)
        seatClasses.push(classes.SeatsSofaChoosen);
    else
        seatClasses.push(classes.SeatsSofaFree);

    const handleClick = async () => {
        if (seat.reserved && !seat.reservedByUser)
            return;

        if (seat.reservedByUser)
            await reservationsService.removeReservation(seat.reservationId);
        else
            await reservationsService.createReservation({
                seatId: seat.id,
                showingId: showingId,
                reserved: true,
                userId: appState.userData.userId
            });

        onReservationStatusChangedCallback();
    }

    return (
        <div className={seatClasses.join(" ")} onClick={handleClick}>
        </div>
    );
};

export default Seat;

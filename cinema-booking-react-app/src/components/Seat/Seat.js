import React from 'react';
import PropTypes from 'prop-types';
import classes from "./Seat.module.sass";
import SeatType from "./SeatType";
import {useAppState} from "../../context/AppContext";
import ReservationsService from "../../api/ReservationsService";

const reservationsService = new ReservationsService();

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

Seat.propTypes = {
    seat: PropTypes.object,
    showingId: PropTypes.number,
    onReservationStatusChangedCallback: PropTypes.func,
}

export default Seat;

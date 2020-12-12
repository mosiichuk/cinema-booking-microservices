import classes from './OrderTicketsSection.module.sass'
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import screenImg from 'assets/img/screen.png'

import CartSummary from "../../components/CartSummary/CartSummary";
import {useAppState} from "../../context/AppContext";
import TheatersService from "../../api/TheatersService";
import Seat from "../../components/Seat/Seat";
import SeatType from "../../components/Seat/SeatType";
import ReservationsService from "../../api/ReservationsService";

const theatersService = new TheatersService();
const reservationsService = new ReservationsService();

const OrderTicketsSection = () => {

    const [reservations, setReservations] = useState();
    const [seats, setSeats] = useState({});
    const appState = useAppState();
    const {showingId} = useParams();

    useEffect(() => {
        setSeatsData();
        setupReservations();
    }, []);

    async function setSeatsData() {
        const seatsData = await theatersService.getSeatsForShowing(appState.theater.id, showingId, appState.userData.userId);
        setSeats(prepateSeatsForView(seatsData));
    }

    async function setupReservations() {
        const reservations = await reservationsService.findReservations(showingId, appState.userData.userId);
        setReservations(reservations);
    }

    function prepateSeatsForView(data) {
        const rowsToSeatsMapping = new Map();

        data.forEach(element => {
            const currentData = rowsToSeatsMapping.get(element.rowNumber) || [];
            rowsToSeatsMapping.set(element.rowNumber, [...currentData, element])
        });

        return rowsToSeatsMapping;
    }

    return (
        <section className={classes.BookingSection} id="booking">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-xl-7">
                        <div className="booking__choose text-center">
                            <div className={classes.BookingScreen}>
                                <img src={screenImg} alt="screen" className="booking__img"/>
                                <h3 className="booking__img-text">Screen</h3>
                            </div>
                            <div className={classes.Seats}>
                                {Array.from(seats).map(([rowNumber, seatsList]) => {
                                    const seatsType = seatsList[0].seatType;
                                    const rowClass = seatsType === SeatType.ADVANCED ? classes.SeatsRowLg : classes.SeatsRow;

                                    return (
                                        <div className={rowClass} key={rowNumber}>
                                            {seatsList.map(seat => {

                                                return (
                                                    <Seat seat={seat}
                                                          showingId={showingId}
                                                          key={seat.id}
                                                          onReservationStatusChangedCallback={() => {
                                                              setSeatsData();
                                                              setupReservations();
                                                          }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    )
                                })}

                                <div className={classes.SeatsPrices}>
                                    <div className="d-flex">
                                        <div className={`${classes.SeatsSofa} ${classes.SeatsSofaFree}`}></div>
                                        <p className={`${classes.SeatsPrice} my-auto`}>
                                            Good-30$
                                        </p>
                                    </div>
                                    <div className="d-flex">
                                        <div className={`${classes.SeatsSofaLg} ${classes.SeatsSofaLgFree}`}></div>
                                        <p className={`${classes.SeatsPrice} my-auto`}>
                                            Super lux-60$
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-5">
                        <CartSummary reservations={reservations}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderTicketsSection;

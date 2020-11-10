import classes from './OrderTicketsSection.module.sass'
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import screenImg from 'Assets/img/screen.png'

import CartSummary from "../../components/CartSummary/CartSummary";
import {useAppState} from "../../context/AppContext";

const SEAT_TYPES = {
    COMMOM: "COMMON",
    ADVANCED: "ADVANCED",
};

const OrderTicketsSection = () => {

    const [seats, setSeats] = useState({});
    const appState = useAppState();
    const {showingId} = useParams();

    useEffect(() => {
        fetch(`/api/theaters/${appState.theater.id}/showings/${showingId}/seats`)
            .then(data => data.json())
            .then(data => setSeats(prepateSeatsForView(data)));
    }, []);

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
                                    const rowClass = seatsType === SEAT_TYPES.ADVANCED ? classes.SeatsRowLg : classes.SeatsRow;
                                    const seatClasses = [];
                                    seatClasses.push(seatsType === SEAT_TYPES.ADVANCED ? classes.SeatsSofaLg : classes.SeatsSofa);

                                    return(
                                        <div className={rowClass} key={rowNumber}>
                                            {seatsList.map(seat => {

                                                if(seat.reserved)
                                                    seatClasses.push(classes.SeatsSofaTaken)
                                                else if(seat.reservedByUser)
                                                    seatClasses.push(classes.SeatsSofaChoosen)
                                                else
                                                    seatClasses.push(classes.SeatsSofaFree)

                                                return (
                                                    <div className={seatClasses.join(" ")} key={seat.id} id={seat.id}></div>
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
                        <CartSummary/>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderTicketsSection;
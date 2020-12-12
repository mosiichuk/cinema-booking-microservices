import React, {useEffect, useState} from 'react';
import classes from "./CartSummary.module.sass";
import clockImg from 'assets/icons/clock.png'
import {Link, useParams} from 'react-router-dom';
import calendarImg from 'assets/icons/calendar.png'
import locationImg from 'assets/icons/location.png'
import creditcardImg from 'assets/icons/creditcard.png'
import {useAppState} from "../../context/AppContext";
import TheatersService from "../../api/TheatersService";

const theatersService = new TheatersService();

const CartSummary = ({reservations}) => {
    const {showingId} = useParams();
    const [showing, setShowing] = useState();
    const appState = useAppState();

    useEffect(async () => {
        const showing = await theatersService.getShowing(appState.theater.id, showingId);
        setShowing(showing)
    }, []);

    if (!showing || !reservations)
        return null;

    return (
        <div className={classes.CartSummary}>
            <h3>Tickets:</h3>
            <div className={classes.Tickets}>
                <div className={classes.TicketsTable}>
                    <h2>{showing.movie.name}</h2>

                    <div
                        className="d-flex flex-column flex-sm-row justify-content-between">
                        <div className={`${classes.TicketsDesc} mb-3 mb-sm-0 d-flex align-items-center`}>
                            <img src={clockImg} alt="time"
                                 className={classes.TicketsIcon}/>
                            <p>{showing.showTime}</p>
                        </div>
                        <div className={`${classes.TicketsDesc} mb-3 mb-sm-0 d-flex align-items-center`}>
                            <img src={calendarImg} alt="date"
                                 className={classes.TicketsIcon}/>
                            <p>{showing.date}</p>
                        </div>
                        <div className={`${classes.TicketsDesc} mb-3 mb-sm-0 d-flex align-items-center`}>
                            <img src={locationImg} alt="location"
                                 className={`${classes.TicketsIcon} ${classes.TicketsIconLocation}`}/>
                            <p>“Multiplex”, Kyiv</p>
                        </div>
                    </div>
                    <div className={classes.TicketsDetails}>
                        <div
                            className={classes.TicketsDetailsHeading}>
                            <p>№</p>
                            <p>Salon</p>
                            <p>Row</p>
                            <p>Seat</p>
                            <p>Price</p>
                        </div>

                        {!reservations || reservations.map(reservation => {

                            return (
                                <div className={classes.TicketsInfo} key={reservation.id}>
                                    <p>
                                        {reservation.id}
                                    </p>
                                    <p>
                                        {reservation.salon}
                                    </p>
                                    <p>
                                        {reservation.rowNumber}
                                    </p>
                                    <p>
                                        {reservation.seatNumber}
                                    </p>
                                    <p>
                                        {reservation.price}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                    <div
                        className="d-flex flex-column text-center flex-sm-row justify-content-sm-between">
                        <div className="d-flex justify-content-center">
                            <Link to="/orderConfirmation/1">
                                <button className={classes.BuyButton}>
                                    <img src={creditcardImg} alt="credit card icon"/>
                                    Buy a ticket
                                </button>
                            </Link>
                        </div>
                        <h3 className={classes.SummaryDesc}>Sum up: <span> {reservations.map(reservation => reservation.price).reduce((a, b) => a + b, 0)}</span></h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartSummary;

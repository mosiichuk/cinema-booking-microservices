import React, {useEffect, useState} from 'react';
import classes from "./CartSummary.module.sass";
import clockImg from 'Assets/icons/clock.png'
import {useLocation, useParams} from 'react-router-dom';
import calendarImg from 'Assets/icons/calendar.png'
import locationImg from 'Assets/icons/location.png'
import creditcardImg from 'Assets/icons/creditcard.png'
import {useAppState} from "../../context/AppContext";

const CartSummary = () => {
    const {showingId} = useParams();
    const [showing, setShowing] = useState();
    const appState = useAppState();

    useEffect(() => {
        fetch(`/theaters/${appState.theater.id}/showings/${showingId}`)
            .then(data => data.json())
            .then(data => setShowing(data));
    }, []);

    if(!showing)
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
                        <div className={classes.TicketsInfo}>
                            <p>
                                1223
                            </p>
                            <p>
                                02
                            </p>
                            <p>
                                03
                            </p>
                            <p>
                                11
                            </p>
                            <p>
                                30$
                            </p>
                        </div>
                        <div className={classes.TicketsInfo}>
                            <p>
                                1323
                            </p>
                            <p>
                                02
                            </p>
                            <p>
                                08
                            </p>
                            <p>
                                06
                            </p>
                            <p>
                                40$
                            </p>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-column text-center flex-sm-row justify-content-sm-between">
                        <div className="d-flex justify-content-center">
                            <button className={classes.BuyButton}>
                                <img src={creditcardImg} alt="credit card icon"/>
                                Buy a ticket
                            </button>
                        </div>
                        <h3 className={classes.SummaryDesc}>Sum up: <span> 60$</span></h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartSummary;
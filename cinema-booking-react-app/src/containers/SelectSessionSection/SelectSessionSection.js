import React, {useEffect, useState} from 'react';
import {useAppContext} from "context/GlobalContext";
import classes from './SelectSessionSection.module.sass';
import {Link} from "react-router-dom";
import TheatersService from "../../api/TheatersService";

const timeSlots = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
];

const theatersService = new TheatersService();

const SelectSessionSection = ({movieId}) => {
    const dates = getDates();

    const [state] = useAppContext();
    const [loading, setLoading] = useState(true);
    const [sessionDate, setSessionDate] = useState(dates[0].date);
    const [halls, setHalls] = useState([]);

    useEffect(async () => {
        const hallsWithSessionsInfo = await theatersService.getSessionsForMovie(state.theater.id, movieId, sessionDate);
        setHalls(hallsWithSessionsInfo);
        setLoading(false);
    }, [sessionDate, state.theater.id]);


    function getDates() {
        const currentDate = new Date(Date.now());
        currentDate.setDate(currentDate.getDate());

        return [...Array(5)].map((e, index) => {
            const date = new Date();
            date.setDate(currentDate.getDate() + index);
            date.setMonth(currentDate.getMonth());

            return {
                date: date.toISOString().substr(0, 10),
                formattedDate: date.toLocaleString('en-US', {day: '2-digit', month: 'long'})
            }
        });
    }

    return (
        <section className={classes.SelectSessionsSection} id="select-sessions">
            <div className={classes.HeaderRow}>
                <h3>{state.theater.name}</h3>

                <select name="sessions-date"
                        className={classes.DateSelector}
                        defaultValue={dates.date}
                        onChange={(event) => setSessionDate(event.target.value)}>
                    {dates.map((element, index) => {
                            return (
                                <option key={index} value={element.date}>{element.formattedDate}</option>
                            )
                        }
                    )}
                </select>
            </div>

            {!loading || <p>Loading data...</p>}

            <div className="d-flex flex-md-column justify-content-center justify-content-lg-start">
                {halls.length === 0
                    ? <p>Sorry, there is no sessions for this date.</p>
                    : halls.map((hall => {
                    return (
                        <div className={classes.SessionsRow} key={hall.id}>
                            <div>
                                <h5>{hall.name}</h5>
                            </div>

                            {timeSlots.map(timeSlot => {
                                const showing = hall.showings.find(showing => showing.showTime === timeSlot);
                                let timeSlotRender = '';

                                if (showing)
                                    timeSlotRender = <div key={timeSlot}
                                                          className={classes.TimeSlot}
                                                          id={showing.id}>
                                        <Link to={`/showings/${showing.id}`}>{timeSlot}</Link>
                                    </div>;
                                else
                                    timeSlotRender = <div key={timeSlot}/>;

                                return (
                                    timeSlotRender
                                )
                            })}
                        </div>
                    )
                }))}

                <div className={`${classes.SessionsRow} ${classes.TimeLine}`}>
                    <div/>

                    {timeSlots.map(timeSlot => {
                        return (
                            <div key={timeSlot}>{timeSlot}</div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
};

export default SelectSessionSection;

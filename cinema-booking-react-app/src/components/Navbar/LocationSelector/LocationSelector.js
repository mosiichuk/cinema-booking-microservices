import React, {useEffect, useState} from 'react';
import classes from './LocationSelector.module.sass';
import location from 'assets/icons/location.png';
import {useAppContext} from 'context/AppContext';
import types from 'context/contextActions';
import TheatersService from "../../../api/TheatersService";

const theatersService = new TheatersService();

const LocationSelector = () => {
    const [state, dispatch] = useAppContext();
    const [theaters, setTheaters] = useState();

    useEffect(async () => {
        const theaters = await theatersService.getAllTheaters();
        setTheaters(theaters);
    }, []);

    const changeCurrentTheater = ({target}) => {
        const optionElement = target.childNodes[target.selectedIndex]

        dispatch({
            type: types.SET_THEATER,
            payload: {
                id: optionElement.getAttribute('data-id'),
                name: target.value
            }
        });
    }

    return (
        <>
            <img src={location} alt='Location icon'/>

            <select
                className={classes.LocationSelector}
                value={state.theater.name}
                onChange={changeCurrentTheater}
            >
                {!theaters || theaters.map(theater => {
                    return (
                        <option key={theater.id} value={theater.name} data-id={theater.id}>
                            {theater.name}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default LocationSelector;

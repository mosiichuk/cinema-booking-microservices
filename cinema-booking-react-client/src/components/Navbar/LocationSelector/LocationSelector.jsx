import React, {useState} from 'react';
import {FormControl, makeStyles, MenuItem, Select} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    select: {
        color: theme.colors.textGrey,
        fontSize: 18,
        '&::before, &::after': {
            borderBottom: 'none',
        },
        '&:hover::before': {
            borderBottom: 'none!important'
        }
    },
    locationIcon: {
        color: theme.colors.accent,
        margin: '0 5px 0 0',
        width: 20,
        height: 20,
        transform: 'translateY(25%)'
    }
}));

const LocationSelector = () => {
    const classes = useStyles();
    const [age, setAge] = useState('1');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <LocationOnIcon className={classes.locationIcon}/>

            <FormControl>
                <Select
                    value={age}
                    onChange={handleChange}
                    className={classes.select}
                >
                    <MenuItem value={1}>Kyiv</MenuItem>
                    <MenuItem value={2}>Lviv</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default LocationSelector;

import React, {useState} from 'react';
import {FormControl, IconButton, makeStyles, MenuItem, Select} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    select: {
        color: theme.colors.textWhite,
        fontSize: 18,
        textTransform: 'uppercase',
        '&::before, &::after': {
            borderBottom: 'none',
        },
        '&:hover::before': {
            borderBottom: 'none!important'
        }
    },
    locationIcon: {
        color: theme.colors.accent,
        margin: '0 15px 0 0',
        width: 25,
        height: 30,
    },
    selectIcon: {
        color: theme.colors.textWhite,
        top: '50%',
        transform: 'translateY(-50%)'
    },
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
                    classes={{
                        icon: classes.selectIcon
                    }}
                >
                    <MenuItem value={1}>Kyiv</MenuItem>
                    <MenuItem value={2}>Lviv</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default LocationSelector;

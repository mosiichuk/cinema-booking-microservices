import React, {useState} from 'react';
import { Grid, Hidden, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navbar/Navigation/Navigation";
import LocationSelector from "components/Navbar/LocationSelector/LocationSelector";
import LoginButton from "components/Navbar/LoginButton";

const useStyles = makeStyles((theme) => ({
    navbar: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // width: '100%',
        // zIndex: 1,
        background: 'rgba(10, 10, 10, 0.7)',
        // background: '#fff',
        borderBottom: '2px solid rgba(196, 196, 196, 0.1)',

        [theme.breakpoints.down('md')]: {
            padding: '25px 0',
        },
    },
    logo: {
        textAlign: 'center'
    },
    socialMedia: {
        textAlign: 'end',

        '& img:nth-child(2)': {
            margin: '0 40px',

            [theme.breakpoints.down('xl')]: {
                margin: '0 10px',
            },
        }
    },
    actions: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.navbar} alignItems={'center'}>
                <Hidden xsDown>
                    <Grid item xs={1} className={classes.logo}>
                        <Logo/>
                    </Grid>
                </Hidden>

                <Grid item xs={8}>
                    <Navigation/>
                </Grid>

                <Grid item xs={3} className={classes.actions}>
                    <LocationSelector/>
                    <LoginButton/>
                </Grid>
            </Grid>
        </>
    );
};

export default Navbar;
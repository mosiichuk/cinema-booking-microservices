import React from 'react';
import {Grid, Hidden, makeStyles, useTheme} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.colors.background.medium,
    },
    logo: {
        textAlign: 'center'
    },
    socialMedia: {
        textAlign: 'end',

        '& img:nth-child(2)': {
            margin: '0 40px',

            [theme.breakpoints.down('md')]: {
                margin: '0 10px',
            },
        }
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer id="footer" className={classes.footer}>
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={6} sm={3} md={2}>
                    <p className="rights__text">
                        all rights reserved
                    </p>
                    <p className="rights__text">
                        SJE 2020 (c.)
                    </p>
                </Grid>

                <Hidden mdDown>
                    <Grid item xs={2} className={classes.logo}>
                        <img src='/icons/logo.png' alt="Logo"/>
                    </Grid>
                </Hidden>


                <Grid item xs={6} sm={3} md={2} className={classes.socialMedia}>
                    <img src='/icons/instagram.png' alt="Instagram logo"/>
                    <img src='/icons/facebook.png' alt="Facebook logo"/>
                    <img src='/icons/twitter.png' alt="Twitter logo"/>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;

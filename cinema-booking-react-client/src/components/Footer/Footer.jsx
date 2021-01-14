import React from 'react';
import {Grid, Hidden, makeStyles} from "@material-ui/core";
import Logo from "components/Logo/Logo";

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
                <Grid item xs={6} sm={4} md={3}>
                    <p className="rights__text">
                        all rights reserved
                    </p>
                    <p className="rights__text">
                        SJE 2020 (c.)
                    </p>
                </Grid>

                <Hidden xsDown>
                    <Grid item xs={2}className={classes.logo}>
                        <Logo xsDown/>
                    </Grid>
                </Hidden>

                <Grid item xs={6} sm={4} md={3} className={classes.socialMedia}>
                    <img src='/icons/instagram.png' alt="Instagram logo"/>
                    <img src='/icons/facebook.png' alt="Facebook logo"/>
                    <img src='/icons/twitter.png' alt="Twitter logo"/>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;

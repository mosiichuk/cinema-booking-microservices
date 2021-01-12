import React from 'react';
import {Grid} from "@material-ui/core";

const Footer = () => {

    return (
        <footer id="footer">
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={2}>
                    <p className="rights__text">
                        all rights reserved
                    </p>
                    <p className="rights__text">
                        SJE 2020 (c.)
                    </p>
                </Grid>

                <Grid item xs={2}>
                    <img src='/icons/logo.png' alt="Logo"/>
                </Grid>

                <Grid item xs={2}>
                    <img src='/icons/instagram.png' alt="Instagram logo"/>
                    <img src='/icons/facebook.png' alt="Facebook logo" className={classes.CentralIcon}/>
                    <img src='/icons/twitter.png' alt="Twitter logo"/>
                </Grid>
            </Grid>

        </footer>
    )
}

export default Footer;

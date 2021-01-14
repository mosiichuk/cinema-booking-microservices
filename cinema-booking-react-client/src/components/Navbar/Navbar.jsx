import React, {useState} from 'react';
import { Grid, Hidden, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navbar/Navigation/Navigation";


const useStyles = makeStyles((theme) => ({
    navbar: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // width: '100%',
        // zIndex: 1,
        background: 'rgba(10, 10, 10, 0.7)',
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

                <Grid item xs={4}>
                    <Navigation/>
                </Grid>

                <Grid item xs={3}>

                </Grid>
            </Grid>
            {/*<div className={classes.Nav}>*/}
            {/*    <Container fluid>*/}
            {/*        <Row className="d-flex align-items-center text-center">*/}
            {/*            <Col className="d-none d-xl-block text-center">*/}
            {/*                <img src='icons/logo.png' alt="Logo"/>*/}
            {/*            </Col>*/}

            {/*            <Col className="col-12 col-sm-7 col-xl-8">*/}
            {/*                <Navigation/>*/}
            {/*            </Col>*/}

            {/*            <Col className="col-12 col-sm-4 col-xl-3 d-flex justify-content-center*/}
            {/*                justify-content-sm-start justify-content-xl-start">*/}

            {/*                <div className="account d-flex">*/}
            {/*                    <div className={classes.NavbarUserActionItems}>*/}
            {/*                        <LocationSelector/>*/}
            {/*                    </div>*/}

            {/*                    <div className={classes.NavbarUserActionItems}>*/}
            {/*                        <img src={profile} className={classes.NavbarUserActionItems} alt="Profile icon"/>*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Container>*/}
            {/*</div>*/}
        </>
    );
};

export default Navbar;

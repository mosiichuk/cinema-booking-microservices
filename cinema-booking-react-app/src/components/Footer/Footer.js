import React from 'react';
import {useLocation} from 'react-router-dom';
import instagram from 'assets/icons/instagram.png';
import facebook from 'assets/icons/facebook.png';
import twitter from 'assets/icons/twitter.png';
import logo from 'assets/icons/logo.png';
import classes from './Footer.module.sass';

const Footer = () => {

    return (
        <footer id="footer" className={classes.Footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-around">
                        <div className="rights">
                            <p className="rights__text">
                                all rights reserved
                            </p>
                            <p className="rights__text">
                                SJE 2020 (c.)
                            </p>
                        </div>
                        <div className="footer__logo-wrapper d-none d-sm-block">
                            <img src={logo} alt="#"/>
                        </div>
                        <div className="social-media">
                            <img src={instagram} alt="#"/>
                            <img src={facebook} alt="#" className={classes.CentralIcon}/>
                            <img src={twitter} alt="#"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

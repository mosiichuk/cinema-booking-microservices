import React from 'react';
import classes from "./Navigation.module.sass";
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <ul className="d-flex justify-content-center justify-content-xl-start">
            <li className={classes.MenuItem}>
                <Link to="/" className={classes.MenuLink}>
                    Now on screens
                </Link>
            </li>

            <li className={classes.MenuItem}>
                <Link to="/coming-soon" className={classes.MenuLink}>
                    Coming soon
                </Link>
            </li>

            <li className={classes.MenuItem}>
                <Link to="/contact" className={classes.MenuLink}>
                    Contact us
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;

import React, {useState} from 'react';
import logo from 'Assets/icons/logo.png';
import profile from 'Assets/icons/profile.png';
import {Col, Container, Row} from "react-bootstrap";
import classes from './Navbar.module.sass';
import {Link} from "react-router-dom";
import LocationSelector from "Components/Navbar/LocationSelector/LocationSelector";
import AuthenticationOptions from "Components/Navbar/AuthenticationOptions/AuthenticationOptions";
import {useAppContext, useAppDispatch} from "context/AppContext";
import types from 'context/contextActions';

const Navbar = () => {
    const [openAuthOptions, setOpenAuthOptions] = useState(false);
    const [state, dispatch] = useAppContext();

    const closeAuthOptionsPopup = () => setOpenAuthOptions(!openAuthOptions);

    return (
        <>
            <div className={classes.Nav}>
                <Container fluid>
                    <Row className="d-flex align-items-center text-center">
                        <Col className="d-none d-xl-block text-center">
                            <img src={logo} alt="Logo"/>
                        </Col>

                        <Col className="col-12 col-sm-7 col-xl-8">
                            <ul className="menu d-flex justify-content-center justify-content-xl-start">
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
                        </Col>

                        <Col
                            className="col-12 col-sm-4 col-xl-3 d-flex justify-content-center justify-content-sm-start justify-content-xl-start">
                            <div className="account d-flex">
                                <div className={classes.NavbarUserActionItems}>
                                    <LocationSelector/>
                                </div>

                                <div className={classes.NavbarUserActionItems}>
                                    <img src={profile} className={classes.NavbarUserActionItems} alt="Profile icon"/>
                                    {state.userData.token
                                        ? <LogoutButton/>
                                        : <LoginButton closeAuthOptionsPopup={closeAuthOptionsPopup}/>
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {!openAuthOptions || <AuthenticationOptions closeAuthOptionsPopup={closeAuthOptionsPopup}/>}
        </>
    );
};

const LoginButton = ({closeAuthOptionsPopup}) => {

    return (
        <button className="account__link" onClick={closeAuthOptionsPopup}>
            Login
        </button>
    );
}

const LogoutButton = () => {
    const dispatch = useAppDispatch();

    return (
        <button className="account__link" onClick={() => dispatch({type: types.CLEAR_USER_DATA})}>
            Logout
        </button>
    );
}

export default Navbar;

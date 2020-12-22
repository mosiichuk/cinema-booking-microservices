import React, {useState} from 'react';
import logo from 'assets/icons/logo.png';
import profile from 'assets/icons/profile.png';
import {Col, Container, Row} from "react-bootstrap";
import classes from './Navbar.module.sass';
import LocationSelector from "components/Navbar/LocationSelector/LocationSelector";
import AuthenticationOptions from "components/Navbar/AuthenticationOptions/AuthenticationOptions";
import {useAppContext, useAppDispatch} from "context/GlobalContext";
import types from 'context/contextActions';
import Navigation from "./Navigation/Navigation";
import Modal from "../Modal/Modal";

const Navbar = () => {
    const [isOpenedAuthOptions, setIsOpenedAuthOptions] = useState(false);
    const [state] = useAppContext();

    const toggleAuthOptionsPopup = () => {
        console.log('BEFORE ' + isOpenedAuthOptions)
        setIsOpenedAuthOptions(!isOpenedAuthOptions);
    }

    console.log('AFTER ' + isOpenedAuthOptions)

    return (
        <>
            <div className={classes.Nav}>
                <Container fluid>
                    <Row className="d-flex align-items-center text-center">
                        <Col className="d-none d-xl-block text-center">
                            <img src={logo} alt="Logo"/>
                        </Col>

                        <Col className="col-12 col-sm-7 col-xl-8">
                            <Navigation/>
                        </Col>

                        <Col className="col-12 col-sm-4 col-xl-3 d-flex justify-content-center
                            justify-content-sm-start justify-content-xl-start">

                            <div className="account d-flex">
                                <div className={classes.NavbarUserActionItems}>
                                    <LocationSelector/>
                                </div>

                                <div className={classes.NavbarUserActionItems}>
                                    <img src={profile} className={classes.NavbarUserActionItems} alt="Profile icon"/>

                                    {state.userData.token
                                        ? <LogoutButton/>
                                        : <LoginButton showAuthOptionsPopup={toggleAuthOptionsPopup}/>
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal isOpened={isOpenedAuthOptions}>
                <AuthenticationOptions closeAuthOptionsPopup={toggleAuthOptionsPopup}/>
            </Modal>
        </>
    );
};

const LoginButton = ({showAuthOptionsPopup}) => {

    return (
        <button onClick={showAuthOptionsPopup}>
            Login
        </button>
    );
}

const LogoutButton = () => {
    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch({type: types.CLEAR_USER_DATA})}>
            Logout
        </button>
    );
}

export default Navbar;

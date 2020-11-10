import React, {useState} from 'react';
import authOptionsBg from 'Assets/img/login-bg.png';
import classes from './AuthenticationOptions.module.sass';
import types from 'context/types';
import {useAppDispatch} from "context/AppContext";

const forms = {
    LOGIN: 'login-form',
    SIGN_UP: 'signup-form'
};

const AuthenticationOptions = ({closeAuthOptionsPopup}) => {
    const [shownForm, setShownForm] = useState(forms.LOGIN);

    const formComponentsMap = new Map([
        [forms.LOGIN, <LoginForm closeAuthOptionsPopup={closeAuthOptionsPopup}/>],
        [forms.SIGN_UP, <SignupForm/>]
    ]);

    return (
        <>
            <div className={classes.Backdrop} onClick={closeAuthOptionsPopup}>

            </div>

            <div className={classes.Popup}>
                <div className={classes.LoginOptions}>
                    <img src={authOptionsBg} className="d-none d-xl-block" alt="Background"/>

                    <div className={classes.FormsContainer}>

                        <div className={`${classes.FormSwitcher} d-flex justify-content-end`}>
                            <p className={shownForm === forms.LOGIN ? classes.FormSwitcherActive : ''}
                               onClick={() => setShownForm(forms.LOGIN)}>
                                Login
                            </p>
                            <p className={shownForm === forms.SIGN_UP ? classes.FormSwitcherActive : ''}
                               onClick={() => setShownForm(forms.SIGN_UP)}>
                                Sign up
                            </p>
                        </div>

                        {formComponentsMap.get(shownForm)}
                    </div>
                </div>
            </div>
        </>
    );
};

const LoginForm = ({closeAuthOptionsPopup}) => {
    const dispatch = useAppDispatch();

    const [userSignUpData, setUserSignUpData] = useState({
        email: '',
        password: ''
    });

    const [messages, setMessages] = useState({
        error: '',
        success: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('/users/login', {
            method: "POST",
            body: JSON.stringify(userSignUpData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (!response.ok)
                    throw new Error('Something went wrong');

                return response.headers;
            })
            .then(headers => {
                dispatch({
                    type: types.SET_USER,
                    payload: {
                        token: 'Bearer ' + headers.get('token'),
                        userId: headers.get('userid')
                    }
                });
                closeAuthOptionsPopup();
            })
            .catch(error => setMessages({success: '', error: 'Something went wrong. Please try again.'}));
    }

    const changeUserEmail = (event) => {
        setUserSignUpData({...userSignUpData, email: event.target.value});
        console.log(userSignUpData);
    }

    const changeUserPassword = (event) => {
        setUserSignUpData({...userSignUpData, password: event.target.value});
        console.log(userSignUpData);
    }

    return (
        <form className={classes.AuthForm}
              id="sign-up-form"
              onSubmit={handleSubmit}
        >
            <h3 className="text-center">Login</h3>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <input type="email" placeholder="Email" value={userSignUpData.email} onChange={changeUserEmail}/>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <input type="password" placeholder="Password" value={userSignUpData.password}
                           onChange={changeUserPassword}/>
                </div>
            </div>
            <div className="row">
                <div className={`col-12 text-center ${classes.Messages}`}>
                    {!messages.error || <p>{messages.error}</p>}
                    {!messages.success || <p dangerouslySetInnerHTML={{__html: messages.success}}/>}
                </div>
            </div>

            <button type="submit" className={`${classes.Button} mx-auto`}>Login</button>
        </form>
    );
};

const SignupForm = () => {
    const [userSignUpData, setUserSignUpData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [messages, setMessages] = useState({
        error: '',
        success: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('/users', {
            method: "POST",
            body: JSON.stringify(userSignUpData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (!response.ok)
                    throw new Error('Something went wrong');

                return response.json();
            })
            .then(json => setMessages({
                error: '',
                success: `<span>${json.name}</span>, your account was successfully created. Please proceed with login.`
            }))
            .catch(error => setMessages({success: '', error: 'Something went wrong. Please try again.'}));
    }

    const changeUserName = (event) => {
        setUserSignUpData({...userSignUpData, name: event.target.value});
        console.log(userSignUpData);
    }

    const changeUserEmail = (event) => {
        setUserSignUpData({...userSignUpData, email: event.target.value});
        console.log(userSignUpData);
    }

    const changeUserPassword = (event) => {
        setUserSignUpData({...userSignUpData, password: event.target.value});
        console.log(userSignUpData);
    }

    return (
        <form className={classes.AuthForm}
              id="sign-up-form"
              onSubmit={handleSubmit}
        >
            <h3 className="text-center">Sign Up</h3>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <input type="text" placeholder="Name" value={userSignUpData.name} onChange={changeUserName}/>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <input type="email" placeholder="Email" value={userSignUpData.email} onChange={changeUserEmail}/>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <input type="password" placeholder="Password" value={userSignUpData.password}
                           onChange={changeUserPassword}/>
                </div>
            </div>
            <div className="row">
                <div className={`col-12 text-center ${classes.Messages}`}>
                    {!messages.error || <p>{messages.error}</p>}
                    {!messages.success || <p dangerouslySetInnerHTML={{__html: messages.success}}/>}
                </div>
            </div>

            <button type="submit" className={`${classes.Button} mx-auto`}>Sign Up</button>
        </form>
    );
};

export default AuthenticationOptions;

import React from 'react';
import {Button, IconButton} from "@material-ui/core";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: 'transparent',
        color: theme.colors.textWhite,
        fontSize: 18,
        padding: 0,
        textTransform: 'uppercase',
    },
    icon: {
        color: theme.colors.accent,
        margin: '0 15px 0 0',
        width: 25,
        height: 30,
    }
}));

const LoginButton = () => {
    const classes = useStyles();

    return (
        <IconButton className={classes.button}>
            <PermIdentityIcon className={classes.icon}/>
            <p>Login</p>
        </IconButton>
    );
};

export default LoginButton;

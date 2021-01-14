import React from 'react';
import {Button, IconButton} from "@material-ui/core";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: 'transparent',
        color: theme.colors.textGrey,
        fontSize: 18,
        padding: 0
    },
    icon: {
        color: theme.colors.accent,
        margin: '0 5px 0 0',
        width: 25,
        height: 25,
    }
}));

const LoginButton = () => {
    const classes = useStyles();

    return (
        <IconButton className={classes.button}>
            <PermIdentityIcon className={classes.icon}/>
            <p>Login</p>
        </IconButton>
        // <Button
        //     variant="contained"
        //     color="default"
        //     className={classes.button}
        //     startIcon={<PermIdentityIcon className={classes.icon}/>}
        // >
        //     Login
        // </Button>
    );
};

export default LoginButton;

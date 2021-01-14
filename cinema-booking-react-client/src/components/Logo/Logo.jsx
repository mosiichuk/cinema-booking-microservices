import React from 'react';
import Link from "next/link";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    logo: {
        width: '76px',
        height: 'auto'
    }
})

const Logo = () => {
    const classes = useStyles();

    return (
        <Link href='/'>
            <a>
                <img src='icons/logo.png' alt="Logo" className={classes.logo}/>
            </a>
        </Link>
    );
};

export default Logo;

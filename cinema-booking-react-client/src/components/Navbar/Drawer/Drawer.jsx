import React, {useState} from 'react';
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    expandedNavigation: {
        flexDirection: 'row',
        display: 'flex',
    },
    drawer: {
        backgroundColor: theme.colors.accent,
    },
    menuButton: {
        margin: '0 0 0 10px',
    }
}));

const Drawer = ({children}) => {
    const classes = useStyles();
    const [isOpened, setIsOpened] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
            return;

        setIsOpened(open);
    };

    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu"
                        onClick={toggleDrawer(true)} className={classes.menuButton}>
                <MenuIcon/>
            </IconButton>

            <SwipeableDrawer
                anchor={'left'}
                open={isOpened}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                classes={{paper: classes.drawer}}
            >

                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    {children}
                </div>
            </SwipeableDrawer>
        </>
    );
};

export default Drawer;

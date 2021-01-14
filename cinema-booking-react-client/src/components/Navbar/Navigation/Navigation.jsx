import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Hidden} from "@material-ui/core";
import Drawer from "components/Navbar/Drawer/Drawer";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    expandedNavigation: {
        flexDirection: 'row',
        display: 'flex',
    },
    listItemLink: {
        textTransform: 'uppercase',
        color: theme.colors.textGrey,
        transition: 'color 0.3s linear',

        '&:hover': {
            color: theme.colors.accent
        }
    },
    listItemLinkDrawer: {
        color: theme.colors.textWhite,
    },
}));

const navigation = [
    {
        title: 'Now on screens',
        href: '/',
    },
    {
        title: 'Coming soon',
        href: '/coming-soon',
    },
    {
        title: 'Contact us',
        href: '/contact-us',
    },
]

export default function Navigation() {
    const classes = useStyles();

    const list = (classNames = [classes.listItemLink]) => (
        <>
            {navigation.map(navigationItem => (
                <ListItem
                    button
                    key={navigationItem.title}
                >
                    <Link href={navigationItem.href}>
                        <ListItemText className={classNames.join(' ')} primary={navigationItem.title}/>
                    </Link>
                </ListItem>
            ))
            }
        </>
    );

    return (
        <>
            <Hidden mdUp>
                <Drawer className={classes.drawer}>
                    <List>
                        {list([classes.listItemLink, classes.listItemLinkDrawer])}
                    </List>
                </Drawer>
            </Hidden>

            <Hidden smDown>
                <List className={classes.expandedNavigation}>
                    {list()}
                </List>
            </Hidden>
        </>
    );
}

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        eShop
                    </Typography>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;

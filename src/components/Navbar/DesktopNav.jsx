import React from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Box, makeStyles } from "@material-ui/core";

import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
    showDesktop: {
        background: "linear-gradient(to bottom left, #163a31 0%, #11b68e 78.79%, #05e5af 100%) !important",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
}));

const DesktopNav = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" elevation={0} className={classes.showDesktop}>
                <Toolbar>
                    <Box flexGrow={1} padding={1} margin={1}>
                        <Logo />
                    </Box>
                    <Box spacing={2} direction="row">
                        <NavLink to="/home" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                            Home
                        </NavLink>
                        <NavLink to="/categories" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                            Categories
                        </NavLink>
                        <NavLink to="/about" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                            About
                        </NavLink>
                        <NavLink to="/signin" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                            Signin
                        </NavLink>
                        <NavLink to="/signup" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                            Signup
                        </NavLink>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default DesktopNav;

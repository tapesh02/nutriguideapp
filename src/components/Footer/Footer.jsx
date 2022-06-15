import React from "react";

import Logo from "../Logo/Logo";

import { Box, Typography } from "@material-ui/core";

import { Copyright, Facebook, Instagram, Twitter } from "@material-ui/icons";
const Footer = () => {
    return (
        <>
            <Box className="main-footer">
                <Box className="main-footer-social">
                    <Typography variant="h6">Follow Us</Typography>
                    <Box className="main-footer-icon">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </Box>

                    <Box className="main-footer-logo">
                        <span>
                            <Copyright />
                        </span>
                        <Logo />
                    </Box>
                </Box>
                <Box className="main-footer-help">
                    <Typography variant="h6">Help</Typography>
                    <Typography variant="subtitle1">Help Center</Typography>
                    <Typography variant="subtitle1">Facebook Comunity</Typography>
                    <Typography variant="subtitle1">Twitter Community</Typography>
                </Box>
                <Box className="main-footer-about">
                    <Typography variant="h6">Company</Typography>
                    <Typography variant="subtitle1">About us</Typography>
                    <Typography variant="subtitle1">News & Events</Typography>
                    <Typography variant="subtitle1">Blogs</Typography>
                </Box>
                <Box className="main-footer-legal">
                    <Typography variant="h6">Legal</Typography>
                    <Typography variant="subtitle1">Terms & Conditions</Typography>
                    <Typography variant="subtitle1">Privacy Policy</Typography>
                    <Typography variant="subtitle1">Others</Typography>
                </Box>
            </Box>
        </>
    );
};

export default Footer;

import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../Logo/Logo";

import { Box, Button, CardMedia, Typography } from "@material-ui/core";

const About = () => {
    const navigate = useNavigate();
    const gotoCategories = () => {
        navigate("/categories");
    };
    return (
        <>
            <Box className="main-about">
                <Box className="main-aboutImage">
                    <CardMedia
                        component="img"
                        className="aboutImage"
                        image="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="aboutImage"
                        title="aboutImage"
                    />
                </Box>
                <Box className="main-aboutDesc">
                    <Logo />
                    <Typography variant="h2"> About Us</Typography>
                    <Typography variant="subtitle1">
                        NutriGuide is a provider of best nutrition guide and recipe. We bring best taste from around the world, so that you dont have to compromise on taste and health. Use NutriGuide
                        to create meal plans or manage recipes & menus. Best part is the service is free forever.{" "}
                    </Typography>
                    <Button variant="contained" color="inherit" onClick={gotoCategories}>
                        Learn More
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default About;

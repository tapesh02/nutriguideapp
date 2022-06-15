import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Footer/Footer";
import topSearched from "../../data/data.js";

import { Box, Button, CardMedia, Typography } from "@material-ui/core";

import homeImg from "../../assets/homeImg.png";
import factImgbg from "../../assets/factImgbg.png";

const Home = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const goToCategories = () => {
        navigate("/categories");
    };

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    window.addEventListener("scroll", toggleVisible);

    return (
        <>
            <Box className="main-home">
                <Box className="main-title">
                    <Box className="header">
                        <Typography variant="h1">
                            Master
                            <span>
                                the art of <span className="spanText">taste</span>
                            </span>
                        </Typography>
                    </Box>
                    <Box className="subheader">
                        <Typography variant="h6"> We have best nutritional food recipe for all your needs.</Typography>
                    </Box>
                    <Button variant="contained" className="findBtn" onClick={goToCategories}>
                        Find here
                    </Button>
                </Box>
                <Box className="main-homeImg">
                    <CardMedia component="img" className="homeImage" image={homeImg} alt="homeImage" title="homeImage" />
                </Box>
            </Box>
            <button className="topBtn" style={{ display: visible ? "inline-block" : "none" }} onClick={scrollToTop}>
                Top
            </button>
            <Box className="main-facts">
                <Box className="main-fact-img">
                    <CardMedia component="img" className="factImgbg" image={factImgbg} alt="factImgbg" title="factImgbg" />
                </Box>
                <Box className="main-facts-list">
                    <Typography variant="h4"> Unknown Facts of Cooking</Typography>
                    <ul className="factList">
                        <li>Cheese is the most stolen food.</li>
                        <li>The earliest ovens dating back to 29,000 B.C. were found in Central Europe.</li>
                        <li>Chefs in 17th century Europe often worked naked or in underwear because of the intense heat.</li>
                        <li>Chopsticks were initially created for cooking, not as an eating utensil.</li>
                        <li>Humans started cooking 1.8-2.3 million years ago. </li>
                    </ul>
                </Box>
            </Box>

            <Box className="main-topSearched">
                <Box className="topSearchedHeader">
                    <Typography variant="h6"> Top Searched</Typography>
                </Box>
                <Box className="main-topSearched-card">
                    {topSearched?.map((d) => {
                        return (
                            <>
                                <Box className="topSearched-card" key={d.idMeal}>
                                    <Box className="searchCardImg ">
                                        <CardMedia component="img" image={d.strImg} alt="searchedCardImg" title={d.strMeal} />
                                    </Box>
                                    <Typography variant="subtitle1">
                                        {d.strArea} : {d.strMeal}
                                    </Typography>
                                </Box>
                            </>
                        );
                    })}
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Home;

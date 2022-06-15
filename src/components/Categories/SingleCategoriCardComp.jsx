import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Typography, Button } from "@material-ui/core";

const SingleCategoriCardComp = ({ mealCategories, getcategorieName, handleShowRecipelist }) => {
    const [showDesc, setShowDesc] = useState(false);

    const { strCategory, strCategoryThumb, strCategoryDescription } = mealCategories;

    const handleMouseOver = () => {
        setShowDesc(true);
    };

    const handleMouseOut = () => {
        setShowDesc(false);
    };

    return (
        <>
            <div className=" main-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {showDesc ? (
                    <div className="cardDesc">
                        <Typography variant="body1">{strCategoryDescription}</Typography>
                    </div>
                ) : (
                    <div className="cardimg">
                        <img src={strCategoryThumb} alt="cardImg" />
                    </div>
                )}
                <div className="cardFooter">
                    <Typography variant="subtitle1" className="cardCaption">
                        {strCategory}
                    </Typography>
                    <Button
                        color="inherit"
                        component={Link}
                        to="recipelist"
                        onClick={() => {
                            handleShowRecipelist();
                            getcategorieName(mealCategories);
                        }}>
                        View
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SingleCategoriCardComp;

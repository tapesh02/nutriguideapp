import React from "react";

import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const SingleRecipeCardComp = ({ recipes, getPrepid, handleShowPrepdetails }) => {
    const { strMealThumb, strMeal } = recipes;
    return (
        <>
            <div className=" main-card">
                <div className="cardimg">
                    <img src={strMealThumb} alt="cardImg" />
                </div>

                <div className="cardFooter">
                    <Typography variant="subtitle1" className="cardCaption">
                        {strMeal}
                    </Typography>
                    <Button
                        color="inherit"
                        component={Link}
                        to="prepdetails"
                        size="small"
                        onClick={() => {
                            handleShowPrepdetails();
                            getPrepid(recipes);
                        }}>
                        View
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SingleRecipeCardComp;

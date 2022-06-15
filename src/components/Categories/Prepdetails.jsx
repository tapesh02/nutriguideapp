import React, { useState, useEffect } from "react";

import { useNavigate, useOutletContext } from "react-router-dom";
import { Box, Button, Container, Paper } from "@material-ui/core";
import SinglePrepCardComp from "./SinglePrepCardComp";

const Prepdetails = () => {
    const navigate = useNavigate();
    const [setShowPrepdetails, prepId, setPrepId] = useOutletContext();

    const [prepdetails, setPrepdetails] = useState([]);
    const gotoRecipeList = () => {
        setShowPrepdetails(!setShowPrepdetails);
        navigate("/categories/recipelist");
        setPrepId("");
    };

    useEffect(() => {
        const getPrepDetails = async () => {
            try {
                const prepApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${prepId}`;
                const response = await fetch(prepApi);
                const jsonResponse = await response.json();
                const data = jsonResponse.meals;
                setPrepdetails(data);
            } catch (error) {
                console.log(error);
            }
        };
        getPrepDetails();
    }, []);

    return (
        <>
            <div className="main-gobackBtn">
                <Button variant="contained" onClick={gotoRecipeList} className="gobackBtn">
                    Go back
                </Button>
            </div>

            <Box>
                {prepdetails?.map((prepdetail) => {
                    return (
                        <>
                            <SinglePrepCardComp key={prepdetail.idMeal} prepdetail={prepdetail} />
                        </>
                    );
                })}
            </Box>
        </>
    );
};
export default Prepdetails;

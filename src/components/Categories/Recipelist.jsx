import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, Outlet } from "react-router-dom";

import { Button, Typography } from "@material-ui/core";
import SingleRecipeCardComp from "./SingleRecipeCardComp";

const Recipelist = () => {
    const navigate = useNavigate();
    const [categorieName, setCategorieName, setshowRecipelist, searchText, setSearchText] = useOutletContext();

    const [recipe, setRecipe] = useState([]);
    const [showPrepdetails, setShowPrepdetails] = useState(false);
    const [prepId, setPrepId] = useState("");

    const gotoCategoris = () => {
        navigate("/categories");
        setCategorieName([]);
        setshowRecipelist(!setshowRecipelist);
        setSearchText("");
    };

    const handleShowPrepdetails = () => {
        setShowPrepdetails((current) => !current);
    };

    const getPrepid = (recipes) => {
        const prep_id = [...prepId, recipes];
        setPrepId(prep_id[0].idMeal);
        setSearchText("");
    };

    const filterRecipeListData = (val) => {
        if (searchText === "" || val.strMeal?.toLowerCase().includes(searchText?.toLowerCase())) {
            return val;
        }
    };

    useEffect(() => {
        const getRecipeList = async () => {
            try {
                const recipeApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorieName}`;
                const response = await fetch(recipeApi);
                const responseJson = await response.json();
                const data = responseJson.meals;
                setRecipe(data);
            } catch (error) {
                console.log(error);
            }
        };
        getRecipeList();
    }, []);

    return (
        <>
            {!showPrepdetails && (
                <>
                    <div className="main-gobackBtn">
                        <Button variant="contained" onClick={gotoCategoris} className="gobackBtn">
                            go back
                        </Button>
                    </div>

                    <Typography variant="h6" className="recipeSubheader">
                        {recipe?.filter(filterRecipeListData).length > 0 && searchText !== "" && (
                            <>
                                Found {recipe?.filter(filterRecipeListData).length} recipes for {searchText}
                            </>
                        )}
                        {recipe?.filter(filterRecipeListData).length < 0 ||
                            (searchText === "" && (
                                <>
                                    Found {recipe?.filter(filterRecipeListData).length} recipes for {categorieName}
                                </>
                            ))}
                    </Typography>
                </>
            )}
            {showPrepdetails ? (
                <Outlet context={[setShowPrepdetails, prepId, setPrepId]} />
            ) : (
                <div className="main-outer-card">
                    {recipe?.filter(filterRecipeListData).map((recipes) => {
                        return <SingleRecipeCardComp key={recipes.idCategory} recipes={recipes} getPrepid={getPrepid} handleShowPrepdetails={handleShowPrepdetails} />;
                    })}
                </div>
            )}
        </>
    );
};

export default Recipelist;

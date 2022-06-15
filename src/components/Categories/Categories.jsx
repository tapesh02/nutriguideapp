import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import SearchComp from "./SearchComp";
import SingleCategoriCardComp from "./SingleCategoriCardComp";
import Footer from "../Footer/Footer";
import { Typography } from "@material-ui/core";

const Categories = () => {
    const [searchText, setSearchText] = useState("");
    const [categorieName, setCategorieName] = useState([]);
    const [showRecipelist, setshowRecipelist] = useState(false);
    const [categories, setCategories] = useState([]);
    const [visible, setVisible] = useState(false);

    const handleShowRecipelist = (event) => {
        setshowRecipelist((current) => !current);
    };

    const getcategorieName = (mealCategorie) => {
        const name = [...categorieName, mealCategorie];
        setCategorieName(name[0].strCategory);
        setSearchText("");
    };

    const handleSearch = (event) => {
        if (searchText !== "" || searchText !== null) {
            setSearchText(event.target.value);
        }
    };

    const filterCategoryData = (val) => {
        if (searchText === "" || val.strCategory?.toLowerCase().includes(searchText?.toLowerCase())) {
            return val;
        }
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

    useEffect(() => {
        const getData = async () => {
            const api = "https://www.themealdb.com/api/json/v1/1/categories.php";
            try {
                const response = await fetch(api);
                const jsonResponse = await response.json();
                const data = jsonResponse.categories;
                setCategories(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <>
            <SearchComp handleSearch={handleSearch} searchText={searchText} />

            {showRecipelist ? (
                <Outlet context={[categorieName, setCategorieName, setshowRecipelist, searchText, setSearchText]} />
            ) : (
                <div className="main-outer-card">
                    {categories?.filter(filterCategoryData).length > 0 ? (
                        <>
                            {categories?.filter(filterCategoryData).map((mealCategories) => {
                                return (
                                    <SingleCategoriCardComp
                                        mealCategories={mealCategories}
                                        key={mealCategories.idCategory}
                                        handleShowRecipelist={handleShowRecipelist}
                                        getcategorieName={getcategorieName}
                                    />
                                );
                            })}
                        </>
                    ) : (
                        <Typography variant="h6" className="recipeSubheader">
                            No result found for {searchText}
                        </Typography>
                    )}
                </div>
            )}
            <button className="topBtn" style={{ display: visible ? "inline-block" : "none" }} onClick={scrollToTop}>
                Top
            </button>
            <Footer />
        </>
    );
};

export default Categories;

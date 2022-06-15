import React from "react";

import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const Signin = () => {
    const navigate = useNavigate();
    const gotoCategories = () => {
        navigate("/categories");
    };
    return (
        <>
            <form class="login">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <Button variant="outlined" onClick={gotoCategories}>
                    Signin
                </Button>
            </form>
        </>
    );
};

export default Signin;

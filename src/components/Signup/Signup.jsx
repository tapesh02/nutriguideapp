import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const Signup = () => {
    const navigate = useNavigate();
    const gotoCategories = () => {
        navigate("/categories");
    };
    return (
        <>
            <form class="login">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Create Password" />
                <input type="password" placeholder="Retype Password" />
                <Button variant="outlined" onClick={gotoCategories}>
                    Signup
                </Button>
            </form>
        </>
    );
};

export default Signup;

import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    errorMain: {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1487525219605-eadb39ae229c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1991&q=80"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        display: "flex",
        width: "100%",
        height: "calc(100vh - 64px);",
        alignItems: "center",
        justifyContent: "space-around",
    },

    errorTitle: {
        color: "rgb(255, 255, 255)",
        padding: "1.5rem",
    },

    homebtn: {
        marginTop: "1rem",
    },
}));

const Error = () => {
    const classes = useStyle();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/home");
    };
    return (
        <>
            <div className={classes.errorMain}>
                <Typography variant="h4" className={classes.errorTitle}>
                    Lost somewhere ..? <br></br> Don't worry you can go back to home
                    <br></br>
                    <Button variant="contained" onClick={goToHome} className={classes.homebtn}>
                        Go back home
                    </Button>
                </Typography>
            </div>
        </>
    );
};
export default Error;

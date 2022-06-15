import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar/Navbar.jsx";
import Home from "../src/components/Home/Home.jsx";
import Categories from "../src/components/Categories/Categories.jsx";
import About from "../src/components/About/About.jsx";
import Signin from "../src/components/Signin/Signin.jsx";
import Signup from "../src/components/Signup/Signup.jsx";
import Error from "../src/components/Error/Error.jsx";
import Recipelist from "./components/Categories/Recipelist.jsx";
import Prepdetails from "./components/Categories/Prepdetails.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/categories" element={<Categories />}>
                    <Route path="recipelist" element={<Recipelist />}>
                        <Route path="prepdetails" element={<Prepdetails />} />
                    </Route>
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default App;

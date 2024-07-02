import React from "react";
import Head from "../components/Head";
import Body from "../components/Body"

import { Route, Routes } from "react-router-dom";

const Home= () => {
    return(
    <div className="overflow-x-hidden">
        <Head />
        <hr />
        <Body />
    </div>
    )
};

export default Home;
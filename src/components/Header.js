import { Link } from "gatsby";
import React from "react";
import containerStyles from "./Header.module.css";

export const Header = ({ siteTitle, siteDescription }) => (
    <div className={containerStyles.container}>
        {/* <Link to="/"> */}
        <h1>{siteTitle}</h1>
        {/* </Link> */}
    </div>
);

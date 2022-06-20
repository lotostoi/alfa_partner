import { divide } from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import "./style.scss"

import { NavLink } from "react-router-dom";

function Navigation({ links }) {
    return (
        <nav className="partner-pages-navigation">
            {links.map((link) => (
                <NavLink to={link.path} key={link.title} className="link">
                    {link.title}
                </NavLink>
            ))}
        </nav>
    );
}

export default Navigation;

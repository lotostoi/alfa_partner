import { useState, useEffect } from "react";
import "./partner-navigation-wrapper.scss";

import { menuRoutes } from "@/router";
import { NavLink } from "react-router-dom";

import MainLink from "./components/main-link";

function PartnerNavigationWrapper({ setIsShow }) {
    const [isClose, _toggleMenu] = useState(false);

    const handlerToggleMenu = () => {
        _toggleMenu(!isClose);
        setIsShow(isClose);
    };

    return (
        <div className={(isClose ? "close" : "") + " wrapper"}>
            <div className="btn-show-close" onClick={handlerToggleMenu}></div>

            <div className={(isClose ? "close" : "") + " partner-nav"}>
                <NavLink to="/main" className="logo">
                    <img src="/assets/img/logo-nav.svg" alt="logo" />
                </NavLink>
                <nav>
                    {menuRoutes.map((item) => (
                        <MainLink
                            link={item}
                            isClose={isClose}
                            key={item.name}
                        />
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default PartnerNavigationWrapper;

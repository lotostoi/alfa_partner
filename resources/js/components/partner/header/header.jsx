import "./partner-header-wrapper.scss";

import { NavLink } from "react-router-dom";
import { routesMap } from "@/router";

function PartnerHeaderWrapper() {
    return (
        <div className="partner-header-wrapper">
            <NavLink to="/promo_code" className="text-decoration-none link">
                1000А
            </NavLink>
            <NavLink
                to={routesMap("support")}
                className="text-decoration-none link"
            >
                Поддержка
            </NavLink>
            <NavLink
                to={routesMap("news")}
                className="text-decoration-none link"
            >
                <span>Новости</span>
                <span className="icon-news"></span>
            </NavLink>
            <NavLink
                to={routesMap("profile")}
                className="text-decoration-none link"
            >
                <span className="icon-profile"></span>
            </NavLink>
        </div>
    );
}

export default PartnerHeaderWrapper;

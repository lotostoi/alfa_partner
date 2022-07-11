import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getUrlByKey, headerRoutes } from "@/router";
import style from "./style.module.scss";

function ProfileLink() {
    const { childeRoutes, path } = headerRoutes.find(
        ({ name }) => name === "profile"
    );
    const { pathname } = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === "/" + path && childeRoutes) {
            navigate(pathname + childeRoutes[0].path);
        }
    }, [pathname]);

    const isActive = pathname.startsWith("/" + path);

    return (
        <NavLink
            to={getUrlByKey("profile")}
            className={
                isActive
                    ? style["profile-link"] + " " + style.active
                    : style["profile-link"]
            }
        >
            <div className={style.content}>
                <span className={style.name}>ivanivanov</span>
                <span className={style.id}>ID:74117</span>
            </div>
            <div className={style.icon}></div>
        </NavLink>
    );
}

export default ProfileLink;

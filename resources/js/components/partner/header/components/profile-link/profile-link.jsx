import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getUrlByKey, headerRoutes } from "@/router";
import style from "./style.module.scss";

import { NavigationProfileMIcon } from "@alfalab/icons-glyph/NavigationProfileMIcon";

function ProfileLink({ isMenu }) {
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

    return (
        <NavLink
            to={getUrlByKey("profile")}
            className={
                isMenu
                    ? [style["profile-link"], style.isMenu].join(" ")
                    : style["profile-link"]
            }
        >
            <div className={style.content}>
                <span
                    className={
                        isMenu
                            ? [style.name, style.isMenu].join(" ")
                            : style.name
                    }
                >
                    ivanivanov
                </span>
                <span
                    className={
                        isMenu ? [style.id, style.isMenu].join(" ") : style.id
                    }
                >
                    ID:74117
                </span>
            </div>
            <div
                className={
                    isMenu ? [style.icon, style.isMenu].join(" ") : style.icon
                }
            >
                <NavigationProfileMIcon />
            </div>
        </NavLink>
    );
}

export default ProfileLink;

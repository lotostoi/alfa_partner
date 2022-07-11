import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getUrlByKey } from "@/router";
import { useEffect, useRef } from "react";

import style from "./style.module.scss";

function MainLink({ link, isClose }) {
    const { childeRoutes, type, name, text } = link;
    const { pathname } = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === "/" + link.path && childeRoutes) {
            navigate(pathname + childeRoutes[0].path);
        }
    }, [pathname]);

    const isActive = pathname.startsWith("/" + link.path);

    if (childeRoutes && type === "route") {
        return (
            <div
                className={
                    isClose
                        ? style["nav-link"] + " " + style.close
                        : style["nav-link"]
                }
            >
                <TopLink {...link} isActive={isActive} />
                <div className={style["child-links"]}>
                    {childeRoutes.map((childRoute) => (
                        <NavLink
                            to={getUrlByKey(name + "." + childRoute.name)}
                            className={({ isActive }) =>
                                isActive
                                    ? style.active + " " + style["child-link"]
                                    : style["child-link"]
                            }
                            key={childRoute.name}
                        >
                            <span className={style.icon}></span>
                            <span className={style.title}>
                                {childRoute.text}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>
        );
    }

    if (type === "route") {
        return (
            <div
                className={
                    isClose
                        ? style["nav-link"] + " " + style.close
                        : style["nav-link"]
                }
            >
                <TopLink {...link} isActive={isActive} />
            </div>
        );
    }

    return (
        <span
            className={
                isClose
                    ? style["sub-title"] + " " + style.close
                    : style["sub-title"]
            }
            key={name}
        >
            <span className={style.icon}></span>
            <span className={style.title}>{text}</span>
        </span>
    );
}

function TopLink({ name, text, isActive, imgIcon }) {
    return (
        <NavLink
            to={getUrlByKey(name)}
            className={
                isActive ? style.active + " " + style.parent : style.parent
            }
            key={name}
        >
            <span
                className={style.icon}
                style={
                    imgIcon
                        ? {
                              backgroundImage: `url('/assets/img/partner/menu/${imgIcon}')`,
                          }
                        : {
                              backgroundImage:
                                  "url('/assets/img/partner/menu/home-icon.svg')",
                          }
                }
            ></span>
            <span className={style.title}>{text}</span>
        </NavLink>
    );
}

export default MainLink;

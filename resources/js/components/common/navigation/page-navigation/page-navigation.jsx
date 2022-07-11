import style from "./style.module.scss";
import { getUrlByShortKey } from "@/router";
import { NavLink } from "react-router-dom";

function PageNavigation({ childeRoutes }) {
    return (
        <nav className={style["wrapper-nav"]}>
            {childeRoutes.map(({ name, text }) => (
                <NavLink
                    to={getUrlByShortKey(name)}
                    key={name}
                    className={({ isActive }) =>
                        isActive ? style.active + " " + style.link : style.link
                    }
                >
                    {text}
                </NavLink>
            ))}
        </nav>
    );
}

export default PageNavigation;

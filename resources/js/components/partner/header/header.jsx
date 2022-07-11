import style from "./style.module.scss";

import HeaderLink from "./components/header-link";
import ProfileLink from "./components/profile-link";
import { getUrlByKey } from "@/router";

function PartnerHeader() {
    return (
        <div className={style["partner-header"]}>
            <HeaderLink
                to={getUrlByKey("support")}
                className={({ isActive }) =>
                    isActive
                        ? style["active-default"] + " " + style.link
                        : style.link
                }
            >
                <span>Поддержка</span>
                <span className={style.info}>9+</span>
            </HeaderLink>
            <HeaderLink
                to={getUrlByKey("news")}
                className={({ isActive }) =>
                    isActive
                        ? style["active-default"] + " " + style.link
                        : style.link
                }
            >
                <span>Новости</span>
                <span className={style.info}>2</span>
            </HeaderLink>
            <ProfileLink to={getUrlByKey("profile")} className={style.link}>
                <span className="icon-profile"></span>
            </ProfileLink>
        </div>
    );
}

export default PartnerHeader;

import { useState } from "react";
import style from "./style.module.scss";

import { getUrlByKey } from "@/router";

import { menuRoutes } from "@/router";
import { NavLink } from "react-router-dom";

import MainLink from "./components/main-link";
import { useEffect } from "react";
import ProfileLink from "../header/components/profile-link";

function PartnerNavigationWrapper({
    setIsShow,
    isShowModalMenu,
    setIsShowModalMenu,
}) {
    const [isClose, _toggleMenu] = useState(false);
    const [wrapperClass, setWrapperClass] = useState(style.wrapper);
    const [menuClass, setMenuClass] = useState(style.partner_nav);

    const handlerToggleMenu = () => {
        _toggleMenu(!isClose);
        setIsShow(isClose);
    };

    useEffect(() => {
        if (isShowModalMenu && isClose) {
            setWrapperClass(
                [style.wrapper, style.close, style.active].join(" ")
            );
        } else if (isClose) {
            setWrapperClass([style.wrapper, style.close].join(" "));
            setMenuClass([style.partner_nav, style.close].join(" "));
        } else if (isShowModalMenu) {
            setWrapperClass([style.wrapper, style.active].join(" "));
            setMenuClass([style.partner_nav, style.active].join(" "));
        } else {
            setWrapperClass(style.wrapper);
            setMenuClass([style.partner_nav].join(" "));
        }
    }, [isShowModalMenu, isClose]);

    const closeMobileMenu = (e) => {
        if (e.target.classList.contains(style.wrapper)) {
            setIsShowModalMenu(false);
        }
    };

    return (
        <div className={wrapperClass} onClick={closeMobileMenu}>
            <div
                className={style.btn_show_close}
                onClick={handlerToggleMenu}
            ></div>

            <div className={menuClass}>
                <NavLink to="/main" className={style.logo}>
                    <img src="/assets/img/logo-nav.svg" alt="logo" />
                </NavLink>
                <nav>
                    <ProfileLink
                        to={getUrlByKey("profile")}
                        isMenu
                        className={style.link}
                    >
                        <span className="icon-profile"></span>
                    </ProfileLink>
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

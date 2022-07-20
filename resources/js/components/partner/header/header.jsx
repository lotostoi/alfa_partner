import style from "./style.module.scss";

import { IconButton } from "@alfalab/core-components/icon-button";
import { BellAddMIcon } from "@alfalab/icons-glyph/BellAddMIcon";
import { BurgerMIcon } from "@alfalab/icons-glyph/BurgerMIcon";

import HeaderLink from "./components/header-link";
import ProfileLink from "./components/profile-link";
import { getUrlByKey } from "@/router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PartnerHeader({ isShowModalMenu, setIsShowModalMenu }) {
    const navigate = useNavigate();

    return (
        <div className={style["partner-header"]}>
            <div className={style.mobile}>
                <IconButton
                    view="primary"
                    size="s"
                    icon={BurgerMIcon}
                    className={style.btn_burger}
                    onClick={() => setIsShowModalMenu(!isShowModalMenu)}
                />
                <IconButton
                    view="primary"
                    size="s"
                    icon={BellAddMIcon}
                    onClick={() => navigate(getUrlByKey("news"))}
                    className={style.btn_burger + " " + "ms-auto"}
                />
            </div>

            <div className={style.desktop}>
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
        </div>
    );
}

export default PartnerHeader;

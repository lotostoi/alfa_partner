import style from "./style.module.scss";

import { IconButton } from "@alfalab/core-components/icon-button";
import { BellMIcon } from "@alfalab/icons-glyph/BellMIcon";
import { BurgerMIcon } from "@alfalab/icons-glyph/BurgerMIcon";

import HeaderLink from "./components/header-link";
import ProfileLink from "./components/profile-link";
import { getUrlByKey } from "@/router";

import MobileLink from "./components/mobile-link";

import { useGetCountNotSeeTicketsQuery } from "../../../store/header";

function PartnerHeader({ isShowModalMenu, setIsShowModalMenu }) {
  
    const { data } = useGetCountNotSeeTicketsQuery(10);

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
                <div className="ms-auto">
                    <MobileLink icon={BellMIcon} urlKey="news" />
                </div>
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
                    <span className={style.info}>
                        {data?.count > 9 ? "9+" : data?.count}
                    </span>
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

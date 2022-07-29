import PageNavigation from "@c/common/navigation/page-navigation";
import { Outlet } from "react-router-dom";

import style from "./style.module.scss";

function PageLayout({ childeRoutes, text }) {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>{text}</div>

            {childeRoutes ? (
                <PageNavigation childeRoutes={childeRoutes} />
            ) : null}

            <Outlet />
        </div>
    );
}

export default PageLayout;

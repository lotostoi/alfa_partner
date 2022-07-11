import PageNavigation from "@c/common/navigation/page-navigation";
import { Outlet } from "react-router-dom";

function PageLayout({ childeRoutes, text }) {
    return (
        <div className="p-3">
            <div className="h2">{text}</div>

            {childeRoutes ? (
                <PageNavigation childeRoutes={childeRoutes} />
            ) : null}

            <Outlet />
        </div>
    );
}

export default PageLayout;

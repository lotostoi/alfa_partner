import React from "react";
import ReactDOM from "react-dom";

import { Outlet } from "react-router-dom";

import PartnerNavigation from "../../components/partner/navigation/navigation";
import PartnerHeader from "../../components/partner/header";
function PartnerMainLayout() {
    return (
        <div className="w-100 d-flex">
            <PartnerNavigation />
            <div className="w-100 d-flex flex-column">
                <PartnerHeader />
                <div className="p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default PartnerMainLayout;

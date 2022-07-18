import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import PartnerNavigation from "../../components/partner/navigation/navigation";
import PartnerHeader from "../../components/partner/header";

function PartnerMainLayout() {
    
    const [isShow, setIsShow] = useState(true);

    return (
        <div className="w-100 d-flex">
            <PartnerNavigation setIsShow={setIsShow} />
            <div
                className="d-flex flex-column"
                style={{ width: `calc(100% - ${isShow ? 276 : 86}px)` }}
            >
                <PartnerHeader />
                <div className="p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default PartnerMainLayout;

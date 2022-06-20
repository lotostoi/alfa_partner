import React from "react";
import ReactDOM from "react-dom";

import PartnerNavigationWrapper from "../../components/partner/navigation/navigation";
import PartnerHeaderWrapper from "../../components/partner/header/header";
function PartnerMainLayout(props) {
    return (
        <div className="w-100 d-flex">
            <PartnerNavigationWrapper />
            <div className="w-100 d-flex flex-column">
                <PartnerHeaderWrapper />
                <div style={{ margin: "53px 20px" }}>{props.children}</div>
            </div>
        </div>
    );
}

export default PartnerMainLayout;

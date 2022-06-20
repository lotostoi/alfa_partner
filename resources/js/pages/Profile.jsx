import React from "react";
import ReactDOM from "react-dom";

import PartnerMainLayout from "../layouts/partner/partner-main-layout";
import PartnerProfileHeader from "../components/partner/profile/header";
import Navigation from "../components/common/navigation/navigation";
import EditProfile from "../components/partner/profile/edit-profile/EditProfile";

function Profile() {
    return (
        <div>
            <PartnerMainLayout>
                <PartnerProfileHeader />
                <Navigation
                    links={[
                        { path: "/", title: "Персональная информация" },
                        { path: "/tt", title: "Оплата" },
                        { path: "/sdfs", title: "Субаккаунты" },
                    ]}
                />
                <EditProfile />       
            </PartnerMainLayout>
        </div>
    );
}

export default Profile;

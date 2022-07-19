import style from "./style.module.scss";

import React, { useState } from "react";

import {connect} from "react-redux";

import { Outlet } from "react-router-dom";

import Filter from "../../components/partner/filter";
import PartnerNavigation from "../../components/partner/navigation/navigation";
import PartnerHeader from "../../components/partner/header";

function PartnerMainLayout({filter}) {
    const [isShow, setIsShow] = useState(true);
    return (
        <div className={[style['main_layout'], "w-100 d-flex"].join(" ")}>
            {filter ?
                <div className={style['main_layout_filter']}>
                    <Filter />
                </div>
                : null
            }
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

const mapStateToProps = (state) => {
    return {
        filter: state.filters.filter,
    };
};


export default connect(mapStateToProps, null)(PartnerMainLayout);

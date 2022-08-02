import style from "./style.module.scss";

import React, { useState } from "react";

import { connect } from "react-redux";

import { Outlet, useLocation } from "react-router-dom";

import FilterWrapper from "../../components/common/filter/filter";


import PartnerNavigation from "../../components/partner/navigation/navigation";
import PartnerHeader from "../../components/partner/header";

function PartnerMainLayout({ filter, component }) {
    const [isShow, setIsShow] = useState(true);

    const { pathname } = useLocation();

    const bgcClass = pathname.startsWith("/offers") ? style.bgc_for_offers : "";

    const [isShowModalMenu, setIsShowModalMenu] = useState(false);

    return (
        <div
            className={[style.main_layout, bgcClass, "w-100 d-flex"].join(" ")}
        >
            <div
                className={
                    style.filter_wrapper + " " + (filter && style.active)
                }
            >
                <FilterWrapper component={component} />
            </div>

            <PartnerNavigation
                setIsShow={setIsShow}
                isShowModalMenu={isShowModalMenu}
                setIsShowModalMenu={setIsShowModalMenu}
            />
            <div
                className={
                    style.right_block +
                    " " +
                    (isShow ? style.short : style.long)
                }
            >
                <PartnerHeader
                    setIsShowModalMenu={setIsShowModalMenu}
                    isShowModalMenu={isShowModalMenu}
                />

                <Outlet />
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

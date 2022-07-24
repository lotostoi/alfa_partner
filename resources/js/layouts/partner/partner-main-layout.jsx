import style from "./style.module.scss";

import React, { useState } from "react";

import { connect } from "react-redux";

import { Outlet } from "react-router-dom";

import Filter from "../../components/partner/filter";
import PartnerNavigation from "../../components/partner/navigation/navigation";
import PartnerHeader from "../../components/partner/header";

function PartnerMainLayout({ filter }) {
    const [isShow, setIsShow] = useState(true);

    const [isShowModalMenu, setIsShowModalMenu] = useState(false);

    return (
        <div className={[style["main_layout"], "w-100 d-flex"].join(" ")}>
            {filter ? (
                <div className={style["main_layout_filter"]}>
                    <Filter />
                </div>
            ) : null}
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

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./partner-profile-header.scss";

function PartnerProfileHeader() {
    return (
        <div className="partner-profile-header-wrapper">
            <h1>Мой профиль</h1>
            <Link to="#" className="link">
                Подробности в справке
            </Link>
        </div>
    );
}

export default PartnerProfileHeader;

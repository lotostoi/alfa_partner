import React from "react";
import ReactDOM from "react-dom";
import "./partner-navigation-wrapper.scss";

import { Link } from "react-router-dom";

function PartnerNavigationWrapper() {
    return (
        <div className="partner-nav-wrapper">
            <a className="logo">
                <img src="/assets/img/logo-nav.svg" alt="logo" />
            </a>
            <nav>
                <Link to="#" className="text-decoration-none link"> Главная </Link>
                <span className="sub-title">Статистика</span>
                <Link to="#" className="text-decoration-none link"> Отчеты </Link>
                <Link to="#" className="text-decoration-none link"> Заявки </Link>
                <Link to="#" className="text-decoration-none link"> Выплаты </Link>
                <span className="sub-title">Офферы</span>
                <Link to="#" className="text-decoration-none link"> Офферы </Link>
                <Link to="#" className="text-decoration-none link"> Мои ссылки </Link>
                <Link to="#" className="text-decoration-none link"> Баннеры </Link>
                <Link to="#" className="text-decoration-none link"> Постбеки </Link>
                <Link to="#" className="text-decoration-none link mt-40"> Справка </Link>
            </nav>
        </div>
    );
}

export default PartnerNavigationWrapper;

import { useState, useEffect } from "react";
import "./partner-navigation-wrapper.scss";

import { NavLink } from "react-router-dom";
import { menuRoutes, routesMap } from "@/router";

function PartnerNavigationWrapper() {
    const [isClose, _toggleMenu] = useState(false);

    const handlerToggleMenu = () => {
        _toggleMenu(!isClose);
    };

    return (
        <div className={(isClose ? "close" : "") + " partner-nav-wrapper"}>
            <a className="logo">
                <img src="/assets/img/logo-nav.svg" alt="logo" />
            </a>

            <div className="btn-show-close" onClick={handlerToggleMenu}></div>
            <nav>
                {menuRoutes.map((item) => {
                    return item.type === "route" ? (
                        <NavLink
                            to={routesMap(item.name)}
                            className="text-decoration-none link"
                            key={item.name}
                        >
                            <div className="main-name">
                                <span className="icon"></span>
                                <span className="title">{item.text}</span>
                            </div>
                        </NavLink>
                    ) : (
                        <span className="sub-title" key={item.name}>
                            <span className="icon"></span>
                            <span className="title">{item.text}</span>
                        </span>
                    );
                })}
            </nav>
            {/*     <nav>
                <Link to="#" className="text-decoration-none link">
                    <div className="main-name">
                        <span className="icon"></span>
                        <span className="title">Главная</span>
                    </div>
                </Link>
                <span className="sub-title">
                    <span className="icon"></span>
                    <span className="title">Статистика</span>
                </span>
                <Link to="#" className="text-decoration-none link">
                    <div className="main-name">
                        <span className="icon"></span>
                        <span className="title">Отчеты</span>
                    </div>
                </Link>
                <div to="#" className="text-decoration-none link active">
                    <div className="main-name">
                        <span className="icon"></span>
                        <span className="title">Заявки</span>
                    </div>

                    <nav className="child-navigation">
                        <Link to="#" className="link">
                            Список заявок
                        </Link>
                        <Link to="#" className="link">
                            Штрафы и доплаты
                        </Link>
                        <Link to="#" className="link">
                            Блокировки
                        </Link>
                        <Link to="#" className="link">
                            История ставок
                        </Link>
                        <Link to="#" className="link">
                            Потерялась заявка/ активация
                        </Link>
                    </nav>
                </div>
                <Link to="#" className="text-decoration-none link">
                    <div className="main-name">
                        <span className="icon"></span>
                        <span className="title">Выплаты</span>
                    </div>
                </Link>
                <span className="sub-title">
                    <span className="icon"></span>
                    <span className="title">Офферы</span>
                </span>
                <Link to="#" className="text-decoration-none link">
                    <div className="main-name">
                        <span className="icon"></span>
                        <span className="title">Офферы</span>
                    </div>
                </Link>
                <Link to="#" className="text-decoration-none link">
                    <div className="main-name">
                        <span className="icon"></span>
                        <span className="title">Мои ссылки</span>
                    </div>
                </Link>
                <Link to="#" className="text-decoration-none link">
                    <div className="main-name">
                        <span className="icon"></span>
                        <span className="title">Баннеры</span>
                    </div>
                </Link>
                <Link to="#" className="text-decoration-none link">
                    <div className="main-name">
                        <span className="icon"></span>
                        <span className="title">Постбеки</span>
                    </div>
                </Link>
                <Link to="#" className="text-decoration-none link mt-40">
                    <div className="main-name">
                        <span className="icon"></span>
                        <span className="title">Справка</span>
                    </div>
                </Link>
            </nav> */}
        </div>
    );
}

export default PartnerNavigationWrapper;

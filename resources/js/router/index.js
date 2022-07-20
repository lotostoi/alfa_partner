import React from "react";
import { Route } from "react-router-dom";
import RoutesMap from "./routesMap";

import MainPage from "../pages/MainPage";
import ReportsPage from "../pages/ReportsPage";
import Orders from "../pages/orders";
import OrdersList from "../pages/orders/orders-list";
import Fines from "../pages/orders/fines";
import Blockings from "../pages/orders/blockings";
import RateHistory from "../pages/orders/rate-history";

import PaymentsPage from "../pages/PaymentsPage";
import Profile from "../pages/profile";
import PersonalInfo from "../pages/profile/personal-info";
import PersonalPayments from "../pages/profile/payments/index";

import NewsPage from "../pages/NewsPage";
import SupportPage from "../pages/SupportPage";

const routeList = [
    /**
     * Routs for main Menu
     */
    {
        name: "main",
        path: "/main",
        component: <MainPage />,
        location: "menu",
        text: "Главная",
        type: "route",
        imgIcon: "home-icon.svg",
    },
    {
        name: "titleStatistic",
        text: "Статистика",
        type: "subTitle",
        location: "menu",
    },
    {
        name: "reports",
        path: "reports",
        component: <ReportsPage />,
        location: "menu",
        text: "Отчеты",
        type: "route",
        imgIcon: "reports-icon.svg",
    },
    {
        name: "orders",
        path: "orders/",
        component: <Orders />,
        location: "menu",
        text: "Заявки",
        type: "route",
        imgIcon: "orders-icon.svg",
        childeRoutes: [
            {
                name: "orders-list",
                path: "orders-list",
                component: <OrdersList />,
                location: "menu",
                text: "Список заявок",
                index: true,
            },
            {
                name: "fines",
                path: "fines",
                component: <Fines />,
                location: "menu",
                text: "Штрафы и доплаты",
                index: false,
            },
            {
                name: "blockings",
                path: "blockings",
                component: <Blockings />,
                location: "menu",
                text: "Блокировки",
                index: false,
            },
            {
                name: "rate-history",
                path: "rate-history",
                component: <RateHistory />,
                location: "menu",
                text: "История ставок",
                index: false,
            },
        ],
    },
    {
        name: "payments",
        path: "payments",
        component: <PaymentsPage />,
        location: "menu",
        text: "Платежи",
        type: "route",
        imgIcon: "payments-icon.svg",
    },
    {
        name: "titleOffers",
        text: "Офферы",
        type: "subTitle",
        location: "menu",
    },
    {
        name: "offers",
        path: "offers",
        component: <PaymentsPage />,
        location: "menu",
        text: "Офферы",
        type: "route",
        imgIcon: "offers-icon.svg",
    },
    {
        name: "myLinks",
        path: "my-links",
        component: <PaymentsPage />,
        location: "menu",
        text: "Moи ссылки",
        type: "route",
        imgIcon: "links-icon.svg",
    },

    /**
     * Routs for header
     */
    {
        name: "support",
        path: "support",
        component: <SupportPage />,
        location: "header",
        mobileLocation: "menu",
        text: "Поддержка",
        type: "route",
    },
    {
        name: "news",
        path: "news",
        component: <NewsPage />,
        location: "header",
        mobileLocation: "menu",
        text: "Новости",
        type: "route",
    },
    {
        name: "profile",
        path: "profile/",
        component: <Profile />,
        location: "header",
        text: "Мой профиль",
        type: "route",
        childeRoutes: [
            {
                name: "personal-info",
                path: "personal-info",
                component: <PersonalInfo />,
                location: "header",
                text: "Персональная информация",
                index: true,
            },
            {
                name: "payment",
                path: "payment",
                component: <PersonalPayments />,
                location: "header",
                text: "Оплата",
                index: false,
            },
        ],
    },
];

const onlyRoutes = routeList.filter(({ type }) => type === "route");

const menuRoutes = (() => {
    const onlyDesktop = routeList.filter(({ location }) => location === "menu");
    const andMobile = routeList.filter(
        ({ mobileLocation }) => mobileLocation === "menu"
    );

    const firstPart = [...onlyDesktop].splice(0, 1);
    const lastPart = [...onlyDesktop].splice(1);
    
    return [...firstPart, ...andMobile, ...lastPart];
})();

console.log(menuRoutes);

const headerRoutes = routeList.filter(({ location }) => location === "header");

const { getUrlByKey, getUrlByShortKey } = new RoutesMap(onlyRoutes);

export const routes = onlyRoutes.map((rout) => {
    if ("childeRoutes" in rout) {
        return (
            <Route
                path={rout.path}
                key={rout.name}
                element={React.cloneElement(rout.component, { ...rout })}
            >
                {rout.childeRoutes.map((childRoute) => {
                    return (
                        <Route
                            index
                            path={childRoute.path}
                            key={childRoute.name}
                            element={childRoute.component}
                        />
                    );
                })}
            </Route>
        );
    } else {
        return (
            <Route
                path={rout.path}
                key={rout.name}
                element={React.cloneElement(rout.component, { ...rout })}
            />
        );
    }
});

export { menuRoutes, headerRoutes, getUrlByKey, getUrlByShortKey };

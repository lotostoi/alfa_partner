import React from "react";
import { Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ReportsPage from "../pages/ReportsPage";
import OrdersPage from "../pages/ReportsPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import NewsPage from "../pages/NewsPage";
import SupportPage from "../pages/SupportPage";

const routeList = [
    /**
     * Routs for main Menu
     */
    {
        name: "main",
        path: "/",
        component: <MainPage />,
        exact: true,
        location: "menu",
        text: "Главная",
        type: "route",
    },
    {
        name: "titleStatistic",
        text: "Статистика",
        type: "subTitle",
        location: "menu",
    },
    {
        name: "reports",
        path: "/reports",
        component: <ReportsPage />,
        exact: true,
        location: "menu",
        text: "Отчеты",
        type: "route",
    },
    {
        name: "orders",
        path: "/orders/",
        component: <OrdersPage />,
        exact: true,
        location: "menu",
        text: "Заявки",
        type: "route",
        childeRoutes: [
            {
                name: "orders-list",
                path: "list",
                component: <OrdersPage />,
                exact: true,
                location: "menu",
                index: true,
            },
            {
                name: "orders-list",
                path: "list",
                component: <OrdersPage />,
                exact: true,
                location: "menu",
                index: false,
            },
            {
                name: "orders-list",
                path: "list",
                component: <OrdersPage />,
                exact: true,
                location: "menu",
                index: false,
            },
        ],
    },
    {
        name: "payments",
        path: "/payments",
        component: <PaymentsPage />,
        exact: true,
        location: "menu",
        text: "Отчеты",
        type: "route",
    },
    {
        name: "titleOffers",
        text: "Офферы",
        type: "subTitle",
        location: "menu",
    },
    {
        name: "offers",
        path: "/offers",
        component: <PaymentsPage />,
        exact: true,
        location: "menu",
        text: "Офферы",
        type: "route",
    },
    {
        name: "myLinks",
        path: "/my-links",
        component: <PaymentsPage />,
        exact: true,
        location: "menu",
        text: "Moи ссылки",
        type: "route",
    },

    /**
     * Routs for header
     */
    {
        name: "news",
        path: "/news",
        component: <NewsPage />,
        exact: true,
        location: "header",
        text: "Новости",
        type: "route",
    },
    {
        name: "profile",
        path: "/profile",
        component: <ProfilePage />,
        exact: true,
        location: "header",
        text: "профиль",
        type: "route",
    },
    {
        name: "support",
        path: "/support",
        component: <SupportPage />,
        exact: true,
        location: "header",
        text: "Поддержка",
        type: "route",
    },
];

const onlyRoutes = routeList.filter(({ type }) => type === "route");

const menuRoutes = routeList.filter(({ location }) => location === "menu");

const routesMap = (key) => {
    const map = new Map();
    onlyRoutes.forEach((rout) => map.set(rout.name, rout.path));
    if (map.has(key)) {
        return map.get(key);
    }
    throw new Error(`Rout with name --${key}-- not found!!!`);
};

export const routes = onlyRoutes.map((rout) => (
    <Route path={rout.path} key="{rout.path}" element={rout.component} />
));

export { menuRoutes, routesMap };

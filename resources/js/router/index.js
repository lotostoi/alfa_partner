import React from "react";
import { Route } from "react-router-dom";

import Profile from "../pages/Profile";
import News from "../pages/News";

const routeList = [
    {
        name: "profile",
        path: "/",
        component: <Profile/>,
        exact: true,
        strict: false,
    },
    {
        name: "profile",
        path: "/news",
        component: <News/>,
        exact: true,
        strict: false,
    },
];

export const routes = routeList.map((rout) => (
    <Route path={rout.path} key="{rout.path}" element={rout.component} />
));

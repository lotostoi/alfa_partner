import React, { useEffect } from "react";
import { createBrowserHistory } from "history";

import {
    Routes,
    Route,
    unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

const history = createBrowserHistory();

import LoginPage from "./pages/auth/login/login";

import { routes } from "./router";

import { isAuth } from "./api/auth";

import PartnerMainLayout from "@l/partner/partner-main-layout.jsx";


function App() {
    useEffect(async () => {
        const to = await isAuth();

        if (history.location.pathname !== "/login" && typeof to === "string") {
            history.push(to);
        }

        if (history.location.pathname === "/login" && typeof to !== "string") {
            history.push("/main");
        }
    }, []);

    return (
        <div
            className="w-100 p-0"
        >
            <HistoryRouter history={history}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<PartnerMainLayout />}>
                        {routes}
                    </Route>
                </Routes>
            </HistoryRouter>
        </div>
    );
}

export default App;

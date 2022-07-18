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
import { Provider } from "react-redux";
import { store } from "./store";

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
            className="container p-0"
            style={{ maxWidth: 1440, borderRight: "1px solid #ece9e94a" }}
        >
            <Provider store={store}>
                <HistoryRouter history={history}>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<PartnerMainLayout />}>
                            {routes}
                        </Route>
                    </Routes>
                </HistoryRouter>
            </Provider>
        </div>
    );
}

export default App;

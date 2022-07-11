import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./router";

import PartnerMainLayout from "@l/partner/partner-main-layout.js";

function App() {
    return (
        <div
            className="container p-0"
            style={{ maxWidth: 1440, borderRight: "1px solid #ece9e94a" }}
        >
            <Router>
                <Routes>
                    <Route path="/" element={<PartnerMainLayout />}>
                        {routes}
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

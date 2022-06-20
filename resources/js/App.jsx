import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { routes } from "./router";

function App() {
    return (
        <div
            className="container p-0"
            style={{ maxWidth: 1440, borderRight: "1px solid #ece9e94a" }}
        >
            <Router>
                <Routes>{routes}</Routes>
            </Router>
        </div>
    );
}

export default App;

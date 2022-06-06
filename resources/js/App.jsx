import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import { routes } from "./router";

function App() {
    return (
        <div className="container">
            <Router>
                <Routes>{routes}</Routes>
            </Router>
        </div>
    );
}

export default App;

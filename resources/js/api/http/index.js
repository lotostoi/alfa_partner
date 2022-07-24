import axios from "axios";

import { createBrowserHistory } from "history";
let history = createBrowserHistory();

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export default function api(navigate = null) {
    const api = axios.create({
        baseURL: "/api/",
        headers: { Accept: "application/json, text/plain, */*" },
    });

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                return "/login";
            }
            return Promise.reject(error);
        }
    );

    return api;
}

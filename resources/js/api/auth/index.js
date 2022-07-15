import api from "../http";

export const isAuth = () => api().get("is-login");
export const logout = async () => {
    await api().post("logout");
    return true;
};
export const login = async (user) => {
    await api().get("/sanctum/csrf-cookie");
    await api().post("login", user);
};

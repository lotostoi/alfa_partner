import { login } from "../../../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isError, setIsError] = useState(null);
    const [isLoad, setIsLoad] = useState(null);

    const navigate = useNavigate();

    const auth = async (e) => {
        e.preventDefault();
        setIsLoad(true);
        try {
            await login({ email, password });
            setIsError(null);
            navigate("/main");
        } catch (error) {
            if (error.response.status === 422) {
                setIsError(true);
            }
        }
        setIsLoad(false);
    };

    //useEffect(() => {}, [isLoad]);

    return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <form style={{ maxWidth: 300 }}>
                {isError ? (
                    <div className="alert alert-danger">
                        Неверный логин или пароль
                    </div>
                ) : null}
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-danger mt-2"
                    onClick={auth}
                >
                    <span>Войти</span>
                    {isLoad ? (
                        <div
                            class="spinner-grow spinner-grow-sm ms-1"
                            role="status"
                        ></div>
                    ) : null}
                </button>
            </form>
        </div>
    );
}

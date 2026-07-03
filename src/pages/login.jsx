import { useState } from "react";
import api from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        try {

            const res = await api.post("/users/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data.token);

            window.location="/dashboard";

            alert("Login correcto");

        } catch (err) {

            alert(err.response.data.message);

        }

    };

    return (

        <div className="container mt-5">

            <h1>Login</h1>

            <input
                className="form-control mb-2"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                className="form-control mb-2"
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button
                className="btn btn-primary"
                onClick={login}
            >
                Ingresar
            </button>

        </div>

    );

}

export default Login;
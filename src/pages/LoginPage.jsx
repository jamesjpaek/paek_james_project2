import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();

    const navigate = useNavigate();

    function handleSubmit(e) {

        e.preventDefault();

        if (username.trim() === "" || password.trim() === "") {

            setError("Please enter a username and password.");

            return;

        }

        login(username);

        navigate("/blog");

    }

    return (

        <main className="login-page">

            <div className="login-card">

                <h1>Login</h1>

                <p>Sign in to comment on blog posts.</p>

                {error && <p className="error">{error}</p>}

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </main>

    );

}

export default LoginPage;
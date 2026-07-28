import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const {
        isLoggedIn,
        username,
        logout
    } = useAuth();

    const navigate = useNavigate();

    function handleLogout() {

        logout();

        navigate("/");

    }

    return (

        <nav className="navbar">

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/blog">Blog</Link>

                <Link to="/contact">Contact</Link>

            </div>

            <div className="nav-right">

                <button
                    className="theme-btn"
                    onClick={toggleTheme}
                >
                    {darkMode ? "☀️ Light" : "🌙 Dark"}
                </button>

                {isLoggedIn ? (

                    <>
                        <span className="username">
                            Hello, {username}
                        </span>

                        <button
                            className="login-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>

                ) : (

                    <Link
                        className="login-btn"
                        to="/login"
                    >
                        Login
                    </Link>

                )}

            </div>

        </nav>

    );

}

export default Navbar;
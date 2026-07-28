import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <BrowserRouter>

        <Header />
        <Navbar />

        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route
                path="/blog"
                element={
                    <ProtectedRoute>
                        <BlogPostsPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/post/:id"
                element={
                    <ProtectedRoute>
                        <IndividualPostPage />
                    </ProtectedRoute>
                }
            />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/contact" element={<ContactPage />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
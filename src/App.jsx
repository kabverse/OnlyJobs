import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import NavBar from "./Components/Webpage/NavBar/NavBar";
import Header from "./Components/Webpage/Header/Header";
import Features from "./Components/Webpage/Features/Features";
import Pricing from "./Components/Webpage/Pricing/Pricing";
import SuccessStory from "./Components/Webpage/SuccessStory/SuccessStory";
import Numbers from "./Components/Webpage/Numbers/Numbers";
import Work from "./Components/Webpage/Work/Work";
import FAQ from "./Components/Webpage/FAQ/FAQ";
import Newsletter from "./Components/Webpage/Newsletter/Newsletter";
import Footer from "./Components/Webpage/Footer/Footer";
import Questions from "./Components/Webpage/Questions/Job Seeker/Questions";

// Layout component to handle navbar visibility
const Layout = ({ children }) => {
    const location = useLocation();
    const hideNavbarPaths = ["/Questions", "/signup", "/login"]; // Add any paths where you want to hide the navbar

    const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

    return (
        <>
            {shouldShowNavbar && <NavBar />}
            {children}
        </>
    );
};

// Floating Help Button Component
const FloatingHelpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`floating-button ${isVisible ? "show" : ""}`}
            title="Need Help?"
        >
            <span role="img" aria-label="help">
                💬
            </span>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Header />
                            <Features />
                            <Pricing />
                            <SuccessStory />
                            <Numbers />
                            <Work />
                            <FAQ />
                            <Newsletter />
                            <Footer />
                            <FloatingHelpButton />
                        </Layout>
                    }
                />

                {/* Questions Page */}
                <Route
                    path="/questions"
                    element={
                        <Layout>
                            <Questions />
                            <FloatingHelpButton />
                        </Layout>
                    }
                />

                {/* Signup Page - No NavBar */}
                <Route
                    path="/signup"
                    element={
                        <>
                            {/* Your Signup component will go here */}
                            <FloatingHelpButton />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;

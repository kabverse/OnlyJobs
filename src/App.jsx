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
import Login from "./Components/Webpage/Login/Login";
import RoleSelect from "./Components/Webpage/Questions/RoleSelect/RoleSelect";
import HelperChat from "./Components/Webpage/Helper/HelperChat";

// Layout component to handle navbar visibility
const Layout = ({ children }) => {
    const location = useLocation();
    const hideNavbarPaths = ["/login", "/questions"]; // Base paths to hide navbar

    // Check if current path starts with any of the hide paths
    const shouldHideNavbar = hideNavbarPaths.some((path) =>
        location.pathname.startsWith(path)
    );

    return (
        <>
            {!shouldHideNavbar && <NavBar />}
            {children}
        </>
    );
};

// Floating Help Button Component
const FloatingHelpButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <div
                className={`floating-button ${isVisible ? "show" : ""}`}
                title="Need Help?"
                onClick={() => setIsChatOpen(true)}
            >
                <span role="img" aria-label="help">
                    💬
                </span>
            </div>
            <HelperChat
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
        </>
    );
};

// Home Page Component
const Home = () => (
    <>
        <Header />
        <Features />
        <Pricing />
        <SuccessStory />
        <Numbers />
        <Work />
        <FAQ />
        <Newsletter />
        <Footer />
    </>
);

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<Home />} />

                    {/* Authentication Routes */}
                    <Route path="/login" element={<Login />} />

                    {/* Questions Flow */}
                    <Route path="/questions" element={<RoleSelect />} />
                    <Route
                        path="/questions/jobseeker"
                        element={<Questions />}
                    />

                    {/* Add employer questions route when ready */}
                    {/* <Route path="/questions/employer" element={<EmployerQuestions />} /> */}
                </Routes>
                <FloatingHelpButton />
            </Layout>
        </Router>
    );
};

export default App;

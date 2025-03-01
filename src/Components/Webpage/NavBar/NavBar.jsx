import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../assets/logo-blue.png";

const NavBar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="nav">
            <Link to="/" className="logo">
                <img src={logo} alt="OnlyJobs Logo" className="logo-image" />
            </Link>
            <div className="nav-links">
                <a
                    href="#features"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("features");
                    }}
                >
                    Features
                </a>

                <a
                    href="#pricing"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("pricing");
                    }}
                >
                    Pricing
                </a>

                <a
                    href="#testimonials"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("testimonials");
                    }}
                >
                    Success Stories
                </a>

                <a
                    href="#numbers"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("numbers");
                    }}
                >
                    Stats
                </a>

                <a
                    href="#how-it-works"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("how-it-works");
                    }}
                >
                    How It Works
                </a>

                <a
                    href="#faq-section"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("faq-section");
                    }}
                >
                    FAQ
                </a>
            </div>
            <div className="nav-buttons">
                <Link to="/" className="button button-white">
                    Log In
                </Link>
                <Link to="/Questions" className="button button-dark">
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;

import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="#" className="logo">
        OnlyJobs
      </Link>
      <div className="nav-links">
        <Link to="#features">Features</Link>
        <Link to="#pricing">Pricing</Link>
        <Link to="#testimonials">Testimonials</Link>
        <Link to="#about">About</Link>
      </div>
      <div className="nav-buttons">
        <Link to="Login.html" className="button button-white">
          Log In
        </Link>
        <Link to="#" className="button button-dark">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🚗</span>
          <span className="brand-text">راصد AI | Rased</span>
        </Link>

        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}
          >
            الرئيسية
          </Link>
          <Link
            to="/use-cases"
            className={`navbar-link ${location.pathname === "/use-cases" ? "active" : ""}`}
          >
            Use Cases
          </Link>
          <Link
            to="/developers"
            className={`navbar-link ${location.pathname === "/developers" ? "active" : ""}`}
          >
            للمطورين
          </Link>
          <Link
            to="/about"
            className={`navbar-link ${location.pathname === "/about" ? "active" : ""}`}
          >
            حول المشروع
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

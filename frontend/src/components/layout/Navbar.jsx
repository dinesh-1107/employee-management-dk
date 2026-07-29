import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import logo from "../../assets/logo.jpg";
import "./Navbar.css";

export default function Navbar() {

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <nav className="top-navbar">

      {/* Left Side */}
      <div className="navbar-left">

        <img
          src={logo}
          alt="Stackly Logo"
          className="navbar-logo"
        />

        <div>
          <h3 className="page-title">Stackly</h3>
          <span className="today-date">
            Employee Management System
          </span>
        </div>

      </div>

      {/* Right Side */}
      <div className="navbar-right">

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search employees..."
          />
        </div>

        <div className="notification">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <div className="profile">
          <FaUserCircle className="profile-img" />

          <div>
            <h6>Dinesh Kannan C</h6>
            <small>Administrator</small>
          </div>

        </div>

      </div>

    </nav>
  );
}
import {
  FaHome,
  FaUsers,
  FaUserPlus,
  FaBuilding,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "./Sidebar.css";
import logo from "../../assets/logo.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="logo-section">
        <img
          src={logo}
          alt="Stackly Logo"
          className="company-logo"
        />

        <h3>Stackly</h3>
        <p>Employee Management System</p>
      </div>

      {/* Admin Profile */}
      <div className="profile-section">
        <FaUserCircle className="profile-icon" />
        <h5>DineshKannan C</h5>
        <span className="online-status">🟢 Administrator</span>
      </div>

      {/* Menu */}
      <ul className="sidebar-menu">

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employees"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUsers />
            <span>Employees</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employees"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUserPlus />
            <span>Add Employee</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/departments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBuilding />
            <span>Departments</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaChartBar />
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

      {/* Logout */}
      <div className="logout-section">
        <NavLink to="/">
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>
      </div>

    </div>
  );
}
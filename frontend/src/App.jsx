import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import Departments from "./pages/Departments";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <Routes>

      {/* Default Route */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      {/* Employees */}
      <Route
        path="/employees"
        element={<EmployeeList />}
      />

      {/* Departments */}
      <Route
        path="/departments"
        element={<Departments />}
      />

      {/* Reports */}
      <Route
        path="/reports"
        element={<Reports />}
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={<Settings />}
      />

      {/* Invalid Route */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}
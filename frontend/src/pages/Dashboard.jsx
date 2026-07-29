import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import StatCard from "../components/dashboard/StatCard";
import EmployeeChart from "../components/dashboard/EmployeeChart";
import DepartmentChart from "../components/dashboard/DepartmentChart";
import RecentEmployees from "../components/dashboard/RecentEmployees";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";

import {
  FaUsers,
  FaBuilding,
  FaUserCheck,
  FaUserPlus,
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div
          className="container-fluid p-4 bg-light"
          style={{ minHeight: "100vh" }}
        >
          {/* Welcome Banner */}
          <WelcomeBanner />

          {/* Statistics Cards */}
          <div className="row g-4 mt-2">
            <div className="col-md-3">
              <StatCard
                title="Total Employees"
                value="8000"
                color="#2563EB"
                icon={<FaUsers />}
              />
            </div>

            <div className="col-md-3">
              <StatCard
                title="Departments"
                value="20"
                color="#10B981"
                icon={<FaBuilding />}
              />
            </div>

            <div className="col-md-3">
              <StatCard
                title="Active Employees"
                value="7850"
                color="#F59E0B"
                icon={<FaUserCheck />}
              />
            </div>

            <div className="col-md-3">
              <StatCard
                title="New Joiners"
                value="150"
                color="#EF4444"
                icon={<FaUserPlus />}
              />
            </div>
          </div>

          {/* Charts */}
          <div className="row mt-4">
            <div className="col-lg-8">
              <EmployeeChart />
            </div>

            <div className="col-lg-4">
              <DepartmentChart />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="row mt-4">
            <div className="col-12">
              <QuickActions />
            </div>
          </div>

          {/* Recent Employees & Activity */}
<div className="row mt-4 mb-4">

  <div className="col-lg-8">
    <RecentEmployees />
  </div>

  <div className="col-lg-4">
    <RecentActivity />
  </div>

</div>
        </div>
      </div>
    </>
  );
}
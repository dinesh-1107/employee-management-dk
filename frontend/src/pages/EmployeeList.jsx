import { useEffect, useState, useMemo } from "react";
import { Table, Button, Form, Badge } from "react-bootstrap";
import axios from "axios";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaSearch,
  FaFilter,
  FaEye,
} from "react-icons/fa";

import AddEmployeeModal from "../components/employee/AddEmployeeModal.jsx";
import ViewEmployeeModal from "../components/employee/ViewEmployeeModal.jsx";

const API_BASE_URL = "http://localhost:5000/api/employees";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");

  const [viewEmployee, setViewEmployee] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
  try {
    const response = await axios.get(API_BASE_URL);

console.log(response.data);

    setEmployees(response.data);
  } catch (err) {
    console.error("Error fetching employees:", err);
  }
};
  const handleShow = () => {
    setIsEditing(false);
    setSelectedEmployee(null);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setIsEditing(false);
    setSelectedEmployee(null);
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleViewEmployee = (employee) => {
    setViewEmployee(employee);
    setShowViewModal(true);
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
    setViewEmployee(null);
  };

  const handleSaveEmployee = async (employee) => {
    const payload = {
      name: employee.fullName,
      email: employee.email,
      phone: employee.phone,
      department: employee.department,
      role: employee.role,
      salary: employee.salary,
      joining_date: employee.joiningDate,
      status: employee.status,
    };

    try {
      if (isEditing) {
        await axios.put(`${API_BASE_URL}/${selectedEmployee.id}`, payload);
        alert("✅ Employee Updated Successfully");
      } else {
        await axios.post(API_BASE_URL, payload);
        alert("✅ Employee Added Successfully");
      }

      fetchEmployees();
      handleClose();
    } catch (err) {
      console.error(err);
      alert("❌ Save Operation Failed");
    }
  };

  const handleDeleteEmployee = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      alert("✅ Employee Deleted Successfully");
      fetchEmployees();
    } catch (err) {
      console.error(err);
      alert("❌ Delete Failed");
    }
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const searchTerm = search.toLowerCase();
      const matchesSearch =
        (emp.name || "").toLowerCase().includes(searchTerm) ||
        (emp.email || "").toLowerCase().includes(searchTerm) ||
        (emp.department || "").toLowerCase().includes(searchTerm) ||
        (emp.role || "").toLowerCase().includes(searchTerm);

      const matchesDepartment =
        department === "All" || emp.department === department;

      const matchesStatus =
        status === "All" || emp.status === status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [employees, search, department, status]);

  const totalEmployees = employees.length;
  const activeEmployees = useMemo(
    () => employees.filter((emp) => emp.status === "Active").length,
    [employees]
  );
  const onLeaveEmployees = useMemo(
    () => employees.filter((emp) => emp.status === "On Leave").length,
    [employees]
  );
  const availableDepartments = useMemo(
    () => Array.from(new Set(employees.map((emp) => emp.department).filter(Boolean))),
    [employees]
  );

  return (
    <>
      <div className="container-fluid py-3">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <div className="d-flex align-items-center gap-2">
              <h2 className="fw-bold mb-0">Employee Management</h2>
              <Badge bg="primary" pill className="fs-6">
                {filteredEmployees.length}{" "}
                {filteredEmployees.length === 1 ? "Employee" : "Employees"}
              </Badge>
            </div>
            <p className="text-muted small mb-0 mt-1">
              Manage all Stackly employees, roles, and status.
            </p>
          </div>

          <Button
            variant="primary"
            onClick={handleShow}
            className="d-flex align-items-center gap-2 align-self-start align-self-md-auto"
          >
            <FaPlus />
            <span>Add Employee</span>
          </Button>
        </div>

        {/* Dashboard Statistics */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h6 className="text-muted">Total Employees</h6>
                <h2 className="fw-bold text-primary">{totalEmployees}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h6 className="text-muted">Active</h6>
                <h2 className="fw-bold text-success">{activeEmployees}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h6 className="text-muted">On Leave</h6>
                <h2 className="fw-bold text-warning">{onLeaveEmployees}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h6 className="text-muted">Departments</h6>
                <h2 className="fw-bold text-info">
                  {availableDepartments.length}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-body p-4">
            {/* Toolbar: Search & Filters */}
            <div className="row g-3 mb-4 align-items-center">
              <div className="col-12 col-md-5 col-lg-4">
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0">
                    <FaSearch className="text-muted" />
                  </span>
                  <Form.Control
                    type="text"
                    className="bg-light border-start-0 ps-0"
                    placeholder="Search name, email, or role..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                <Form.Select
                  className="bg-light"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="All">All Departments</option>
                  {availableDepartments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                <Form.Select
                  className="bg-light"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Inactive">Inactive</option>
                </Form.Select>
              </div>

              {(search || department !== "All" || status !== "All") && (
                <div className="col-12 col-lg-auto ms-auto text-end">
                  <Button
                    variant="link"
                    className="text-decoration-none p-0 text-muted small"
                    onClick={() => {
                      setSearch("");
                      setDepartment("All");
                      setStatus("All");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Table */}
            <div className="table-responsive">
              <Table hover className="align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>

                <tbody>
  {filteredEmployees.length > 0 ? (
    filteredEmployees.map((emp) => {
      console.log(emp);

      return (
        <tr key={emp.id}>
          <td className="fw-bold text-muted">#{emp.id}</td>
          <td className="fw-semibold text-dark">{emp.name}</td>
          <td className="text-secondary">{emp.email}</td>

          <td style={{ color: "red", fontWeight: "bold" }}>
            {String(emp.department)}
          </td>

          <td>{emp.role}</td>

          <td style={{ color: "blue", fontWeight: "bold" }}>
            {String(emp.status)}
          </td>

          <td className="text-end">
            <Button
              variant="outline-info"
              size="sm"
              className="me-2"
              title="View Employee"
              onClick={() => handleViewEmployee(emp)}
            >
              <FaEye />
            </Button>

            <Button
              variant="outline-primary"
              size="sm"
              className="me-2"
              title="Edit Employee"
              onClick={() => handleEditEmployee(emp)}
            >
              <FaEdit />
            </Button>

            <Button
              variant="outline-danger"
              size="sm"
              title="Delete Employee"
              onClick={() => handleDeleteEmployee(emp.id)}
            >
              <FaTrash />
            </Button>
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="7" className="text-center text-muted py-5">
        <div className="d-flex flex-column align-items-center gap-2">
          <FaFilter className="fs-3 text-secondary" />
          <span>No employees match your filter criteria.</span>
        </div>
      </td>
    </tr>
  )}
</tbody>
</Table>
</div>
</div>
</div>

<AddEmployeeModal
  show={showModal}
  handleClose={handleClose}
  handleSave={handleSaveEmployee}
  isEditing={isEditing}
  employee={selectedEmployee}
/>

<ViewEmployeeModal
  show={showViewModal}
  handleClose={handleCloseViewModal}
  employee={viewEmployee}
/>
</div>
</>
);
}
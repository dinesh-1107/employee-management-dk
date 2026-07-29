import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import {
  FaIdBadge,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaBriefcase,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";

export default function AddEmployeeModal({
  show,
  handleClose,
  onSave,
  isEditing,
  selectedEmployee,
}) {
  const initialFormState = {
    fullName: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    salary: "",
    joiningDate: "",
    status: "Active",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditing && selectedEmployee) {
      setFormData({
        fullName: selectedEmployee.name || "",
        email: selectedEmployee.email || "",
        phone: selectedEmployee.phone || "",
        department: selectedEmployee.department || "",
        role: selectedEmployee.role || "",
        salary: selectedEmployee.salary || "",
        joiningDate: selectedEmployee.joining_date
          ? selectedEmployee.joining_date.split("T")[0]
          : "",
        status: selectedEmployee.status || "Active",
      });
    } else {
      setFormData(initialFormState);
    }

    setErrors({});
  }, [show, isEditing, selectedEmployee]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};


    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.department)
      newErrors.department = "Department is required";

    if (!formData.role.trim())
      newErrors.role = "Role is required";

    if (!formData.salary || Number(formData.salary) <= 0)
      newErrors.salary = "Enter a valid salary";

    if (!formData.joiningDate)
      newErrors.joiningDate = "Joining Date is required";

    if (!formData.status)
      newErrors.status = "Status is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSave(formData);
  };

  // Close Modal
  const handleModalClose = () => {
    setFormData(initialFormState);
    setErrors({});
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleModalClose}
      size="lg"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title className="fs-5 fw-bold">
        {isEditing ? "Edit Employee" : "Add New Employee"}
</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit} noValidate>
        <Modal.Body className="px-4 py-3">
          <Row>
            {/* Employee ID */}
            <Col md={6}>
  <Form.Group className="mb-3">
    <Form.Label className="fw-semibold">
      Full Name <span className="text-danger">*</span>
    </Form.Label>

    <InputGroup hasValidation>
      <InputGroup.Text>
        <FaUser />
      </InputGroup.Text>

      <Form.Control
        type="text"
        name="fullName"
        placeholder="e.g. John Doe"
        value={formData.fullName}
        onChange={handleChange}
        isInvalid={!!errors.fullName}
      />

      <Form.Control.Feedback type="invalid">
        {errors.fullName}
      </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
</Col>

            {/* Full Name */}
            <Col md={6}>
              <Form.Group className="mb-3">
  <Form.Label className="fw-semibold">
    Status <span className="text-danger">*</span>
  </Form.Label>

  <InputGroup hasValidation>
    <InputGroup.Text>
    </InputGroup.Text>

    <Form.Select
      name="status"
      value={formData.status}
      onChange={handleChange}
      isInvalid={!!errors.status}
    >
      <option value="">Select Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
      <option value="On Leave">On Leave</option>
    </Form.Select>

    <Form.Control.Feedback type="invalid">
      {errors.status}
    </Form.Control.Feedback>
  </InputGroup>
</Form.Group>
            </Col>

            {/* Email */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Email Address <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Phone Number */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Phone Number <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    <FaPhone />
                  </InputGroup.Text>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Department */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Department <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    <FaBuilding />
                  </InputGroup.Text>
                  <Form.Select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    isInvalid={!!errors.department}
                  >
                    <option value="">Select Department</option>
                    <option value="DevOps">DevOps</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Testing">Testing</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.department}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Role */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Role <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    <FaBriefcase />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="role"
                    placeholder="e.g. Software Engineer"
                    value={formData.role}
                    onChange={handleChange}
                    isInvalid={!!errors.role}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.role}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Salary */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Salary <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    <FaMoneyBillWave />
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    name="salary"
                    placeholder="e.g. 50000"
                    value={formData.salary}
                    onChange={handleChange}
                    isInvalid={!!errors.salary}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.salary}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Joining Date */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Joining Date <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    <FaCalendarAlt />
                  </InputGroup.Text>
                  <Form.Control
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    isInvalid={!!errors.joiningDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.joiningDate}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className="border-top-0 pt-0">
          <Button
            variant="outline-secondary"
            onClick={handleModalClose}
            className="px-4"
          >
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="px-4">
  {isEditing ? "Update Employee" : "Save Employee"}
</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
const db = require("../config/db");

// ======================
// GET All Employees
// ======================
const getEmployees = (req, res) => {
  console.log("GET /api/employees");

  const sql = "SELECT * FROM employees";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("GET Error:", err);
      return res.status(500).json({
        message: "Failed to fetch employees",
        error: err.message,
      });
    }

    res.status(200).json(result);
  });
};

// ======================
// ADD Employee
// ======================
const addEmployee = (req, res) => {
  console.log("POST /api/employees");
  console.log(req.body);

  const {
    name,
    email,
    phone,
    department,
    role,
    salary,
    joining_date,
    status,
  } = req.body;

  const sql = `
    INSERT INTO employees
    (name, email, phone, department, role, salary, joining_date, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, phone, department, role, salary, joining_date, status],
    (err, result) => {
      if (err) {
        console.error("INSERT Error:", err);
        return res.status(500).json({
          message: "Failed to add employee",
          error: err.message,
        });
      }

      res.status(201).json({
        message: "Employee Added Successfully",
        employeeId: result.insertId,
      });
    }
  );
};

// ======================
// UPDATE Employee
// ======================
const updateEmployee = (req, res) => {
  console.log("PUT /api/employees/:id");

  const { id } = req.params;

  const {
    name,
    email,
    phone,
    department,
    role,
    salary,
    joining_date,
    status,
  } = req.body;

  const sql = `
    UPDATE employees
    SET
      name = ?,
      email = ?,
      phone = ?,
      department = ?,
      role = ?,
      salary = ?,
      joining_date = ?,
      status = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      name,
      email,
      phone,
      department,
      role,
      salary,
      joining_date,
      status,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error("UPDATE Error:", err);
        return res.status(500).json({
          message: "Failed to update employee",
          error: err.message,
        });
      }

      res.status(200).json({
        message: "Employee Updated Successfully",
      });
    }
  );
};

// ======================
// DELETE Employee
// ======================
const deleteEmployee = (req, res) => {
  console.log("DELETE /api/employees/:id");

  const { id } = req.params;

  db.query(
    "DELETE FROM employees WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error("DELETE Error:", err);
        return res.status(500).json({
          message: "Failed to delete employee",
          error: err.message,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Employee Not Found",
        });
      }

      res.status(200).json({
        message: "Employee Deleted Successfully",
      });
    }
  );
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
const db = require("../config/db");

// GET All Employees
const getEmployees = (req, res) => {
  const sql = "SELECT * FROM employees";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });
};

// ADD Employee
const addEmployee = (req, res) => {
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
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Employee Added Successfully",
        employeeId: result.insertId,
      });
    }
  );
};

// UPDATE Employee
const updateEmployee = (req, res) => {
  console.log("========== PUT API HIT ==========");
  console.log("ID:", req.params.id);
  console.log("BODY:", req.body);

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
    [
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
      ]
    ][0],
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
        return res.status(500).json(err);
      }

      res.status(200).json({
        message: "Employee Updated Successfully",
      });
    }
  );
};

// DELETE Employee
const deleteEmployee = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM employees WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Delete Failed",
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
  });
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
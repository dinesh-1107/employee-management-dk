const express = require("express");
const router = express.Router();

const {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

// GET All Employees
router.get("/", getEmployees);

// ADD Employee
router.post("/", addEmployee);

// UPDATE Employee
router.put("/:id", updateEmployee);

// DELETE Employee
router.delete("/:id", deleteEmployee);

module.exports = router;
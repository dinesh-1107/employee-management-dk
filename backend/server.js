const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Employee Management Backend API Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

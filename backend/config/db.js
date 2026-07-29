const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Maila210526@", // password illa-na ""
  database: "employee_management",
});

connection.connect((err) => {
  if (err) {
    console.log("❌ MySQL Connection Failed:", err.message);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
});

module.exports = connection;
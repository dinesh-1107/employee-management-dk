const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "Maila210526@",
  database: "employee_db",
});

connection.connect((err) => {
  if (err) {
    console.log("❌ MySQL Connection Failed:", err.message);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
});

module.exports = connection;

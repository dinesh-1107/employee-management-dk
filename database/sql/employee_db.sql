-- Employee Management Database

CREATE DATABASE IF NOT EXISTS employee_db;
USE employee_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(20),
    salary DECIMAL(10,2),
    department_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

INSERT INTO departments (department_name) VALUES
('HR'),
('Finance'),
('IT'),
('Sales');

INSERT INTO employees (name,email,phone,salary,department_id) VALUES
('John Doe','john@example.com','9876543210',55000.00,3),
('Priya Sharma','priya@example.com','9123456780',62000.00,1),
('Rahul Kumar','rahul@example.com','9988776655',70000.00,2);

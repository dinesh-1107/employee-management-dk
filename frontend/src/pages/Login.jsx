import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import logo from "../assets/logo.jpg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@stackly.com" &&
      password === "admin123"
    ) {
      toast.success("Login Successful 🎉");
      navigate("/dashboard");
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#2563EB,#1E3A8A)",
      }}
    >
      <Card
        className="shadow-lg border-0"
        style={{
          width: "430px",
          borderRadius: "20px",
        }}
      >
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <img
              src={logo}
              alt="Stackly"
              style={{
                width: 90,
                borderRadius: 15,
              }}
            />

            <h2 className="mt-3 fw-bold">
              Stackly
            </h2>

            <p className="text-muted">
              Employee Management System
            </p>
          </div>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaUser className="me-2" />
                Email
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                <FaLock className="me-2" />
                Password
              </Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100"
              size="lg"
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
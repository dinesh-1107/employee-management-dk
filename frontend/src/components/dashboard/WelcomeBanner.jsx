import { FaArrowTrendUp } from "react-icons/fa6";

export default function WelcomeBanner() {
  return (
    <div
      className="p-4 mb-4"
      style={{
        background: "linear-gradient(135deg, #2563EB, #1E40AF)",
        borderRadius: "20px",
        color: "white",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">

        <div>
          <h2 className="fw-bold">
            👋 Welcome back, Dinesh!
          </h2>

          <p className="mb-0">
            Welcome to Stackly Employee Management System.
            “Innovating today, securing tomorrow—your trusted partner in IT solutions.”

          </p>
        </div>

        <div
          style={{
            fontSize: "60px",
            opacity: ".25",
          }}
        >
          <FaArrowTrendUp />
        </div>

      </div>
    </div>
  );
}
import { Card } from "react-bootstrap";

export default function StatCard({ title, value, color, icon }) {
  return (
    <Card
      className="shadow-sm border-0"
      style={{
        borderLeft: `5px solid ${color}`,
        borderRadius: "15px",
      }}
    >
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-secondary mb-2">
              {title}
            </h6>

            <h2 className="fw-bold mb-0">
              {value}
            </h2>
          </div>

          <div
            style={{
              fontSize: "35px",
              color: color,
            }}
          >
            {icon}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
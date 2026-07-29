import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function DepartmentChart() {

  const data = {
    labels: [
      "IT",
      "HR",
      "Finance",
      "Testing",
      "Sales",
    ],

    datasets: [
      {
        data: [40, 15, 12, 18, 15],

        backgroundColor: [
          "#2563EB",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div
      className="card shadow-sm border-0"
      style={{ height: "420px" }}
    >
      <div className="card-body">

        <h5 className="fw-bold mb-3">
          Department Distribution
        </h5>

        <div style={{ height: "320px" }}>
          <Pie data={data} options={options} />
        </div>

      </div>
    </div>
  );
}
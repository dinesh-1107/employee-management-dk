import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function EmployeeChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Employees",
        data: [20, 35, 45, 60, 90, 125],
        borderColor: "#2563EB",
        backgroundColor: "rgba(37,99,235,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-body">
        <h5 className="mb-3">Employee Growth</h5>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
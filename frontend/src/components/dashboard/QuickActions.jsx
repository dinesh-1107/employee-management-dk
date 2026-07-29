import {
  FaUserPlus,
  FaUsers,
  FaBuilding,
  FaChartBar,
} from "react-icons/fa";

export default function QuickActions() {

  const actions = [
    {
      title: "Add Employee",
      icon: <FaUserPlus />,
      color: "#2563EB",
    },
    {
      title: "Employees",
      icon: <FaUsers />,
      color: "#10B981",
    },
    {
      title: "Departments",
      icon: <FaBuilding />,
      color: "#F59E0B",
    },
    {
      title: "Reports",
      icon: <FaChartBar />,
      color: "#EF4444",
    },
  ];

  return (
    <div className="card border-0 shadow-sm mt-4">
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          ⚡ Quick Actions
        </h5>

        <div className="row">

          {actions.map((item, index) => (

            <div className="col-md-3 mb-3" key={index}>

              <button
                className="btn w-100 p-4"
                style={{
                  background: item.color,
                  color: "#fff",
                  borderRadius: "15px",
                  fontWeight: "600",
                }}
              >
                <div style={{ fontSize: "28px" }}>
                  {item.icon}
                </div>

                <div className="mt-2">
                  {item.title}
                </div>

              </button>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}
import {
  FaUserPlus,
  FaCheckCircle,
  FaCalendarCheck,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function RecentActivity() {

  const activities = [
    {
      icon: <FaUserPlus />,
      title: "New Employee Joined",
      desc: "Kathir joined the DevOps Team.",
      color: "#2563EB",
      time: "10 min ago",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Leave Approved",
      desc: "Vadivukarasi leave request approved.",
      color: "#10B981",
      time: "45 min ago",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Payroll Processed",
      desc: "July payroll completed successfully.",
      color: "#F59E0B",
      time: "2 hrs ago",
    },
    {
      icon: <FaCheckCircle />,
      title: "Attendance Updated",
      desc: "Today's attendance synced.",
      color: "#EF4444",
      time: "Today",
    },
  ];

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Recent Activity
        </h5>

        {activities.map((item, index) => (

          <div
            key={index}
            className="d-flex align-items-start mb-4"
          >

            <div
              style={{
                width:50,
                height:50,
                borderRadius:"50%",
                background:item.color,
                color:"#fff",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"20px",
                marginRight:"15px"
              }}
            >
              {item.icon}
            </div>

            <div>
              <h6 className="mb-1 fw-bold">
                {item.title}
              </h6>

              <small className="text-muted">
                {item.desc}
              </small>

              <br />

              <small style={{color:"#2563EB"}}>
                {item.time}
              </small>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}
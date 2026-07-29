import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

export default function RecentEmployees() {
  const employees = [
    {
      id: 1,
      name: "Dinesh",
      email: "dinesh@stackly.com",
      department: "DevOps",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@stackly.com",
      department: "HR",
      status: "Active",
    },
    {
      id: 3,
      name: "Priya",
      email: "priya@stackly.com",
      department: "Finance",
      status: "On Leave",
    },
    {
      id: 4,
      name: "Arun",
      email: "arun@stackly.com",
      department: "QA",
      status: "Active",
    },
  ];

  return (
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0 fw-bold">Recent Employees</h4>

          <button className="btn btn-primary btn-sm">
            View All
          </button>
        </div>

        <Table hover responsive className="align-middle">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>
                  <Badge
                    bg={
                      emp.status === "Active"
                        ? "success"
                        : "warning"
                    }
                  >
                    {emp.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    </div>
  );
}
import { Card, Table, Button } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function Departments() {

  const departments = [
    {
      id: 1,
      name: "DevOps",
      manager: "Dinesh Kannan",
      employees: 18,
    },
    {
      id: 2,
      name: "Human Resources",
      manager: "Rahul Kumar",
      employees: 10,
    },
    {
      id: 3,
      name: "Finance",
      manager: "Priya",
      employees: 12,
    },
    {
      id: 4,
      name: "Testing",
      manager: "Arun",
      employees: 15,
    },
  ];

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold">Departments</h2>
          <p className="text-muted">
            Manage Stackly departments
          </p>
        </div>

        <Button variant="primary">
          <FaPlus className="me-2" />
          Add Department
        </Button>

      </div>

      <Card className="shadow-sm border-0">

        <Card.Body>

          <Table hover responsive>

            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Department</th>
                <th>Manager</th>
                <th>Employees</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {departments.map((dept) => (

                <tr key={dept.id}>

                  <td>{dept.id}</td>

                  <td>{dept.name}</td>

                  <td>{dept.manager}</td>

                  <td>{dept.employees}</td>

                  <td>

                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                    >
                      <FaEdit />
                    </Button>

                    <Button
                      variant="outline-danger"
                      size="sm"
                    >
                      <FaTrash />
                    </Button>

                  </td>

                </tr>

              ))}

            </tbody>

          </Table>

        </Card.Body>

      </Card>

    </div>
  );
}
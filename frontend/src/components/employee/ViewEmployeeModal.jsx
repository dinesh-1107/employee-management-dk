import { Modal, Button, Table } from "react-bootstrap";

export default function ViewEmployeeModal({
  show,
  handleClose,
  employee,
}) {
  if (!employee) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Employee Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Table bordered>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{employee.id}</td>
            </tr>

            <tr>
              <th>Name</th>
              <td>{employee.name}</td>
            </tr>

            <tr>
              <th>Email</th>
              <td>{employee.email}</td>
            </tr>

            <tr>
              <th>Phone</th>
              <td>{employee.phone || "-"}</td>
            </tr>

            <tr>
              <th>Department</th>
              <td>{employee.department}</td>
            </tr>

            <tr>
              <th>Role</th>
              <td>{employee.role}</td>
            </tr>

            <tr>
              <th>Salary</th>
              <td>{employee.salary || "-"}</td>
            </tr>

            <tr>
              <th>Joining Date</th>
              <td>
  {employee.joining_date
    ? new Date(employee.joining_date).toLocaleDateString("en-GB")
    : "-"}
</td>
            </tr>

            <tr>
              <th>Status</th>
              <td>{employee.status}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
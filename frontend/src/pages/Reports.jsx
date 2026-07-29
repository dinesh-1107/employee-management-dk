import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function Reports() {
  return (
    <>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div
          className="container-fluid p-4 bg-light"
          style={{ minHeight: "100vh" }}
        >
          <h2>Reports</h2>
          <hr />

          <div className="card shadow-sm p-4">
            <h5>Reports</h5>
            <p className="text-muted">
              Reports page is under development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
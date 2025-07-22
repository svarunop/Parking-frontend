import React from 'react';
import AdminNavbar from './AdminNavbar';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink

function Admin() {
//   const handleLogout = () => {
//     // Add logout logic here
//     sessionStorage.clear();
//     window.location.href = '/';
//   };

    return (
        <div>
          <AdminNavbar />
          <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="col-8 p-5 shadow bg-white rounded">
              <span className="fs-3 mb-3 fw-bolder" style={{ fontFamily: "unset" }}>
                <center>
                  <h3>
                    <i className="bi bi-person-square"></i> &nbsp;Admin Dashboard
                  </h3>
                </center>
              </span>
              <div className="row">
                {/* First Row */}
                <div className="col-md-4 p-3">
                  <div className="card text-bg-success mb-3">
                    <div style={{ backgroundColor: "gray" }}>
                      <NavLink to="/admin/addcustomer" style={{ textDecoration: 'none' }}>
                        <div className="card-body text-center">
                          <h5 className="card-title text-white">
                            <i className="bi bi-person-plus-fill"></i> &nbsp; Add Customer
                          </h5>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-3">
                  <div className="card text-bg-success mb-3">
                    <div style={{ backgroundColor: "gray" }}>
                      <NavLink to="/admin/viewcustomer" style={{ textDecoration: 'none' }}>
                        <div className="card-body text-center">
                          <h5 className="card-title text-white">
                            <i className="bi bi-person-plus-fill"></i> &nbsp; View Customer
                          </h5>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-3">
                  <div className="card text-bg-success mb-3">
                    <div style={{ backgroundColor: "gray" }}>
                      <NavLink to="/admin/viewbookings" style={{ textDecoration: 'none' }}>
                        <div className="card-body text-center">
                          <h5 className="card-title text-white">
                            <i className="bi bi-person-plus-fill"></i> &nbsp; View Bookings
                          </h5>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* Second Row */}
                <div className="col-md-4 p-3">
                  <div className="card text-bg-success mb-3">
                    <div style={{ backgroundColor: "gray" }}>
                      <NavLink to="/admin/viewslots" style={{ textDecoration: 'none' }}>
                        <div className="card-body text-center">
                          <h5 className="card-title text-white">
                            <i className="bi bi-person-plus-fill"></i> &nbsp; View Slots
                          </h5>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-3">
                  <div className="card text-bg-success mb-3">
                    <div style={{ backgroundColor: "gray" }}>
                      <NavLink to="/admin/viewpayments" style={{ textDecoration: 'none' }}>
                        <div className="card-body text-center">
                          <h5 className="card-title text-white">
                            <i className="bi bi-person-plus-fill"></i> &nbsp; View Payments
                          </h5>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-3">
                  <div className="card text-bg-success mb-3">
                    <div style={{ backgroundColor: "gray" }}>
                      <NavLink to="/admin/addslot" style={{ textDecoration: 'none' }}>
                        <div className="card-body text-center">
                          <h5 className="card-title text-white">
                            <i className="bi bi-person-plus-fill"></i> &nbsp; Add Slot
                          </h5>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Admin;

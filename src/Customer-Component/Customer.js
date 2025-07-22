import React from "react";
import { NavLink } from 'react-router-dom'; // Import NavLink
import CustomerNavbar from "./CustomerNavbar";

function Customer() {
  return (
    <div>
      <CustomerNavbar />
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-10 p-5 shadow bg-white rounded">
          <span className="fs-3 mb-4 fw-bolder" style={{ fontFamily: "unset" }}>
            <center>
              <h3>
                <i className="bi bi-person-square"></i> &nbsp;Customer Dashboard
              </h3>
            </center>
          </span>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 ml-4">
            <div className="col ml-4">
              <div
                className="card text-bg-success mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className style={{ backgroundColor: "gray" }}>
                  <NavLink
                    to="/customer/bookslot"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title text-white">
                        <i className="bi bi-person-plus-fill"></i> &nbsp;
                        Book Slot
                      </h5>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card text-bg-success mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div style={{ backgroundColor: "gray" }}>
                  <NavLink
                    to="/customer/viewallbookings"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title text-white">
                        <i className="bi bi-person-plus-fill"></i> &nbsp;
                        View All Bookings
                      </h5>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card text-bg-success mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div style={{ backgroundColor: "gray" }}>
                  <NavLink
                    to="/customer/updateprofile"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title text-white">
                        <i className="bi bi-person-plus-fill"></i> &nbsp;
                        Update Profile
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

export default Customer;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

function AddSlot() {
  const navigate = useNavigate();

  const [slotName, setSlotName] = useState("");
  const [slotPricePerHour, setSlotPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { 
      slotName, 
      slotPricePerHour, 
      available: true // Default value for slot availability
    };
    console.log("------------       "+sessionStorage.getItem("jwtToken"));
    const config = {
      headers: {
        
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };

    axios
      .post("http://localhost:8080/admin/addslot", data, config)
      .then((response) => {
        toast.success("Slot added successfully!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setSlotName("");
        setSlotPrice("");
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div style={{ backgroundColor: "#1e1c1c", color: "white", height: "100vh" }}>
      <AdminNavbar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container-fluid">
        <div
          className="row justify-content-around align-items-center"
          style={{ height: "98vh" }}
        >
          <div
            className="col-4 p-5 shadow"
            style={{
              backgroundColor: "#2b2828",
              color: "white",
              border: "1px solid white",
            }}
          >
            <h3 style={{ color: "white", textAlign: "center" }}>Add Slot</h3>
            <form onSubmit={handleSubmit} className="ui form">
              <div className="field">
                <label style={{ color: "white" }}>Slot Name</label>
                <div className="mb-3">
                  <input
                    type="text"
                    name="slotName"
                    id="slotName"
                    className="form-control"
                    placeholder="Enter Slot Name"
                    value={slotName}
                    onChange={(e) => setSlotName(e.target.value)}
                    required
                    style={{
                      border: "1px solid white",
                      backgroundColor: "#2b2828",
                      color: "white",
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label style={{ color: "white" }}>Slot Price</label>
                <div className="mb-3">
                  <input
                    type="number"
                    name="slotPricePerHour"
                    id="slotPricePerHour"
                    className="form-control"
                    placeholder="Enter Slot Price"
                    value={slotPricePerHour}
                    onChange={(e) => setSlotPrice(e.target.value)}
                    required
                    style={{
                      border: "1px solid white",
                      backgroundColor: "#2b2828",
                      color: "white",
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 py-3" style={{ textAlign: "center" }}>
                <button
                  className="btn btn-light form-control"
                  style={{ border: "1px solid white" }}
                  type="submit"
                >
                  Add Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSlot;

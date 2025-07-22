import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleApi = async () => {
    if (email === "" || password === "") {
      setError("Email and password must not be blank.");
      return;
    } else {
      setError(""); // Clear error
    }

    try {
      const result = await axios.post("http://localhost:8080/signin", {
        email: email,
        password: password,
      });
      const user1 = result.data;

      console.log(user1.authenticatedDetails.principal.id);
      sessionStorage.setItem("userName", user1.authenticatedDetails.principal.name);
      sessionStorage.setItem("userId", user1.authenticatedDetails.principal.id);
      sessionStorage.setItem("userRole", user1.authenticatedDetails.principal.role);
      sessionStorage.setItem("jwtToken", user1.jwt);

      console.log(sessionStorage.getItem("jwtToken"));
      if (user1.authenticatedDetails.principal.role === "ROLE_USER") navigate("/customer");
      else if (user1.authenticatedDetails.principal.role === "ROLE_ADMIN") navigate("/admin");
    } catch (error) {
      toast.error("Bad Credential");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={{ backgroundColor: "#1e1c1c", color: "white" }}>
      <Navbar />
      <ToastContainer position="top-center" autoClose={1000} />
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
            <h3 className="head" style={{ color: "white" }}>
              Login
            </h3>
            <div className="ui form">
              <div className="field">
                <label style={{ color: "white" }}>Email Address</label>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleEmail}
                    style={{
                      border: "1px solid white",
                      backgroundColor: "#2b2828",
                      color: "white",
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label style={{ color: "white" }}>Password</label>
                <div className="mb-3">
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePassword}
                    style={{
                      border: "1px solid white",
                      backgroundColor: "#2b2828",
                      color: "white",
                    }}
                  />
                </div>
              </div>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className="mb-3 py-3" style={{ textAlign: "center" }}>
                <button
                  className="btn btn-light form-control"
                  style={{ border: "1px solid white" }}
                  onClick={handleApi}
                  disabled={!email || !password}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;

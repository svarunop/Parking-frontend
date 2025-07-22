import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative" }}>
        <img
          src="./assests/aboutus.jpg"
          alt="About us"
          className="img-fluid"
          style={{ height: "100vh", objectFit: "cover", width: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            top: "28%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center"
          }}
        >
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>About Us</h1>
          <p style={{ fontSize: "1.8rem", marginTop: "25px" }}>
            At Vehicle-Park, we simplify parking with convenient, secure, and affordable solutions. Whether you need short-term or long-term parking, our strategically located facilities and easy booking system ensure a hassle-free experience. We are dedicated to making parking stress-free and accessible for everyone. Park smarter with us today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

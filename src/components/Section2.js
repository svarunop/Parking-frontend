import React from 'react';
import "./Styles.css";

function Section2() {
  return (
    <div className="container my-5" >
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6 col-12">
          <h2 className="mb-4" style={{ color:'white' }}>Why Choose <span className="text-orange">Us</span></h2>
          <p className="mb-4" style={{ color:'white' }}>
          Our parking application offers a convenient and easy-to-use platform, 
          allowing you to quickly find available parking spots nearby.
           With 24/7 security and continuous monitoring, 
           you can trust that your vehicle is always safe.
            Plus, we provide affordable pricing with no hidden fees,
             ensuring the best value for both short-term and long-term parking needs.
          </p>
          <button className="btn btn-dark mb-4">Read More</button>
        </div>
        <div className="col-lg-5 col-md-6 col-12">
          <div className="row g-2">
            <div className="col-6">
              <img
                src="./assests/park1.jpg"
                alt="Top Left"
                className="img-fluid rounded shadow-sm equal-size"
              />
            </div>
            <div className="col-6">
              <img
                src="./assests/park2.jpg"
                alt="Top Right"
                className="img-fluid rounded shadow-sm equal-size"
              />
            </div>
            <div className="col-6">
              <img
                src="./assests/park3.jpg"
                alt="Bottom Left"
                className="img-fluid rounded shadow-sm equal-size"
              />
            </div>
            <div className="col-6">
              <img
                src="./assests/park4.jpg"
                alt="Bottom Right"
                className="img-fluid rounded shadow-sm equal-size"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;

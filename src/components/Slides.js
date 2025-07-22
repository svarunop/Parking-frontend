import React from "react";
import "./Slides.css";

function Slides() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./assests/vehicleparking3.jpeg"
            className="d-block w-100 custom-carousel-img"
            alt="Slide 1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Convenient Parking Solutions</h5>
            <p>
              Find safe and secure parking spots near you with just a few
              clicks.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./assests/vehicleparking2.jpg"
            className="d-block w-100 custom-carousel-img"
            alt="Slide 2"
          />
          <div class="carousel-caption d-none d-md-block">
  <h5>24/7 Security for Your Vehicle</h5>
  <p>Enjoy peace of mind with round-the-clock surveillance and support.</p>
</div>
        </div>
        <div className="carousel-item">
          <img
            src="./assests/vehicleparking6.jpg"
            className="d-block w-100 custom-carousel-img"
            alt="Slide 3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Affordable Parking Rates</h5>
            <p>Park your vehicle at the best rates, with no hidden charges.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slides;

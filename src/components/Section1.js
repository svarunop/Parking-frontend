import React from 'react'
import "./Styles.css"
function Section1() {
  return (
    <section class="orange-section py-5 text-white text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="icon mb-3">
            <i class="fas fa-money-bill-alt fa-2x"></i>
          </div>
          <h5>Save Money</h5>
          <p>Park your vehicle at the best rates, with no hidden charges.</p>
        </div>
        <div class="col-md-4">
          <div class="icon mb-3">
            <i class="fas fa-clock fa-2x"></i>
          </div>
          <h5>Save Time</h5>
          <p>Find safe and secure parking spots near you with just a few clicks.</p>
        </div>
        <div class="col-md-4">
          <div class="icon mb-3">
            <i class="fas fa-smile fa-2x"></i>
          </div>
          <h5>Save Stress</h5>
          <p>Enjoy peace of mind with round-the-clock surveillance and support.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section1

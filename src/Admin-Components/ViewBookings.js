import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {ToastContainer } from 'react-toastify';
import AdminNavbar from './AdminNavbar';

function ViewBookings() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("userName")) {
      navigate("/");
    } else if (sessionStorage.getItem("userRole") === "USER") {
      navigate("/customer");
    } else if (sessionStorage.getItem("userRole") === "ADMIN") {
      navigate("/admin");
    }
  }, [navigate]);

    
    const [data, setData] = useState({ bookings: [], isFetching: false });

    useEffect(() => {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      };
      const fetchbookings = async () => {
        try {
          setData((data) => ({ bookings: data.bookings, isFetching: true }));
          const response = await axios.get('http://localhost:8080/booking/getAllBookings', config)
          setData({ bookings: response.data, isFetching: false });
          console.log(response);
          return response;
        } catch (e) {
          console.log(e);
          setData((data) => ({ bookings: data.bookings, isFetching: false }));
        }
      };
      fetchbookings();
    }, []);

return (
  <div>
      <AdminNavbar />
      <ToastContainer/>
     <form>
      <div className='cotainer-fluid' style={{ overflow: "auto" }}>
        <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: -50 }}>
          <div className="col-10 p-5 shadow bg-white rounded">
            <center><span style={{ fontFamily: "unset" }}><h2>View Booking Details </h2></span></center>

            <table className="table table-striped table-secondary table-hover">
              <thead className='table-dark'>
                <tr>
                    <th>id</th>
                  <th>Slot id</th>
                  <th>Customer Name</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Total Price</th>
                </tr>


              </thead>
              <tbody>
  {
    data.bookings.map(({ id, slotId, userName, startTime, endTime, totalPrice }) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{slotId}</td>
        <td>{userName}</td>
        <td>{startTime}</td>
        <td>{endTime}</td>
        <td>{totalPrice}</td>
      </tr>
    ))
  }
</tbody>

            </table>
          </div>
        </div>
      </div>
    </form>
  </div>
)
}

export default ViewBookings

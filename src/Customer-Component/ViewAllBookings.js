import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import CustomerNavbar from './CustomerNavbar';

function ViewAllBookings() {
    // useEffect(() => {
    //     if (sessionStorage.getItem("userName") === null) {
    //       navigate("/");
    //     }
    //     if (sessionStorage.getItem("userRole") === "ROLE_CUSTOMER") {
    //       navigate("/customer")
    //     }
    //   });
    
    const [data, setData] = useState({ bookings: [], isFetching: false });
    const [searchText, setSearchText] = useState('')

    const userId = sessionStorage.getItem("userId"); 
  
    const handleSearchText = (e) => {
      setSearchText(e.target.value)
      console.log(searchText);
    }
    const navigate = useNavigate();
    useEffect(() => {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      };
      const fetchbookings = async () => {
        try {
          setData((data) => ({ bookings: data.bookings, isFetching: true }));
          const response = await axios.get(`http://localhost:8080/booking/user/${userId}`, config)
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
      <CustomerNavbar/>
     <form>
      <div className='cotainer-fluid' style={{ overflow: "auto" }}>
        <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: -50 }}>
          <div className="col-10 p-5 shadow bg-white rounded">
            <center><span style={{ fontFamily: "unset" }}><h2>View Booking Details </h2></span></center>
            <div className='ui search'>
              <br></br>
            </div>
            <table className="table table-striped table-secondary table-hover">
              <thead className='table-dark'>
                <tr>
                  <th>Slot Id</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Total Price</th>
               
                </tr>
              </thead>

              <tbody>
                 {
                  data.bookings.filter((val) => {
                    if (searchText == "") {
                      return val
                    } else if (val.name.toLowerCase().includes(searchText.toLowerCase()) || val.email.toLowerCase().includes(searchText.toLowerCase())) {
                      return val
                    } 
                  })
                    .map(({ slotId,startTime,endTime, totalPrice }) =>
                      <tr>
                        <td>
                          {slotId}
                        </td>
                        <td>
                          {startTime}
                        </td>
                        <td>
                          {endTime}
                        </td>
                        <td>
                          {totalPrice}
                        </td>
                      </tr>
                    )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  </div>
)
}

export default ViewAllBookings

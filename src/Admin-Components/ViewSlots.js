import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import AdminNavbar from './AdminNavbar';

function ViewSlots() {
  const navigate = useNavigate();

  // State for managing the slots data
  const [data, setData] = useState({ slots: [], isFetching: false });

  // Fetch slots data from API
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    const fetchSlots = async () => {
      try {
        setData((data) => ({ slots: data.slots, isFetching: true }));
        const response = await axios.get('http://localhost:8080/admin/getAllSlots', config);
        setData({ slots: response.data, isFetching: false });
        console.log(response);
      } catch (e) {
        console.log(e);
        setData((data) => ({ slots: data.slots, isFetching: false }));
      }
    };
    fetchSlots();
  }, []);

  // Function to remove a slot
  const removeSlots = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    axios.delete(`http://localhost:8080/admin/deleteSlot/${id}`, config)
      .then((response) => {
        toast.success('Slot record deleted successfully', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }).catch(error => {
        toast.error('Something went wrong!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    navigate('/admin/viewslots');
  };

  return (
    <div>
      <AdminNavbar />
      <ToastContainer />
      <form>
        <div className='container-fluid' style={{ overflow: "auto" }}>
          <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: -50 }}>
            <div className="col-10 p-5 shadow bg-white rounded">
              <center><span style={{ fontFamily: "unset" }}><h2>View Slots Details </h2></span></center>

              <table className="table table-striped table-secondary table-hover">
                <thead className='table-dark'>
                  <tr>
                    <th>slotId</th>
                    <th>slotName</th>
                    <th>slotPricePerHour</th>
                    <th>available</th> 
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.slots.map(({ slotId, slotName, slotPricePerHour, available }) => (
                      <tr key={slotId}>
                        <td>{slotId}</td>
                        <td>{slotName}</td>
                        <td>{slotPricePerHour}</td>
                        <td>
                          <span
                            style={{
                              color: available ? "green" : "red",
                              fontWeight: "bold",
                            }}
                          >
                            {available ? "Available" : "Not Available"}
                          </span>
                        </td>
                        <td>
                          <button className="button border-white" onClick={() => removeSlots(slotId)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg>
                          </button>
                        </td>
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
  );
}

export default ViewSlots;

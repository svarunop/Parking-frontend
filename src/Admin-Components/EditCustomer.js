import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import AdminNavbar from './AdminNavbar';

function EditCustomer() {
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

  const param = useParams();
  const customerid = param.id;
  const updateurl = `http://localhost:8080/admin/editCustomer/${param.id}`;
  const editUrl = `http://localhost:8080/admin/viewCustomer/${param.id}`;

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [vehicleNumber, setvehicleNumber] = useState('')
  const [password, setpassword] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  const handlevehicleNumber = (e) => {
    setvehicleNumber(e.target.value)
  }
  const handlePassword = (e) => {
    setpassword(e.target.value)
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
  
    axios
      .get(editUrl, config)
      .then((response) => {
        const customerData = response.data; // Use the correct response structure
        setName(customerData.name || ""); // Set the state with fallback values
        setEmail(customerData.email || "");
        setPhoneNumber(customerData.phoneNumber || "");
        setvehicleNumber(customerData.vehicleNumber || "");
        setpassword(customerData.password || "");
      })
      .catch((error) => {
        console.error("Error occurred getting customer detail:", error);
        alert("Error occurred getting customer detail: " + error.message);
      });
  }, [editUrl]);
  
  

  function submit(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    axios.put(updateurl, {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      vehicleNumber: vehicleNumber,
      password: password
    }, config).then((response) => {

      toast.success('Customer Record Updated With Id ' + customerid + ' Succesfully ', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }).catch(error => {
      toast.error(' Something Went Wrong !!!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    navigate('/admin/viewcustomer')
  }
  return (

    <div>
      <AdminNavbar/>
      <ToastContainer/>
      <div className='cotainer-fluid'>
        <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: 0 }}>
          <div className="col-4 p-5 shadow bg-white rounded">
            <span className='fs-3 mb-3'><center><h2>Edit Customer</h2></center></span>

            <form onSubmit={(e) => submit(e)}>
              <div className='mb-3'>
                <label for="name">Customer Name:</label><br></br>
                <input type='text'  className='col-12'placeholder='Enter Name'  onChange={handleName} value={name} name="name"></input>
              </div>
              <div className='mb-3'>
                <label for="email" >Email:</label>
                <input type='email'  className='col-12'  placeholder='Enter Email' onChange={handleEmail} value={email} name="email"></input>
              </div>

              <div className='mb-3'>
                <label for="phoneNumber">Phone Number: </label>
                <input type='text' className='col-12' onChange={handlePhoneNumber} value={phoneNumber} name="phoneNumber" maxLength={10} pattern="\d{10}"></input>
                &nbsp;<br></br>
                <label for="vehicleNumber">Vehicle Number:</label>
                <input type='text' className='col-12' onChange={handlevehicleNumber} value={vehicleNumber} name="vehicleNumber"></input ><br></br>

              </div>
              <div className='mb-3'>
                <label for="password">Password:</label><br></br>
                <input type='password' className='col-12' onChange={handlePassword} value={password} name="password"></input ><br></br>
              </div>
              <br></br>
              <div className='mb-3'>
                <button className='btn btn-primary form-control'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}


export default EditCustomer;

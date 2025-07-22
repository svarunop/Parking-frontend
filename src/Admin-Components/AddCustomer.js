import React from 'react'
import { useEffect } from 'react';
import AdminNavbar from './AdminNavbar'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios'; // Import axios
import { toast } from 'react-toastify'; // Import toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCustomer() {
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

      const formik = useFormik({
        initialValues: {
          name: '',
          phoneNumber: '',
          email: '',
          vehicleNumber: '',
          password: '',
        },

         validationSchema: Yup.object({
              name: Yup.string().required('Required'),
              phoneNumber: Yup.string().matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits').required('Required'),
              email: Yup.string().email('Invalid email').required('Required'),
              vehicleNumber: Yup.string().required('Required'),
              password: Yup.string().required('Required'),
            }),
        onSubmit: (values, { resetForm }) => {
            const config = {
                headers: {
                  Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                },
              };
            axios.post("http://localhost:8080/admin/addCustomer", values, config)
              .then(response => {
                toast.success('Customer Added Successfully!!!', {
                  position: "top-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                resetForm(); // Reset the form values
              })
              .catch(error => {
                toast.error('Something Went Wrong!!!', {
                  position: "top-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
          },   
      });
    
    
  return (
    <div style={{ backgroundColor: "#1e1c1c", color: "white", minHeight: "100vh" }}>
    <AdminNavbar />
    <ToastContainer />
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="shadow-lg p-4"
        style={{
          width: "30rem",
          backgroundColor: "#2b2828",
          border: "1px solid white",
          color: "white",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "white" }}>Add Customer</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>Name:</label>
            <input
              type="text"
              {...formik.getFieldProps("name")}
              className="form-control"
              style={{
                border: "1px solid white",
                backgroundColor: "#2b2828",
                color: "white",
              }}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-danger">{formik.errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>Mobile:</label>
            <input
              type="text"
              {...formik.getFieldProps("phoneNumber")}
              className="form-control"
              style={{
                border: "1px solid white",
                backgroundColor: "#2b2828",
                color: "white",
              }}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-danger">{formik.errors.phoneNumber}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>Email:</label>
            <input
              type="email"
              {...formik.getFieldProps("email")}
              className="form-control"
              style={{
                border: "1px solid white",
                backgroundColor: "#2b2828",
                color: "white",
              }}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>Vehicle Number:</label>
            <input
              type="text"
              {...formik.getFieldProps("vehicleNumber")}
              className="form-control"
              style={{
                border: "1px solid white",
                backgroundColor: "#2b2828",
                color: "white",
              }}
            />
            {formik.touched.vehicleNumber && formik.errors.vehicleNumber && (
              <div className="text-danger">{formik.errors.vehicleNumber}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>Password:</label>
            <input
              type="password"
              {...formik.getFieldProps("password")}
              className="form-control"
              style={{
                border: "1px solid white",
                backgroundColor: "#2b2828",
                color: "white",
              }}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="mb-3 py-3" style={{ textAlign: "center" }}>
              <button className="btn btn-light form-control" style={{ border: "1px solid white" }} type='submit'>Sign up</button>
            </div>
        </form>
      </div>
    </div>
  </div>  )
}

export default AddCustomer

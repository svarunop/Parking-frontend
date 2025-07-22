import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminNavbar from './AdminNavbar';

function ViewPayments() {
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

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [payments, setPayments] = useState([]);


  const handleStartDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split('T')[0]; // Get today's date in yyyy-mm-dd format

    if (selectedDate > today) {
      toast.error('Start date cannot be in the future!');
    } else {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split('T')[0]; // Get today's date in yyyy-mm-dd format

    if (selectedDate > today) {
      toast.error('End date cannot be in the future!');
    } else {
      setEndDate(selectedDate);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      toast.error('Both dates are required!');
      return;
    }

    if (startDate > endDate) {
      toast.error('Start date cannot be later than end date!');
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`,
      },
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/payments/admin/date/${startDate}/${endDate}`,
        { startDate, endDate },
        config
      );
      setPayments(response.data);
      toast.success('Payments fetched successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Error fetching payments. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#1e1c1c', minHeight: '100vh', color: 'white', fontWeight: 'bold' }}>
      <AdminNavbar />
      <div className="container-fluid">
        <h2 className="text-center my-4">View Payments</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                className="form-control"
                value={startDate}
                onChange={handleStartDateChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                className="form-control"
                value={endDate}
                onChange={handleEndDateChange}
                required
              />
            </div>
            <div className="col-md-2 align-self-end">
              <button type="submit" className="btn btn-primary w-100">
                Fetch Payments
              </button>
            </div>
          </div>
        </form>

        {/* Payment Results Table */}
        {payments.length > 0 && (
          <table className="table table-striped table-secondary table-hover">
            <thead className="table-dark">
              <tr>
                <th>Payment ID</th>
                <th>User Id</th>
                <th>Amount</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(({id,userId, amount,paymentDate}) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{userId}</td>
                  <td>{amount}</td>
                  <td>{paymentDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {payments.length === 0 && <p className="text-center">No payments to display.</p>}
      </div>
    </div>
  );
}

export default ViewPayments;


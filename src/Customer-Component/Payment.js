import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract total price from state passed via navigation
    const totalPrice = location.state?.bookedSlotAmount || 0;

    // State for card details
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handlePayment = async () => {
        if (!cardNumber || !cvv || !expiryDate) {
            toast.error('Please fill all payment details.');
            return;
        }

        const userId = sessionStorage.getItem("userId"); 
        const paymentDate = new Date().toISOString(); // Current system date in ISO format

        try {
            const payload = {
                userId:userId,
                amount: totalPrice,
                paymentDate,
                cardNumber, // You may want to include the card details if needed
                cvv,        // You can also include cvv and expiry date if required
                expiryDate
            };

            // Add your JWT token here, if it's required for authentication
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                },
            };

            // Call backend API for payment
            await axios.post(`http://localhost:8080/payments/user/makepayment/${userId}`, payload, config);

            toast.success('Payment successful!');
            navigate('/customer'); // Redirect to the customer page
        } catch (error) {
            console.error('Payment error:', error);
            toast.error('Payment failed. Please try again.');
        }
    };

    return (
        <div style={{ backgroundColor: '#1e1c1c', color: 'white', minHeight: '100vh', padding: '20px' }}>
            <div className="container my-5">
                <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>
                    Payment Page
                </h2>

                <div className="card mx-auto" style={{ maxWidth: '500px', padding: '20px', backgroundColor: '#333', color: 'white' }}>
                    <h4>Total Price: ₹{totalPrice}</h4>

                    <div className="mb-3">
                        <label htmlFor="cardNumber" className="form-label" style={{ fontWeight: 'bold' }}>
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="form-control"
                            placeholder="Enter your card number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cvv" className="form-label" style={{ fontWeight: 'bold' }}>
                            CVV
                        </label>
                        <input
                            type="password"
                            id="cvv"
                            className="form-control"
                            placeholder="Enter CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="expiryDate" className="form-label" style={{ fontWeight: 'bold' }}>
                            Expiry Date
                        </label>
                        <input
                            type="month"
                            id="expiryDate"
                            className="form-control"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                    </div>

                    <button
                        className="btn btn-primary w-100"
                        onClick={handlePayment}
                        style={{ fontWeight: 'bold' }}
                    >
                        Proceed Payment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Payment;

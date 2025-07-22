import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import CustomerNavbar from './CustomerNavbar';
import { useNavigate } from 'react-router-dom';

function BookSlot() {

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

    const [data, setData] = useState({ slots: [], isFetching: false });
    const [selectedSlotId, setSelectedSlotId] = useState(null);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [calculatedPrice, setCalculatedPrice] = useState(null);

    const config = {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`,
        },
    };

    // Fetch slots from the backend when the component mounts
    useEffect(() => {
        const fetchSlots = async () => {
            try {
                setData((prev) => ({ ...prev, isFetching: true }));
                const response = await axios.get(
                    'http://localhost:8080/booking/user/getAllSlots',
                    config
                );
                setData({ slots: response.data, isFetching: false });
            } catch (error) {
                console.error('Error fetching slots:', error);
                toast.error('Failed to fetch slots. Please try again.');
                setData((prev) => ({ ...prev, isFetching: false }));
            }
        };

        fetchSlots();

        // Set the start time to the current device time
        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');
        setStartTime(`${hours}:${minutes}`);
    }, []);

    const handleSlotClick = (slotId, slotPrice) => {
        setSelectedSlotId(slotId);

        // Calculate price if both start and end times are set
        if (startTime && endTime) {
            const startHour = parseInt(startTime.split(':')[0]);
            const endHour = parseInt(endTime.split(':')[0]);
            if (endHour <= startHour) {
                toast.error('End time must be greater than start time.');
                return;
            }
            const duration = endHour - startHour;
            setCalculatedPrice(duration * slotPrice); // Calculate price based on duration and slot price
        }
    };

    const handleConfirmBooking = async () => {
        if (!startTime || !endTime || !selectedSlotId || !calculatedPrice) {
            toast.error('Please fill all fields before confirming the booking.');
            return;
        }
        
        const userId = sessionStorage.getItem("userId"); 

        try {
            const payload = {
                slotId: selectedSlotId,
                userId:userId,
                startTime,
                endTime,
                totalPrice: calculatedPrice,
            };
            const config = {
                headers: {
                  Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                },
              };
            // Send booking data to the backend
            await axios.post(
                'http://localhost:8080/booking/user/book',
                payload,
                config
            );

            toast.success('Booking confirmed! Redirecting to payment page...');

            // Redirect to payment page with the necessary data
            setTimeout(() => {
                navigate('/customer/payment', { state: { bookedSlotAmount: calculatedPrice } });
            }, 2000);
        } catch (error) {
            console.error('Error confirming booking:', error);
            toast.error('Failed to confirm booking. Please try again.');
        }
    };

    return (
        <div style={{ backgroundColor: '#1e1c1c', color: 'white', minHeight: '100vh' }}>
            <CustomerNavbar />
            <div className="container my-5">
                <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>
                    Book a Slot
                </h2>

                {/* Start Time and End Time Inputs */}
                <div className="row mb-4">
                    <div className="col-6">
                        <label htmlFor="startTime" className="form-label" style={{ fontWeight: 'bold' }}>
                            Start Time
                        </label>
                        <input
                            type="time"
                            id="startTime"
                            className="form-control"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            min={startTime} // Ensures user cannot select a time earlier than the current time
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="endTime" className="form-label" style={{ fontWeight: 'bold' }}>
                            End Time
                        </label>
                        <input
                            type="time"
                            id="endTime"
                            className="form-control"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>
                </div>

                {/* Slots */}
                <div className="row">
                    {data.isFetching ? (
                        <p className="text-center">Loading slots...</p>
                    ) : (
                        data.slots.map((slot) => (
                            <div key={slot.slotId} className="col-2 my-2">
                                <button
                                    className="btn w-100"
                                    style={{
                                        height: '100px',
                                        backgroundColor: slot.available ? 'green' : 'red',
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                    onClick={() => handleSlotClick(slot.slotId, slot.slotPricePerHour)}
                                    disabled={!slot.available}
                                >
                                    {slot.slotName} <br />
                                    ₹{slot.slotPricePerHour} /hr
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Calculated Price */}
                {calculatedPrice !== null && (
                    <div className="mt-4">
                        <h4 className="text-center" style={{ fontWeight: 'bold' }}>
                            Total Price: ₹{calculatedPrice}
                        </h4>
                    </div>
                )}

                {/* Confirm Booking Button */}
                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary"
                        onClick={handleConfirmBooking}
                        style={{ fontWeight: 'bold' }}
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookSlot;

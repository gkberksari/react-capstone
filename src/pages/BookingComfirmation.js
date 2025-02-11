// src/pages/BookingConfirmation.js
import { useLocation, Link } from 'react-router-dom';
import React from 'react';

function BookingConfirmation() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="container">
        <h1>Error</h1>
        <p>No booking information found.</p>
        <Link to="/booking" className="button">Return to Booking</Link>
      </div>
    );
  }

  return (
    <div className="booking-confirmation">
      <div className="container">
        <h1>Reservation Confirmed!</h1>
        <div className="confirmation-details">
          <h2>Booking Details</h2>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Time:</strong> {booking.time}</p>
          <p><strong>Number of Guests:</strong> {booking.guests}</p>
          <p><strong>Occasion:</strong> {booking.occasion}</p>
        </div>
        <Link to="/" className="button">Return to Home</Link>
      </div>
    </div>
  );
}

export default BookingConfirmation;
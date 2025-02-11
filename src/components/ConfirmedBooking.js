// src/components/ConfirmedBooking.js
import { useLocation, Link } from 'react-router-dom';
import '../styles/ConfirmedBooking.css';
import React from 'react';
function ConfirmedBooking() {
  const location = useLocation();
  const booking = location.state?.booking;

  return (
    <div className="confirmed-booking">
      <div className="container">
        <div className="confirmation-card">
          <div className="check-mark">✓</div>
          <h1>Booking Confirmed!</h1>
          {booking && (
            <div className="booking-details">
              <h2>Your Reservation Details</h2>
              <div className="detail-row">
                <span>Date:</span>
                <span>{new Date(booking.date).toLocaleDateString()}</span>
              </div>
              <div className="detail-row">
                <span>Time:</span>
                <span>{booking.time}</span>
              </div>
              <div className="detail-row">
                <span>Guests:</span>
                <span>{booking.guests}</span>
              </div>
              <div className="detail-row">
                <span>Occasion:</span>
                <span>{booking.occasion}</span>
              </div>
            </div>
          )}
          <p className="thank-you">Thank you for choosing Little Lemon!</p>
          <div className="button-group">
            <Link to="/" className="button">Return Home</Link>
            <Link to="/menu" className="button secondary">View Menu</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
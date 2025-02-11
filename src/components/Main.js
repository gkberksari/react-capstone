// src/components/Main.js
import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../components/ConfirmedBooking';
import { initializeTimes, updateTimes } from '../reducers/bookingReducer';
import { submitAPI } from '../utils/api';
import React from 'react';
function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/booking-confirmed', { 
          state: { booking: formData }
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error submitting booking:', error);
      return false;
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          } 
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
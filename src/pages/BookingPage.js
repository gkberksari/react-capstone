// src/pages/BookingPage.js
import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className="booking-page">
      <div className="container">
        <h1>Reserve a Table</h1>
        <p>Please fill in the form below to make your reservation.</p>
        <BookingForm 
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default BookingPage;
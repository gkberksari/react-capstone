// src/components/BookingForm.js
import { useState, useEffect } from 'react';
import '../styles/BookingForm.css';
import React from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  // Form validasyon kuralları
  const validateField = (name, value) => {
    switch (name) {
      case 'date':
        if (!value) return 'Date is required';
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(value);
        if (selectedDate < today) return 'Date cannot be in the past';
        return '';

      case 'time':
        if (!value) return 'Time is required';
        if (!availableTimes.includes(value)) return 'Invalid time slot';
        return '';

      case 'guests':
        if (!value) return 'Number of guests is required';
        if (value < 1) return 'Minimum 1 guest required';
        if (value > 10) return 'Maximum 10 guests allowed';
        return '';

      case 'occasion':
        if (!value) return 'Occasion is required';
        if (!['Birthday', 'Anniversary'].includes(value)) return 'Invalid occasion';
        return '';

      default:
        return '';
    }
  };

  // Tüm formu validate et
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  // Field değişikliklerini handle et
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Field'ı touched olarak işaretle
    setTouchedFields(prev => ({ ...prev, [name]: true }));

    // Değişen field'ı validate et
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  // Field'dan focus çıkınca validate et
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const success = await submitForm(formData);
        if (!success) {
          setErrors({ submit: 'Failed to submit booking. Please try again.' });
        }
      } catch (err) {
        setErrors({ submit: 'An error occurred. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
      // Tüm field'ları touched olarak işaretle
      const allTouched = Object.keys(formData).reduce((acc, key) => ({
        ...acc,
        [key]: true
      }), {});
      setTouchedFields(allTouched);
    }
  };

  // Form geçerli mi kontrol et
  const isFormValid = Object.keys(errors).length === 0 && 
                     Object.keys(formData).every(key => formData[key]);

  return (
    <form onSubmit={handleSubmit} className="booking-form" noValidate>
      {errors.submit && (
        <div className="error-message">{errors.submit}</div>
      )}

      <div className="form-group">
        <label htmlFor="date">Choose date *</label>
        <input 
          type="date" 
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          onBlur={handleBlur}
          min={new Date().toISOString().split('T')[0]}
          required
          className={touchedFields.date && errors.date ? 'error' : ''}
        />
        {touchedFields.date && errors.date && (
          <span className="error-text">{errors.date}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="time">Choose time *</label>
        <select 
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={touchedFields.time && errors.time ? 'error' : ''}
        >
          <option value="">Select a time</option>
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {touchedFields.time && errors.time && (
          <span className="error-text">{errors.time}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests *</label>
        <input 
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={touchedFields.guests && errors.guests ? 'error' : ''}
        />
        {touchedFields.guests && errors.guests && (
          <span className="error-text">{errors.guests}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion *</label>
        <select 
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={touchedFields.occasion && errors.occasion ? 'error' : ''}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {touchedFields.occasion && errors.occasion && (
          <span className="error-text">{errors.occasion}</span>
        )}
      </div>

      <button 
        type="submit" 
        className="button"
        disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Make Your reservation'}
      </button>
    </form>
  );
}

export default BookingForm;
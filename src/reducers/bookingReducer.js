// src/reducers/bookingReducer.js
import { fetchAPI } from '../utils/api';
import React from 'react';

export const initializeTimes = () => {
  // Bugünün tarihini al ve API'den müsait saatleri getir
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Seçilen tarihe göre API'den müsait saatleri getir
      const date = new Date(action.payload);
      return fetchAPI(date);
    default:
      return state;
  }
};
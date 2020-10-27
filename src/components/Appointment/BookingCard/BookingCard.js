import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ bookData, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div class="col-md-4">
      <div class="card mt-5">
        <div class="card-body text-center">
          <h5 style={{ color: '#1CC7C1', fontWeight: 'bold' }} class="card-title">{bookData.subject}</h5>
          <h6 style={{ color: '#3A4256', fontWeight: 'bold' }} class="card-text">{bookData.visitingHours}</h6>
          <p><small className="text-secondary">{bookData.totalSpace} SPACE AVAILABLE</small></p>
          <button onClick={openModal} class="btn btn-primary text-uppercase">Book Appointment</button>
          <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={bookData.subject} date={date}></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
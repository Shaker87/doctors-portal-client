import React from 'react';
import './Appointment.css'
import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import { useState } from 'react';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const[selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        // console.log(date)
        setSelectedDate(date);
    }
    return (
        <div className="appointment-background">
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
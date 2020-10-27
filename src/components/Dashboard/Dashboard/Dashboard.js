import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = { backgroundColor: '#F4FDFB', height: '100%'};


const Dashboard = () => {

    const[selectedDate, setSelectedDate] = useState(new Date());
    const[appointments, setAppointments] = useState([])
    console.log(appointments)
    const handleDateChange = date => {
        // console.log(date)
        setSelectedDate(date);
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }
    // useEffect( () => {
    //     fetch('http://localhost:5000/appointmentByDate', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json'},
    //         body: JSON.stringify({date: selectedDate})
    //     })
    //     .then(res=>res.json())
    //     .then(data => setAppointments(data))
    // }, [selectedDate]);

    return (
        <section>
            <div style={containerStyle}>
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-5">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-5">
                      <AppointmentByDate appointments={appointments}></AppointmentByDate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;



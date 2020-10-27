import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const availableData = [
    {
        id: 1,
        subject: 'Teeth Orthodonotics',
        visitingHours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Density',
        visitingHours: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHours: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHours: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Teeth Cleaning',
        visitingHours: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        id: 6,
        subject: 'Teeth Cleaning',
        visitingHours: '5:00 PM - 6:00 PM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {
    console.log(date);
    return (
        <section className="container text-center">
            <h2 style={{color: '#1CC7C1', fontWeight: 'bold'}}>Available appointment on {date.toDateString()}</h2>
            <div className="row">
                {
                    availableData.map(bookData=> <BookingCard bookData={bookData} date={date} key={bookData.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;
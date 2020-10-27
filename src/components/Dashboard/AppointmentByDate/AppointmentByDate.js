import React from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
            <h1>This appointment by date: {appointments.length}</h1>
            {
                appointments.map(appointments => <AppointmentDataTable appointments={appointments}></AppointmentDataTable>)
            }
        </div>
    );
};

export default AppointmentByDate;
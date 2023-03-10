import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
           <AppointmentBanner
            selected={selected}
            setSelected={setSelected}
           />
           <AvailableAppointment
           selected={selected}
           setSelected={setSelected}
           />
        </div>
    );
};

export default Appointment;
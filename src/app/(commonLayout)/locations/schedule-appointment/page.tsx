import AppointmentHome from '@/components/Locations/Appointment/MemberOrNot/AppointmentHome'
import Service from '@/components/Locations/Appointment/Service/Service'
import Location from "@/components/Locations/Appointment/Location/Location";
import React from 'react'

const ScheduleAppointment = () => {
  return (
    <div>
      <AppointmentHome />
            <Service />
            <Location />
    </div>
  )
}

export default ScheduleAppointment

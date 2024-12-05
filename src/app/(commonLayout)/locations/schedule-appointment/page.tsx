import AppointmentHome from "@/components/Locations/Appointment/MemberOrNot/AppointmentHome";
import Service from "@/components/Locations/Appointment/Service/Service";
import Location from "@/components/Locations/Appointment/Location/Location";
import React from "react";
import FinalBooking from "@/components/Locations/Appointment/FinalBooking/FinalBooking";

const ScheduleAppointment = () => {
  return (
    <div>
      <AppointmentHome />
      <Service />
      <Location />
      <FinalBooking />
    </div>
  );
};

export default ScheduleAppointment;

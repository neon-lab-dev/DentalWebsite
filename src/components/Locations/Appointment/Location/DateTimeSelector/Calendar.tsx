import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Calendar = () => {
  return (
    <div>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        // onChange={handleDateChange}
      >
        <StaticDatePicker orientation="landscape" />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;

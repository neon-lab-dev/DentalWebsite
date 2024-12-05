import React from 'react'
import DateTimePicker from "react-datetime";

const Calendar = () => {
  return (
    <div>
    <DateTimePicker
            timeFormat={false}
            input={false}
            className="custom-datetime-picker bg-[#F5F5DC]  p-[41px] rounded-[28px] shadow-2xl"
          />
    </div>
  )
}

export default Calendar

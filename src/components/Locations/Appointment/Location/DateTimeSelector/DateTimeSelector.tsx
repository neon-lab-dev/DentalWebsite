"use client";
import { useState } from "react";
import DateTimePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import Button from "@/components/Buttons/Button";

const DatePickerPage = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateChange = (date: moment.Moment | string) => {
    if (typeof date === "string") return;
    setSelectedDate(date.format("DD-MM-YYYY"));
    setSelectedDateTime(null);
    setSelectedTime(null); // Reset time when a new date is selected
  };

  const handleTimeClick = (time: string) => {
    if (!selectedDate) return;
    setSelectedTime(time); // Update the selected time
    setSelectedDateTime(`${selectedDate} ${time}`);
  };

  const generateTimes = () => {
    const times = [];
    for (let hour = 9; hour <= 21; hour += 2) {
      times.push(moment({ hour }).format("hh:mm A"));
    }
    return times;
  };

  return (
    <div className="flex w-full justify-center items-center bg-transparent">
      <div className="w-full bg-transparent flex justify-between">
        {/* Calendar Section */}
        <div className="">
          <DateTimePicker
            onChange={handleDateChange}
            timeFormat={false}
            input={false}
            className="custom-datetime-picker bg-[#F5F5DC]  p-[41px] rounded-[28px] shadow-2xl"
          />
        </div>
        <div>
          <div className="flex flex-col gap-12 ">
            {/* Time Section */}
            <div className=" bg-transparent p-4 grid grid-cols-3 gap-6">
              {generateTimes().map((time) => (
                <Button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  variant={selectedTime === time ? "Filled" : "Outlined"}
                  classNames="font-Poppins text-[24px] font-normal "
                >
                  {time}
                </Button>
              ))}
            </div>
            {/* Display Selected Date-Time */}
            <div >
              <p className="py-5 px-6 border border-[#333] rounded-2xl bg-[#F5F5DC] font-Poppins text-[32px] ">
                {selectedDateTime || "No date and time selected"}
              </p>
            </div>
          </div>

          <Button
            variant="Filled"
            classNames="w-full flex justify-center mt-[176px] "
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DatePickerPage;

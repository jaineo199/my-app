import React, { useState } from "react";

interface DateRangePickerProps {
  onDateRangeChange: (startDate: Date, endDate: Date) => void;
}

export default function DateRangePicker(props: DateRangePickerProps) {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const date = new Date(event.target.value);
    setStartDate(date);
    props.onDateRangeChange(date, endDate);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    setEndDate(date);
    props.onDateRangeChange(startDate, date);
  };

  return (
    <div>
      <label htmlFor="start-date">Start Date:</label>
      <input type="date" id="start-date" onChange={handleStartDateChange} />
      <label htmlFor="end-date">End Date:</label>
      <input type="date" id="end-date" onChange={handleEndDateChange} />
    </div>
  );
}

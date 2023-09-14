import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const DateRange = () => {
  const [value, setValue] = useState<any>([null, null]);

  const handleDateChange = (value: any) => {
    console.log(value);

    setValue(value);
  };

  return (
    <div>
      <DateRangePicker value={value} onChange={handleDateChange} />
    </div>
  );
};

export default DateRange;

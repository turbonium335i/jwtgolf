import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

import React, { useState } from "react";

const DatePick = ({ DateOut }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    DateOut(start, end);

    console.log(start, end);
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        excludeDates={[
          addDays(new Date(), -1),
          addDays(new Date(), -2),
          addDays(new Date(), 2),
        ]}
        selectsRange
        selectsDisabledDaysInRange
        inline
        disabledKeyboardNavigation
      />
    </>
  );
};

export default DatePick;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// npm i react-datepicker
// https://www.npmjs.com/package/react-datepicker

const ReactDate = () => {
  const [selected, setSelected] = useState(null);
  // console.log(new Date());

  return (
    <div>
      <DatePicker
        selected={selected}
        onChange={(date) => setSelected(date)}
        dateFormat="yyyy年MM月dd日"
        // minDate={new Date()}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable={true}
        showYearDropdown={true}
        scrollableMonthYearDropdown={true}
      />
    </div>
  );
};

export default ReactDate;

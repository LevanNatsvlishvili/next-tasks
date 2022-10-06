import React, { forwardRef, useState } from 'react';
import Flatpickr from 'flatpickr';

const Flatpicker: React.FC<{}> = ({}) => {
  const [date, setDate] = useState<Date>(new Date());

  const onChange = (value: Date): void => {
    setDate(value);
  };

  return (
    <div className="border-blue-dark border w-26-2 h-5-0 rounded-1-0 px-1-5 py-1-0 flex justify-center flex-col">
      <input type="date" />
      <p className="text-[#5F6579] text-1-2 leading-1-5">Od kiedy wolne</p>
      <Flatpickr
        className="border-none outline-none leading-1-7 text-1-4 text-[#202945]"
        selected={date}
        onChange={onChange}
      />
    </div>
  );
};

export default Flatpicker;

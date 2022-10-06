import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomHeader from './DatepickerHeader';
import { locale, minDate, maxDate } from './utils';

const DateComponent: React.FC<{}> = ({}) => {
  const [date, setDate] = useState<Date>(new Date());

  const onChange = (value: Date): void => {
    setDate(value);
  };

  return (
    <>
      <div className="relative border-blue-dark border w-fit rounded-1-0 ">
        <DatePicker
          className="pb-1-0 outline-none pt-2-4 px-1-5 border-none leading-1-7 text-1-4 text-[#202945] rounded-1-0"
          selected={date}
          onChange={onChange}
          dateFormat="dd.mm.yyyy"
          minDate={minDate}
          maxDate={maxDate}
          renderCustomHeader={CustomHeader}
          locale={locale}
        />
        <p className="text-[#5F6579] text-1-2 leading-1-5 absolute top-0-9 left-1-5">
          Od kiedy wolne
        </p>
      </div>
    </>
  );
};

export default DateComponent;

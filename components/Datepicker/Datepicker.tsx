import Arrow from 'components/Icons/Arrow';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

const DateComponent: React.FC<{}> = ({}) => {
  const [date, setDate] = useState<Date>(new Date());

  const onChange = (value: Date): void => {
    setDate(value);
  };

  const months = {
    en: {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    },
    pl: {
      0: 'STYCZ',
      1: 'LUT',
      2: 'MAR',
      3: 'KWIE',
      4: 'MAJ',
      5: 'CZERW',
      6: 'LIP',
      7: 'SIERP',
      8: 'WRZES',
      9: 'PAZDZIER',
      10: 'LISTOPAD',
      11: 'GRUD',
    },
  };

  const customHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => {
    return (
      <div className="flex !bg-white justify-between px-1-0 react-datepicker__nav">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1L1 6.5L6 12"
              stroke="#202945"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="text-1-4 leading-1-7 font-600 text-blue-dark">
          {months.pl[dayjs(date)['$M']]}
          <span className=""> {dayjs(date)['$y']}</span>
        </div>

        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            className="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1L1 6.5L6 12"
              stroke="#202945"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  };

  const customDay = (day, date) => <span className="bg-yellow ">{day}</span>;

  return (
    <>
      <div className="relative border-blue-dark border w-fit rounded-1-0 ">
        <DatePicker
          className="pb-1-0 outline-none pt-2-4 px-1-5 border-none leading-1-7 text-1-4 text-[#202945] rounded-1-0"
          selected={date}
          onChange={onChange}
          dateFormat="dd.mm.yyyy"
          // fixedHeight
          renderCustomHeader={customHeader}
          // dayClassName={() => 'border border-blue-dark !rounded-round !bg-red'}
          // calendarClassName="w-30-0"
          locale="PL"
        />
        <p className="text-[#5F6579] text-1-2 leading-1-5 absolute top-0-9 left-1-5">
          Od kiedy wolne
        </p>
      </div>
    </>
  );
};

export default DateComponent;

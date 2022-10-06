import React from 'react';
import dayjs from 'dayjs';
import { months } from './utils';

interface customHeaderProps {
  date: string;
  decreaseMonth: () => {};
  increaseMonth: () => {};
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: customHeaderProps) => {
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

export default CustomHeader;

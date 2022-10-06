import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const DatePicker: React.FC<{}> = ({}) => {
  const [value, setValue] = useState(new Date());
  const [displayValue, setDisplayValue] = useState(new Date());
  const [date, setDate] = useState<Date>(new Date());
  const [isShow, setIsShow] = useState<boolean>(false);

  const onChange = (value: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(value);
  };

  const onInputChange = (e) => {
    setDisplayValue(e.target.value);
  };

  const handleOnChange = (value: Date) => {
    setIsShow(!isShow);
    setDate(value);
  };

  console.log(displayValue);

  const testDate = date.toISOString().split('T')[0];

  console.log();

  const parsedDate = dayjs(date);

  const dateGenerator = () => {
    const parsed = dayjs(date);
    const year = parsed['$y'];
    const month = parsed['$M'] >= 9 ? parsed['$M'] + 1 : `0${parsed['$M'] + 1}`;
    const day = parsed['$D'] > 9 ? parsed['$D'] : `0${parsed['$D']}`;

    console.log(parsed['$M']);

    return `${year}.${month}.${day}`;
  };

  return (
    <div>
      <input value={dateGenerator()} onChange={onInputChange} />
      <input
        value={new Intl.DateTimeFormat('en-GB', {
          dateStyle: 'full',
          timeStyle: 'long',
        }).format(date)}
        type="date"
        pattern="\d{4}.\m{2}.\y{2}"
      />
      {/* <Calendar onChange={onChange} value={date} /> */}
      {/* <input type="date" onChange={onChange} value={value} /> */}
    </div>
  );
};

export default DatePicker;

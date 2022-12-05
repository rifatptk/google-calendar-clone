import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { getMonth } from '../utils';

const SmallCalendar = () => {
  const [currentMonthIdx, setcurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setcurrentMonth] = useState(getMonth());

  useEffect(() => {
    setcurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setcurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setcurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setcurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day) {
    const nowDay = dayjs().format('DD-MM-YY');
    const currDay = day.format('DD-MM-YY');
    if (nowDay === currDay) {
      return 'bg-blue-500 rounded-full text-white';
    } else {
      return '';
    }
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, dayIdx) => (
          <span key={dayIdx} className="text-sm py-1 text-center">
            {day.format('dd').charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, rowIdx) => (
          <React.Fragment key={rowIdx}>
            {row.map((day, dayIdx) => (
              <button
                key={dayIdx}
                className={`py-1 w-full ${getDayClass(day)} `}
              >
                <span className="text-sm">{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;

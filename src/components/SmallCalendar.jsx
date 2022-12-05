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
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
        </p>
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
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, dayIdx) => (
          <span key={dayIdx} className="text-sm py-1 text-center">
            {day.format('dd').charAt(0)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;

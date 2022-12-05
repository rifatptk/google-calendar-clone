import { createContext } from 'react';

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  seDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
});

export default GlobalContext;

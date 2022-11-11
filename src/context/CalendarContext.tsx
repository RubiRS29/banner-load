import { Dayjs } from "dayjs";
import React, { createContext } from "react";
import { Calendar } from "../models/CalendarModel";

export type CalendarContextProps ={
  calendar: Calendar;
  setMonthIndex : ({indexMonth, montName}:any) => void;
  setCalendar : (calendar:Calendar) => void;
  
};
export const CalendarContext = createContext<CalendarContextProps>({} as CalendarContextProps );


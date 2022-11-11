import React, {
    useState,
    useEffect,
    useReducer,
    useMemo,
} from "react";
import calendarReducer from "../reducer/CalendarReducer";
import { CalendarContext } from "../context/CalendarContext";
import { Dayjs } from "dayjs";
import { Calendar } from "../models/CalendarModel";
import { getMonth, getMonthIndex } from "../utils/utils";

const initialState = new Calendar(
    getMonthIndex(), 
    getMonth()
)
    
export default function CalendarProvider({ children }: any) {

    const [calendar, dispatch] = useReducer(calendarReducer, initialState);

    function setCalendar(Calendar: Calendar) {
        console.log(Calendar);

        dispatch({
            type: "SET_MONTH",
            payload: Calendar,
        });  
    }

    function setMonthIndex(indexMonth: number) {
        dispatch({
            type: "SET_MONTH_INDEX",
            payload: indexMonth,
        });  

 }  
    
    return (
        <CalendarContext.Provider
            value={{
                calendar,
                setCalendar, 
                setMonthIndex
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
}

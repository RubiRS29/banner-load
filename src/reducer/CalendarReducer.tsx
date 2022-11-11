import { Dayjs } from "dayjs";
import { Calendar } from "../models/CalendarModel";

type CalendarAction =
    | { type: 'SET_MONTH', payload: Calendar }
    | { type: 'SET_MONTH_INDEX', payload: number }

export default function calendarReducer(state: Calendar, action: CalendarAction) {

    switch (action.type) {

        case "SET_MONTH":
            return {
                ...state,
                calendar: action.payload,
            };

        case "SET_MONTH_INDEX":
            return {
                ...state,
                monthIndex: action.payload,
                
            };

        default:
            return state;
    }
}
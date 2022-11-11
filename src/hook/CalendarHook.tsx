import { useContext } from 'react';
import { CalendarContext } from '../context/CalendarContext';


export const CalendarHook = () => {

    const { calendar, setCalendar, setMonthIndex } = useContext( CalendarContext );

    return {
        calendar,
        setCalendar, 
        setMonthIndex
    }
}
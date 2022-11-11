
import { Flex, Heading, Button, Box, useColorModeValue, Divider, SimpleGrid, Stack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useState, useContext, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import { HeaderCalendar } from './HeaderCalendar';
import { WeekCalendar } from './weekCalendar';
import { CalendarHook } from '../../hook/CalendarHook';
import CalendarProvider from '../../provider/ContextProvider';
import { getMonth, getMonthIndex } from '../../utils/utils';
import { Calendar } from '../../models/CalendarModel';

export const ScheduleCom = () => {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const [currentMonthName, setCurrentMonthName] = useState();
    const { calendar, setCalendar } = CalendarHook();

    useEffect(() => {
        setCurrentMonth(getMonth(calendar.monthIndex));
        
    }, [calendar]);


    const getNameFormat = () => {
        return dayjs(new Date(dayjs().year(), calendar.monthIndex)).format("MMMM YYYY");
    }


    return (

        <Box>
            <HeaderCalendar monthName={getNameFormat()} />

            <SimpleGrid minChildWidth='350px' spacing='40px'>
                <Box >
                    <WeekCalendar month={currenMonth} />
                </Box>

                <Box bg='tomato' height='80px'>
                    ufhsfduisfdh
                </Box>
            </SimpleGrid>

        </Box>
    )

}
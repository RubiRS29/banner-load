
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
import { DayCalendarModel } from '../../models/DayCalendarModel';
import { BannerModal } from './bannersModal';
import { FilterBanner } from './FilterBanner';




export const ScheduleCom = () => {

    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { calendar } = CalendarHook();


    useEffect(() => {
        setCurrentMonth(getMonth(calendar.monthIndex));
    }, [calendar]);


    const getNameFormat = () => {
        return dayjs(new Date(dayjs().year(), calendar.monthIndex)).format("MMMM YYYY");
    }


    return (

        <Box>

            <SimpleGrid minChildWidth='350px' spacing='40px'>

                <Box >
                    <HeaderCalendar monthName={getNameFormat()} />
                    <WeekCalendar month={currenMonth} />
                </Box>

                <Box  >
                    <FilterBanner />
                    
                    <BannerModal  />

                </Box>
            </SimpleGrid>

        </Box>
    )

}
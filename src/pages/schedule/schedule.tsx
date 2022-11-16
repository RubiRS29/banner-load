
import { Box, SimpleGrid } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import { HeaderCalendar } from './HeaderCalendar';
import { WeekCalendar } from './weekCalendar';
import { CalendarHook } from '../../hook/CalendarHook';
import { getMonth } from '../../utils/utils';
import { FilterBanner } from './FilterBanner';
import BannerDataProvider from '../../provider/BannerDataProvider';
import { BannerCard } from './BannerCard';



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

                <BannerDataProvider>

                    <Box >
                        <FilterBanner />

                        <BannerCard />

                    </Box>
                </BannerDataProvider>

            </SimpleGrid>

        </Box>
    )

}
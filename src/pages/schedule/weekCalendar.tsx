import { Box, Grid } from "@chakra-ui/react";
import React, { } from "react";
import { DayCalendarModel } from "../../models/DayCalendarModel";
import { Day } from "./dayCalendar";

export const WeekCalendar = ({ month }: any) => {

    const calendarData = {

        daysCalendar: [
            {
                'date': '09 November 2022',
                'position': "bottom",
                'mode': "DIY",
                'language': "es_MX"
            },

            {
                'date': '10 November 2022',
                'position': "bottom",
                'mode': "DIY",
                'language': "es_MX"
            },

            {
                'date': '10 November 2022',
                'position': "bottom",
                'mode': "DIY",
                'language': "es_MX"
            },

            {
                'date': '30 November 2022',
                'position': "bottom",
                'mode': "DIY",
                'language': "es_MX"
            }

            , {
                'date': '22 November 2022',
                'position': "bottom",
                'mode': "DIY",
                'language': "es_MX"
            }
        ]

    };


    const filterDates = (date: string) => {

        return calendarData.daysCalendar.filter((bannerDay) => bannerDay.date == date);
    }

    const dayCalendar = {

        'date': '09 November 2022',
        'position': "bottom",
        'mode': "DIY",
        'language': "es_MX"

    }


    const date = '10 November 2022';

    const daysOFweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    return (
        <Box m={1} >

            <Grid templateColumns='repeat(7, 1fr)' gap={3}>

                {daysOFweek.map((day, index) => (
                    <Box fontSize='sm' key={index}>
                        {day}
                    </Box>
                ))}

                {
                    month.map((row: any, i: any) => (

                        row.map((day: any, idx: any) => (

                            <Day
                                day={day}
                                key={idx}
                                rowIdx={i}
                                info={filterDates(day.format("DD MMMM YYYY")) ? filterDates(day.format("DD MMMM YYYY")) : []} 
                                // isActive={filterDates(day.format("DD MMMM YYYY")) ? true : false}
                            />

                        ))

                    ))

                }


            </ Grid>

        </Box >


    )

}
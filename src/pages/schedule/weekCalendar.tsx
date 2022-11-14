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
                'country': "es_MX"
            },
            {
                'date': '10 November 2022',
                'position': "bottom",
                'mode': "DIY",
                'country': "es_MX"
            }
        ]

    };

    const dayCalendar = new DayCalendarModel(
        '09 November 2022',"bottom","DIY","es_MX")

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

                            day.format("DD MMMM YYYY") == date ? (

                                <Day day={day} key={idx} rowIdx={i} isActive info={dayCalendar} />
                            ) : (
                                <Day day={day} key={idx} rowIdx={i} info={[]} /> 
                            )
                        ))

                    ))

                }


            </ Grid>

        </Box >


    )

}
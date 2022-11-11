import { Box, Grid } from "@chakra-ui/react";
import React, {  } from "react";
import { Day } from "./dayCalendar";

export const WeekCalendar = ( { month } : any) => {

    const daysOFweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    return (
            <Box m={1} >

                <Grid templateColumns='repeat(7, 1fr)' gap={3}>

                    {daysOFweek.map((day) => (
                        <Box fontSize='sm'>
                            {day}
                        </Box>
                    ))}

                    {month.map((row: any, i: any) => (
                        
                        <React.Fragment key={i}>
                            {row.map((day: any, idx: any) => {
                                
                                return day.format("DD") == '01' ? (
                                    <Day day={day} key={idx} rowIdx={i} isActive />
                                ) : (
                                    <Day day={day} key={idx} rowIdx={i} />
                                )
                            })}
                        </React.Fragment>
                    ))}


                </ Grid>

            </Box >


    )

}
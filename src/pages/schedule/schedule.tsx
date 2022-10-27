
import { Flex, Heading, Button, Box, useColorModeValue, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export const ScheduleCom = () => {

    const [date, setDate] = useState(new Date());
    
    return (
        <div className="App">
            <Calendar onChange={setDate} value={date} />
        </div>
    )

}
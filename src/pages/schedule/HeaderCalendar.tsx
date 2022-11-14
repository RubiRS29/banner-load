import { EmailIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, IconButton, Stack } from "@chakra-ui/react"
import dayjs from "dayjs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CalendarHook } from "../../hook/CalendarHook";
import { getMonth, getMonthIndex } from "../../utils/utils";


export const HeaderCalendar = ({ monthName }: any) => {

    const { calendar, setMonthIndex } = CalendarHook();

    function handlePrevMonth() {
        setMonthIndex(calendar.monthIndex - 1);
    }

    function handleNextMonth() {
        setMonthIndex(calendar.monthIndex + 1);
    }

    function handleReset() {
        setMonthIndex(getMonthIndex());
    }

    return (

        <Stack direction={['column', 'row']} spacing='24px'>
            <Button
                onClick={handleReset}
                aria-label='Current Date'
                variant='ghost'
                className="border rounded py-2 px-4 mr-5"
            >
                Today
            </Button>

            <IconButton
                onClick={handlePrevMonth}
                aria-label='Prev'
                variant='ghost'
                icon={<FiChevronLeft />}
            >
                prev
            </IconButton>

            <Center 
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
            >

                {monthName}

            </Center>

            <IconButton
                onClick={handleNextMonth}
                aria-label='Next'
                variant='ghost'
                icon={<FiChevronRight />}
            >
                next
            </IconButton>
        </Stack>



    )
}
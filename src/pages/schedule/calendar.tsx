
import { Box } from "@chakra-ui/react"
import { ScheduleCom } from "./schedule"
import CalendarProvider from "../../provider/ContextProvider"

export const Calendar = () => {

    return (
        <CalendarProvider>

            <ScheduleCom />

        </CalendarProvider>

    )

}
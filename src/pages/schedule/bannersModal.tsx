import { SimpleGrid, Box } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { HeaderCalendar } from "./HeaderCalendar";
import { WeekCalendar } from "./weekCalendar";


export const BannerModal = () => {

    return (

        <Box>

            <SimpleGrid minChildWidth='350px' spacing='40px'>


                <Box height='80px'>
                    <Banner />

                </Box>
            </SimpleGrid>

        </Box>
    )

};
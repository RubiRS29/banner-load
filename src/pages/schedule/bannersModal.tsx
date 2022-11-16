import { SimpleGrid, Box } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { HeaderCalendar } from "./HeaderCalendar";
import { WeekCalendar } from "./weekCalendar";


export const BannerModal = () => {

    return (
        <SimpleGrid minChildWidth='350px' spacing='10px' mt={4} >

            <Banner />
            <Banner />

        </SimpleGrid>

    )

};
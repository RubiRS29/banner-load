import { SimpleGrid, Box, Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { HeaderCalendar } from "../calendar/HeaderCalendar";
import { WeekCalendar } from "../calendar/weekCalendar";
import { BannerDataHook } from "../../../hook/BannerDataHook";


export const BannerCard = () => {

    const { banner } = BannerDataHook();

    return (
        <SimpleGrid minChildWidth='350px' spacing='10px' mt={4} >

            {banner.length > 0 ? banner.map((bannerData, indx) => (

                <Banner key={indx} date={bannerData.date} mode={bannerData.mode} position={bannerData.position} language={bannerData.language} />

            )) : <Alert status='error'>
                <AlertIcon />
                <AlertTitle>There are not banners!</AlertTitle>
                <AlertDescription>Please try with another date or mode</AlertDescription>
            </Alert>}

        </SimpleGrid>

    )

};
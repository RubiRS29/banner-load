import { Box, Button, Center, Flex, FormControl, FormLabel, Grid, GridItem, Input, Select, Square } from "@chakra-ui/react"
import moment from "moment";
import { useState } from "react";
import { BannerDataContext } from "../../../context/BannerDataContext";
import { BannerDataHook } from "../../../hook/BannerDataHook";

export const FilterBanner = () => {
    const [date, setDate] = useState('');
    const [mode, setMode] = useState('');

    //use the hook from the context 
    const { banner, setBannerDataByDate, setBannerDataByMode } = BannerDataHook();


    const handleDateChange = (e: any) => {
        var dateFormat = moment(e.target.value).format("DD MMMM YYYY")
        setDate(dateFormat);
        setMode(''); //delete the last value 
    }

    const handleModeChange = (e: any) => {
        var modeChange = e.target.value;
        console.log(modeChange);
        setMode(modeChange);
        setDate(''); //delete the last value 
    }


    //later I need change this for an api
    const findBanner = () => {

        if (date != '') {
            console.log("date firts " + date + mode)
            setBannerDataByDate(date);
            console.log(banner)

        } else if (mode != '') {
            console.log("date mode " + mode + date)
            setBannerDataByMode(mode)
            console.log(banner)

        } else {
            console.log("there are not data to find")
        }

    }


    return <>

        <FormControl>

            <Grid templateColumns='repeat(3, 1fr)' gap={2} mt={2} mb={2}>

                <GridItem>
                    <Input
                        placeholder="Select Date"
                        size="md"
                        type="date"
                        onChange={handleDateChange}
                    />

                </GridItem>

                <GridItem>
                    <Select placeholder='Select Mode' onChange={handleModeChange}>
                        <option value={'DYI'}>DYI</option>
                        <option value={'CUSTOMER'}>CUSTOMER</option>
                    </Select>

                </GridItem>

                <GridItem>
                    <Button
                        colorScheme='teal'
                        onClick={findBanner}
                    >
                        Search
                    </Button>

                </GridItem>
            </Grid>

        </FormControl>





    </>
}
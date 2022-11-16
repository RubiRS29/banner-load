import { Box, Button, Center, Flex, FormControl, FormLabel, Grid, GridItem, Input, Select, Square } from "@chakra-ui/react"

export const FilterBanner = () => {


    return <>


        <FormControl>

            <Grid templateColumns='repeat(3, 1fr)' gap={2} mt={2} mb={2}>

                <GridItem>
                    <Input
                        placeholder="Select Date"
                        size="md"
                        type="date"
                    />

                </GridItem>

                <GridItem>
                    <Select placeholder='Select Mode'>
                        <option>DYI</option>
                        <option>CUSTOMER</option>
                    </Select>

                </GridItem>

                <GridItem>
                    <Button
                        colorScheme='teal'
                        type='submit'
                    >
                        Search
                    </Button>

                </GridItem>
            </Grid>

        </FormControl>





    </>
}
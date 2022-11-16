import { Stack, Heading, Divider, ButtonGroup, Button, Card, CardBody, CardFooter, Image, Text, Icon, position, useColorModeValue, Flex, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { FiAlignCenter, FiGrid, FiTag } from "react-icons/fi";
import { Feature } from "../../../componet/Feature";
import { imageToBase64 } from "../../../utils/utils";


export const Banner = ({ date, position, mode, language }: any) => {


    return (
        <Card borderRadius='lg' variant={'outline'} size={'sm'} m={1}>
            <CardBody >
                <Stack spacing='3'>
                    <Heading size='sm'>Date of Release {date} </Heading>

                    <SimpleGrid minChildWidth='120px' spacing='40px' gap='2'>

                        <Feature
                            icon={
                                <Icon as={FiGrid} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            field={'Position'}
                            text={position}
                        />

                        <Feature
                            icon={
                                <Icon as={FiTag} color={'green.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            field={'Mode'}
                            text={mode}
                        />

                        <Feature
                            icon={
                                <Icon as={FiAlignCenter} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            field={'Languaje'}
                            text={language}
                        />

                    </SimpleGrid>


                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button variant='solid' colorScheme='blue' size='xs'>
                    Go to Phase
                </Button>

            </CardFooter>
        </Card>
    )
};
import { Badge, Box, Button, Center, Flex, GridItem, Heading, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, position, SimpleGrid, Tag, useDisclosure } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { DayCalendarModel } from "../../models/DayCalendarModel";
import { Banner } from "./Banner";
import './calendar.css'

export const Day = ({ day, rowIdx, isActive, info }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    var dayCalendar:any = [];

    // function checkedNumber(e: any) {

    //     let number = e.target;
    //     let numChecked = document.querySelector('.checked-number');

    //     if (numChecked) {
    //         numChecked.classList.remove('checked-number')
    //     }
    //     number.classList.add("checked-number");

    // };

    if (info.length > 0) {
        dayCalendar = info;
        console.log(dayCalendar)
    }

    return (
        <GridItem w='100%'
            h='85'
            p={2}
            color='black'
            borderRadius='lg'
            borderWidth='1px'
            fontWeight='bold'
            fontSize='xs'
            cursor='pointer'
            onClick={onOpen}
            key={rowIdx}
        >

            <Center mb={1}>
                <Heading fontSize='xs'>{day.format("DD")}</Heading>
                {/* {day.format("DD MMMM YYYY")}  */}

            </Center>

            {info.length > 0 ? <Flex borderRadius='full' w={6} h={6} bg={'green.100'} align={'center'} justify={'center'} fontSize='.9em' >{dayCalendar.length}</Flex> : ""}

            {info.length > 0 ?

                <Modal isOpen={isOpen} onClose={onClose} size={'lg'} >
                    <ModalOverlay />
                    <ModalContent p={3}>
                        {dayCalendar.map((day: any) => (
                            <Banner date={day.date} mode={day.mode} language={day.language} position={day.position} />
                        ))}

                    </ModalContent>

                    
                </Modal>

                : ""}



        </GridItem>

    );

}
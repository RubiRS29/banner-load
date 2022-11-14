import { Badge, Box, Button, Center, GridItem, Heading, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Tag, useDisclosure } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { DayCalendarModel } from "../../models/DayCalendarModel";
import './calendar.css'

export const Day = ({ day, rowIdx, isActive, info }: any) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    function checkedNumber(e: any) {

        let number = e.target;
        let numChecked = document.querySelector('.checked-number');

        if (numChecked) {
            numChecked.classList.remove('checked-number')
        }
        number.classList.add("checked-number");

    };

    console.log(info);

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

            {isActive == true ? <Badge ml='1' colorScheme='green'>DYI</Badge> : ""}

            <Modal isOpen={isActive == true ? isOpen : false} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Banner To Release {info.date}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {info}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>




        </GridItem>

    );

}
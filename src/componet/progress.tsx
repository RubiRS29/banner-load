import {
    Alert,
    AlertDescription,
    AlertTitle,
    Button,
    CircularProgress,
    CircularProgressLabel,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";

export const Progress = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (


        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <CircularProgress value={40} color='green.400'>
                        <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>



    )
}
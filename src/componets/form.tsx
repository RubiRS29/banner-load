import { AttachmentIcon, EmailIcon, InfoIcon, InfoOutlineIcon, PhoneIcon } from '@chakra-ui/icons';
import {
    Box, FormControl, FormLabel, Grid, GridItem, Input, useRadio,
    Text, Select, Radio, RadioGroup, Stack, Table, TableCaption,
    TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Alert, AlertIcon, Container,
    SimpleGrid, InputGroup, useColorModeValue, Button, IconButton, Icon, Tooltip, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer
}
    from '@chakra-ui/react';
import React, { SetStateAction } from 'react';
import { FiCheckCircle, FiTrash2 } from 'react-icons/fi';
import { FileModel } from '../models/fileModel';
import { ButtonRadio } from './button-radio';


export const FormBanners = () => {

    const [value, setValue] = React.useState('DYI');
    const [country, setCountry] = React.useState('');
    const [files, setFiles] = React.useState<FileModel[]>([]);
    const [messageError, setMessage] = React.useState('');

    const options = [
        { value: 'ES_MX', label: 'ES_MX' },
        { value: 'EN_MX', label: 'EN_MX' },
        { value: 'ES_US', label: 'ES_US' },
        { value: 'EN_US', label: 'EN_US' },
        { value: 'BR', label: 'BR' },
        { value: 'PT', label: 'PT' },
    ]


    function handleChangeEvent(e: any) {

        const fileInput = e.target as HTMLInputElement | null;

        let filesArray: FileModel[] = [];

        const exten = ["css", "png", "html"]

        const extenFiles: String[] = [];

        let message = "These files are missing: ";

        const bytesToMegaBytes = (bytes: number) => (bytes / (1024 ** 2)).toFixed(2);

        if (fileInput) {
            const filesArr = Array.from(fileInput.files || [])


            if (filesArr.length > 3 || files.length >= 3) {
                const popMessage = document.getElementById("pop-message");

                popMessage?.removeAttribute("hidden");
                setMessage("Just can be 3 files");
                return;
            }

            let count = files.length == 0 ? 0 : files.at(-1)?.id;

            filesArr.forEach(file => {

                if (count?.toString != undefined) {
                    count += 1;

                    let fileM: FileModel = new FileModel(
                        count,
                        file.name.slice(0, 20),
                        bytesToMegaBytes(file.size),
                        getExt(file.name)
                    );

                    filesArray.push(fileM);
                }

            });

            if (files.length > 0) {

                files.forEach(file => {
                    extenFiles.push(file.type);
                });

            }

            filesArray.forEach(file => {
                extenFiles.push(file.type);
            });


            if(extenFiles.sort() != exten.sort()) {

                const notIncludes = exten.filter(element => !extenFiles.includes(element))

                message += notIncludes.toString()

                const popMessage = document.getElementById("pop-message");

                popMessage?.removeAttribute("hidden");
                setMessage(message);
                
            }


            setFiles([...files, ...filesArray])

            // console.log(files.length + " --- " + filesArray.length);
        }

    }

    function getExt(word: string) {
        return word.substring(word.lastIndexOf('.') + 1)

    }

    function deleteFile(id: number) {

        console.log(files);

        const filteredFiles = files.filter((file) => file.id != id)
        setFiles(filteredFiles)

    }

    function validateFiles() {

        var exte: string = "";


        if (value == "DYI") {

            exte = '.css, .jpg, .png, .html';

            if (country == "ES_MX" || country == "EN_MX") {
                exte += ', xlsx';
            }

        } else if (value == "Customer") {
            exte = '.jpg, .png';
        }

        return exte;

    }

    function changeCountry(e: any) {
        setCountry(e.target.value)
    }

    return (
        <FormControl isRequired bg={useColorModeValue('white.100', 'gray.900')}>

            <SimpleGrid minChildWidth='400px' spacing='35px' m={2} >

                <Box>
                    <Box mt={5}>
                        <FormLabel mb={5}>Location</FormLabel>
                        <ButtonRadio />
                    </Box >


                    <Box mt={5} >
                        <FormLabel >Languaje</FormLabel>
                        <Box mt={5}>
                            <Select placeholder='Select country' onChange={changeCountry}>
                                {options.map(({ value, label }) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </Select>
                        </Box>

                    </Box >

                    <Box mt={5}>
                        <FormLabel mb={5}>Release Date</FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="date"
                        />
                    </Box >

                    <Box mt={5} >
                        <FormLabel>Mode</FormLabel>
                        <RadioGroup onChange={setValue} value={value} mt={5}>
                            <Stack direction='row' className='mode-ra'>
                                <Radio size='lg' value='DYI' mr={5}>DYI</Radio>
                                <Radio size='lg' value='Customer'>Customer</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box >
                </Box>

                <Box id="div-files" mt={5} minHeight="500" >

                    <Flex minWidth='max-content' alignItems='center'>


                        <Box p='2' >

                            <FormLabel >Files</FormLabel>

                        </Box>
                        <Spacer />

                        <Box id="pop-message" hidden>

                            <Tooltip hasArrow label={messageError} closeDelay={500} fontSize='md' color='white' bg='orange.500'>
                                <InfoIcon color="orange.500" w={7} h={7} />
                            </Tooltip  >

                        </Box>

                    </Flex>


                    <div className="dropFiles" >
                        <label className="filelabel">
                            <AttachmentIcon w={8} h={8} />
                            <span className="title">
                                Add File
                            </span>

                            <Input type="file"
                                multiple={true}
                                className="FileUpload"
                                id="FileInput"
                                name="booking_attachment"
                                onChange={handleChangeEvent}
                                accept={validateFiles()}

                            />

                        </label>

                        <TableContainer>
                            <Table variant='simple' id='filesTable'>
                                <Thead>
                                    <Tr>
                                        <Th>name</Th>
                                        <Th>type</Th>
                                        <Th>size</Th>
                                        <Th>status</Th>
                                        <Th>edit</Th>
                                    </Tr>
                                </Thead>
                                <Tbody >

                                    {files.map(({ name, size, type, id }) => (

                                        < Tr key={id} id={id.toString()} >

                                            <Td>{name}</Td>
                                            <Td >{type}</Td>

                                            <Td>{size}/mb </Td>

                                            <Td p={1}>

                                                <IconButton
                                                    variant='ghost'
                                                    colorScheme='green'
                                                    aria-label='Search database'
                                                    icon={<FiCheckCircle />} />

                                            </Td>
                                            <Td p={1}
                                            >
                                                <IconButton
                                                    variant='ghost'
                                                    aria-label='Search database'
                                                    icon={<FiTrash2
                                                    />}

                                                    onClick={() => deleteFile(id)}
                                                    color='red'
                                                    size='lg'
                                                />


                                            </Td>

                                        </Tr>

                                    ))}
                                </Tbody>

                            </Table>
                        </TableContainer>

                    </div>



                </Box >

            </SimpleGrid  >

        </FormControl >

    )

}


import { AttachmentIcon, InfoIcon } from '@chakra-ui/icons';
import {
    Box, FormLabel, Input, Select, Radio, RadioGroup, Stack, Table,
    TableContainer, Tbody, Td, Th, Thead, Tr, SimpleGrid, useColorModeValue,
    IconButton, Tooltip, Flex, Spacer, FormErrorMessage
}
    from '@chakra-ui/react';
import React from 'react';
import { FiCheckCircle, FiTrash2 } from 'react-icons/fi';
import { ButtonRadio } from '../../../componet/button-radio';
import moment from 'moment';
import { LoadBanner } from '../../../hook/LoadBanner';
import { getExt } from '../../../utils/utils';

export const FormBanners = () => {

    const [files, setFiles] = React.useState<File[]>([]);
    const [value, setValue] = React.useState('DYI');
    const [position, setPosition] = React.useState('botton');
    const [country, setCountry] = React.useState('');
    const [date, setDate] = React.useState('');
    const [messageError, setMessage] = React.useState('');

    //context hook custom
    const { formDataBanner, notIncludes } = LoadBanner();

    const options = [
        { value: 'es_MX', label: 'es_MX' },
        { value: 'en_MX', label: 'en_MX' },
        { value: 'es_US', label: 'es_US' },
        { value: 'en_US', label: 'en_US' }
    ]

    function handleChangeEvent(e: any) {

        const fileInput = e.target as HTMLInputElement | null;
        const exten = [" css", " png", " html", " txt"]
        const extenFiles: String[] = [];
        const popMessage = document.getElementById("pop-message");
        let filesArray: File[] = [];
        let message = "These files are missing: ";

        if (fileInput) {

            const filesArr: File[] = Array.from(fileInput.files || [])

            if (value == "Customer") {

                if (filesArr.length > 2 || files.length >= 2) {

                    popMessage?.removeAttribute("hidden");
                    setMessage("Just can be 2 files");
                    return;
                }

            } else if (value == "DYI") {
                if (filesArr.length > 4 || files.length >= 4) {

                    popMessage?.removeAttribute("hidden");
                    setMessage("Just can be 4 files");
                    return;
                }

            }

            filesArr.forEach(file => {
                filesArray.push(file);
            });


            if (files.length > 0) {
                files.forEach(file => {

                    extenFiles.push(getExt(file.name));
                });

            }

            filesArray.forEach(file => {
                extenFiles.push(getExt(file.name));
            });


            // if (extenFiles.sort() != exten.sort()) {

            //     console.log(extenFiles)

            //     const notIncludes = exten.filter(element => !extenFiles.includes(element))

            //     message += notIncludes.toString()

            //     const popMessage = document.getElementById("pop-message");

            //     popMessage?.removeAttribute("hidden");
            //     setMessage(message);

            // }



            setFiles([...files, ...filesArray]);

            let filesLoad: File[] = Array.from([...files, ...filesArray]);


            const valuesFiles = [...formDataBanner.keys()];

            valuesFiles.forEach(value => {
                if (value.includes("files")) {
                    formDataBanner.delete(value);
                }
            })


            filesLoad.forEach(file => {
                formDataBanner.append("files", file)
            })
            if (!notIncludes.includes("files")) {
                notIncludes.push("files")
            }
        }
    }

    function validateFiles() {

        var exte: string = "";

        if (value == "DYI") {

            exte += '.css, .png, .html, .jpg';

            if (country == "es_MX" || country == "en_MX") {
                exte += ', xlsx, .txt';
            }

        } else if (value == "Commercial") {
            exte += '.png, .jpg';
        }

        return exte;

    }

    // ultis 
    function deleteFile(ext: string) {

        ext = getExt(ext);
        const filteredFiles = files.filter((file) => getExt(file.name) != ext)

        formDataBanner.delete("files");

        filteredFiles.forEach(file => formDataBanner.append("files", file));


        setFiles(filteredFiles)
    }

    function changeDate(e: any) {

        let date = moment(e.target.value).format('MM/DD/YYYY');

        const day = new Date(date).getUTCDay();

        if ([6, 0].includes(day)) {

            e.preventDefault();
            e.target.value = '';

        } else {

            setDate(date);
            formDataBanner.set("date", date)
            if (!notIncludes.includes("date")) {

                notIncludes.push("date")
            }
        }

    }

    function bytesToMegaBytes(bytes: number) {
        return (bytes / (1024 ** 2)).toFixed(2);
    }

    return (

        <SimpleGrid minChildWidth='400px' spacing='35px' bg={useColorModeValue('white.100', 'gray.900')}>

            <Box>
                <Box mt={5}>
                    <FormLabel mb={5}>Position</FormLabel>
                    <ButtonRadio handleChange={(e: any) => {
                        formDataBanner.set("position", e);
                        if (!notIncludes.includes("position")) {
                            notIncludes.push("position")
                        }
                       

                    }} />

                </Box >


                <Box mt={5} >
                    <FormLabel >Languaje</FormLabel>
                    <Box mt={5}>

                        <Select placeholder='Select country' onChange={(e: any) => {
                            setCountry(e.target.value)
                            formDataBanner.set("country", e.target.value);
                            if (!notIncludes.includes("country")) {
                                notIncludes.push("country")
                            }
                        }}>

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
                        onChange={changeDate}
                    />

                    <FormErrorMessage>{messageError}</FormErrorMessage>
                </Box >

                <Box mt={5} >
                    <FormLabel>Mode</FormLabel>

                    <RadioGroup onChange={(e: any) => {

                        setValue(e)
                        formDataBanner.set("mode", e);
                        if (!notIncludes.includes("mode")) {
                            notIncludes.push("mode")
                        }

                    }} mt={5}>

                        <Stack direction='row' className='mode-ra'>
                            <Radio size='lg' value='DYI' mr={5}>DYI</Radio>
                            <Radio size='lg' value='Commercial'>Customer</Radio>
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

                <Box>
                    <Box className="dropFiles" >
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

                                    {files.map(({ name, size, type }) => (

                                        < Tr key={getExt(type.toString())} id={getExt(type.toString())} >

                                            <Td>{name.slice(0, 20)}</Td>
                                            <Td >{getExt(name)}</Td>
                                            <Td>{bytesToMegaBytes(size)}/mb </Td>

                                            <Td p={1}>

                                                <IconButton
                                                    variant='ghost'
                                                    colorScheme='green'
                                                    aria-label='Search database'
                                                    icon={<FiCheckCircle />} />

                                            </Td>
                                            <Td p={1}>
                                                <IconButton
                                                    variant='ghost'
                                                    aria-label='Search database'
                                                    icon={<FiTrash2 />}

                                                    onClick={() => deleteFile(name.toString())}
                                                    color='red'
                                                    size='lg'
                                                />

                                            </Td>

                                        </Tr>

                                    ))}
                                </Tbody>

                            </Table>
                        </TableContainer>

                    </Box>


                </Box>

            </Box >

        </SimpleGrid  >

    )

}

export default FormBanners;

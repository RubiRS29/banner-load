
import { Flex, Heading, Button, Box, useToast } from '@chakra-ui/react';

import { Step, Steps, useSteps } from "chakra-ui-steps"
import { FiUser, FiClipboard, FiDollarSign } from 'react-icons/fi';
import { Success } from './success/done-component';
import { FormBanners } from './form/form';
import Review from './review/review';
import './Utils.css';
import { LoadBanner } from '../../hook/LoadBanner';
import { loadBannerApi } from './form/formApi'
import React from 'react';


const steps = [
    { label: "Step 1", Content: FormBanners, icon: FiUser },
    { label: "Step 3", Content: FormBanners, icon: FiDollarSign },
    { label: "Step 4", Content: Success, icon: FiClipboard }
];

export const StepsMain = () => {

    const { formDataBanner, notIncludes } = LoadBanner();
    const fieldsName =  ["mode", "date", "position", "country", "files"]
    const [fieldsNum, setFieldsNum] = React.useState(0);
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })
    const toast = useToast()


    const load = async () => {
        await loadBannerApi(formDataBanner);
    }

    const validateFields = () => {

        const fieldsKeys = [...formDataBanner.keys()];
        const notIncludesFields = fieldsName.filter(element => !fieldsKeys.includes(element));

        setFieldsNum(notIncludes.length);

        console.log(notIncludes.length);

        return toast({
            title: 'Error, fields are missing',
            description: `Some fields are missing ${notIncludesFields.toString()}`,
            position: 'top-right',
            status: 'error',
            duration: 8000,
            isClosable: true,
        })
    }
    
    return (

        <Flex flexDir="column" width="100%">

            <Steps activeStep={activeStep}>

                {steps.map(({ label, icon, Content }) => (

                    <Step label={label} key={label} icon={icon} >


                        <Box bg='white' w='100%' m={2} overflow='hidden'>

                            {activeStep === 1 ?

                                (<Review />) :

                                (<Content />)
                            }
                        </Box>

                    </Step>
                ))}
            </Steps>

            {activeStep === steps.length ? (
                <Flex px={4} py={4} width="100%" flexDirection="column">
                    <Heading fontSize="xl" textAlign="center">
                        Woohoo! All steps completed!
                    </Heading>
                    <Button mx="auto" mt={6} size="sm" onClick={reset}>
                        Reset
                    </Button>
                </Flex>
            ) : (
                <Flex width="100%" justify="flex-end">

                    <Button
                        isDisabled={activeStep === 0}
                        mr={4}
                        onClick={prevStep}
                        size="sm"
                        variant="ghost"
                    >
                        Prev
                    </Button>

                    {activeStep === 1 ?
                        (<Button size="sm" onClick={load}>
                            {activeStep === steps.length - 1 ? "affff" : "Load"}
                        </Button>) :

                        <Button size="sm" onClick={notIncludes.length !== 5 ? validateFields : nextStep}>
                            {fieldsNum}
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                    }

                </Flex>
            )}
        </Flex>
    )
}

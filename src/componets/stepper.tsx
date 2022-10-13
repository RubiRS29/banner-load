
import { Flex, Heading, Button, Box, useColorModeValue, Divider} from '@chakra-ui/react';

import { Step, Steps, useSteps } from "chakra-ui-steps"
import { ReactElement } from 'react';
import { FiUser, FiClipboard, FiDollarSign } from 'react-icons/fi';
import { Success } from './done-component';
import { FormBanners } from './form';
import Review from './review-component/review';
import './Utils.css';

const steps = [
    { label: "Step 1", Content: FormBanners, icon: FiUser },
    { label: "Step 2", Content: Review, icon: FiDollarSign },
    { label: "Step 3", Content: FormBanners, icon: FiDollarSign },
    { label: "Step 4", Content: Success ,icon: FiClipboard }
];



export const StepsMain = () => {

    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })

    return (
        <Flex flexDir="column" width="100%">
            <Steps activeStep={activeStep}>
            
                {steps.map(({ label, icon, Content }) => (
                    
                    <Step label={label} key={label} icon={icon} >
                        
                        <Box bg='white' w='100%' m={2} overflow='hidden'>
                            <Content /> 
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
                    <Button size="sm" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </Flex>
            )}
        </Flex>
    )
}

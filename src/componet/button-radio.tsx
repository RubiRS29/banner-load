import { useRadio, useRadioGroup, HStack, Box, Text } from "@chakra-ui/react"
import React from "react";
import { render } from "react-dom"

// 1. Create a component that consumes the `useRadio` hook

function RadioCard(props:any) {


    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}
// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const ButtonRadio = ({handleChange} :any) => {
    const options = ['botton', 'top', 'center']
    
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'location',
        onChange: handleChange
        
    })

    const group = getRootProps()

    return (

        <HStack {...group}>
            
            {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                    <RadioCard key={value} {...radio} mt={5}>
                        {value}
                    </RadioCard>
                )
            })}
        </HStack>
    )
}

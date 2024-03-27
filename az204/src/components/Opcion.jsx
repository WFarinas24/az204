import { Box, HStack, Radio, Stack, Text, VStack, useRadio } from '@chakra-ui/react'
import React from 'react'
import { MoficarRespuesta } from '../services/servicios'
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
export const Opcion = (props) => {
    const { text } = props
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

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
                <HStack>
                    {input.checked ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}
                    <Text textAlign={"start"}>{text}</Text>
                </HStack>
            </Box>
        </Box>
    )
}

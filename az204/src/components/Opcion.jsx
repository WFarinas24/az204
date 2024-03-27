import { Box, HStack, Radio, Stack, Tag, Text, VStack, useRadio } from '@chakra-ui/react'
import React from 'react'
import { MoficarRespuesta } from '../services/servicios'
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
export const Opcion = (props) => {
    const { text, disable, datos, op } = props

    const { getInputProps, getRadioProps } = useRadio(props)
    const esCorrecta = disable && datos?.pregunta.respuestaCorrecta.toLowerCase().includes(op?.toLowerCase())

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (

        <Box as='label'>
            <input  {...input} disabled={disable} />
            <Box
                {...checkbox}
                disabled={disable}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'

                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}


                _disabled={{
                    color: "gray",
                    border: "1px solid grey",
                    textDecoration: !esCorrecta ? "line-through" : "none",
                    _checked: {
                        textDecoration: "none",
                        border: esCorrecta ? "1px solid teal" : "1px solid red" ,
                        color: esCorrecta ? "teal.600" : "red",
                        bg: "white",
                    }
                }
                }

                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                <HStack>
                    {input.checked ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}
                    <Text textAlign={"start"}>{text}</Text>
                    {esCorrecta ?
                        <Tag p={1} size={20} variant='solid' colorScheme='teal' textDecor={"none"}>
                            Respuesta correcta
                        </Tag> : null}

                </HStack>
            </Box>
        </Box>
    )
}

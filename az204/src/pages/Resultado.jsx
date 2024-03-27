import { Alert, AlertIcon, Box, Button, Card, Flex, Heading, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Stack, Table, Tbody, Td, Text, Thead, Tooltip, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ObtenerExamen } from '../services/servicios';
import { Link, useParams } from 'react-router-dom';

import imgUrlExito from '../assets/exito.png';
import imgUrlError from '../assets/error.png';
import { FaEye } from 'react-icons/fa';



export const Resultado = () => {
    const { idExamen } = useParams();

    const [examen, setExamen] = useState({})
    const [resultado, setResultado] = useState({})

    useEffect(() => {
        const _examen = ObtenerExamen(idExamen)
        setExamen(_examen)
        setResultado({
            correctas: _examen.preguntas?.filter(x => x.respuestaCorrecta.includes(x.usuarioRespuesta)).length,
            incorrectas: _examen.preguntas?.filter(x => !x.respuestaCorrecta.includes(x.usuarioRespuesta) && x.usuarioRespuesta != "" && x.usuarioRespuesta != undefined && x.respuestaCorrecta != "").length,
            enBlanco: _examen.preguntas?.filter(x => x.usuarioRespuesta == undefined).length,
        })

    }, [])


    return (
        <Card h={"90vh"} alignItems={"center"}>
            <Heading>
                Resultado
            </Heading>
            <Flex direction={"row"} maxH={500} >
                <Box border={"1px solid green"} overflowY={"auto"}>
                    <Text fontWeight={"bold"}>Correctas</Text>

                    <Table w={"40rem"}>
                        <Thead>
                            <Tr>
                                <Td>
                                    Pregunta
                                </Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {examen.preguntas?.filter(x => x.respuestaCorrecta.includes(x.usuarioRespuesta)).map(x => {
                                return <Tooltip label={x.pregunta} hasArrow >
                                    <Tr key={x.id}>
                                        <Td position={"relative"} bg={"green.100"} borderRadius={10}>
                                            <Image left={60} top={3} position={"absolute"} opacity={0.40} src={imgUrlExito} width={"60px"} alt="" />
                                            <Flex justifyContent={"center"} align={"center"} gap={2} >
                                                <Text fontWeight={"extrabold"} fontSize={30}>
                                                    {examen.preguntas.findIndex(index => index.id == x.id) + 1}
                                                </Text>
                                                {x.pregunta.slice(0, 120)} ...more
                                            </Flex>
                                        </Td>
                                    </Tr>
                                </Tooltip>
                            })}
                        </Tbody>
                    </Table>
                </Box>
                <Box border={"1px solid red"} overflowY={"auto"}>
                    <Text fontWeight={"bold"} >Incorrectas</Text>
                    <Table w={"40rem"}>
                        <Thead>
                            <Tr>
                                <Td>
                                    Pregunta
                                </Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {examen.preguntas?.filter(x => !x.respuestaCorrecta.includes(x.usuarioRespuesta) && x.usuarioRespuesta != "" && x.respuestaCorrecta != "").map(x => {
                                return <Tr key={x.id}>
                                    <Td position={"relative"} bg={"red.100"} borderRadius={10}>
                                        <Image left={60} top={3} position={"absolute"} opacity={0.40} src={imgUrlError} width={"60px"} alt="" />
                                        <Flex justifyContent={"center"} align={"center"} gap={2} >
                                            <Text fontWeight={"extrabold"} fontSize={30}>
                                                {examen.preguntas.findIndex(index => index.id == x.id) + 1}
                                            </Text>
                                            <Text>
                                                {x.pregunta.slice(0, 120)}
                                                <Tooltip label={x.pregunta} hasArrow >

                                                    <Text w={"fit-content"} color={"blue"}>
                                                        ...mas
                                                    </Text>
                                                </Tooltip>
                                            </Text>
                                            <Popover>
                                                <PopoverTrigger>
                                                    <Button leftIcon={<FaEye />}></Button>
                                                </PopoverTrigger>
                                                <Portal>
                                                    <PopoverContent>
                                                        <PopoverArrow />
                                                        <PopoverHeader fontWeight={"bold"}>Respuesta correcta</PopoverHeader>
                                                        <PopoverCloseButton />
                                                        <PopoverBody>

                                                            <Alert status='warning'>
                                                                <AlertIcon />
                                                                <Text>{x.respuestas.find(y => x.respuestaCorrecta.includes(y.slice(0, 1))).slice(2)}</Text>
                                                            </Alert>

                                                        </PopoverBody>
                                                    </PopoverContent>
                                                </Portal>
                                            </Popover>
                                        </Flex>
                                    </Td>
                                </Tr>

                            })}
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
            <Stack>
                <Text fontWeight={"bolder"} >✅{resultado.correctas} Correctas / ❌{resultado.incorrectas} Incorrectas / ❔{resultado.enBlanco} En blanco</Text>
            </Stack>
            <Stack>
                <Heading fontSize={70}>
                    Nota
                </Heading>

                <Heading fontSize={70} color={((resultado.correctas ) / 20 * 100).toFixed(2) < 70 ? "red" : "green"}>
                    {((resultado.correctas ) / 20 * 100).toFixed(2)}
                </Heading>
            </Stack>

            <Flex>
                <Button as={Link} to={"/"} >
                    Volver a inicio
                </Button>
            </Flex>
        </Card >
    )
}

import { AbsoluteCenter, Box, Button, Card, CardBody, CardHeader, Container, Divider, Flex, HStack, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Progress, Radio, RadioGroup, Spacer, Stack, Text, VStack, useRadioGroup } from "@chakra-ui/react";
import { FaAd, FaArrowLeft, FaArrowRight, FaBookmark, FaCheck, FaCog, FaEdit, FaHamburger, FaLink, FaRegBookmark, FaRegClock, FaSave, FaTrash } from "react-icons/fa";


import React, { useEffect, useState } from 'react'
import { Opcion } from "../components/Opcion";
import { ExisteFavorito, GuardarFavorito, MoficarRespuesta, ObtenerPregunta } from "../services/servicios";
import { Link, useParams } from "react-router-dom";

export const ExamamPage = () => {
    const { idPregunta, idExamen } = useParams();

    const [pregunta, setPregunta] = useState({
        respuestas: []
    })

    const [datosPregunta, setDatosPregunta] = useState({
        anterior: null,
        siguiente: null,
        index: -1,
        estado: "Terminado"
    })


    const { getRootProps, getRadioProps, setValue, isDisabled } = useRadioGroup({
        name: 'framework',
        defaultValue: "-1",
        onChange: (e) => { MoficarRespuesta({ idExamen, idPregunta, respuesta: e }); },
    })

    const [esFavorito, setEsFavorito] = useState(false)
    const group = getRootProps()

    useEffect(() => {
        const _pregunta = ObtenerPregunta(idExamen, idPregunta)
        setPregunta(_pregunta.pregunta)
        setDatosPregunta(_pregunta)
        setValue(_pregunta.pregunta.usuarioRespuesta ?? "-1")
        setEsFavorito(ExisteFavorito({ idPregunta }))

    }, [idPregunta])

    return (
        <Container maxW='8xl' >
            <Card h={"100vh"}>

                <CardHeader>
                    <Flex direction={"row"} gap={1}>
                        <Spacer></Spacer>
                        <Button onClick={() => {GuardarFavorito(idPregunta); setEsFavorito(!esFavorito)}} colorScheme={esFavorito ? "green" : "gray"} >
                            {esFavorito ?
                                <FaBookmark />
                                :
                                <FaRegBookmark /> 
                            }

                        </Button>

                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<FaCog />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem as={Link} to={"/"} icon={<FaSave />}>
                                    Guardar y volver
                                </MenuItem>
                                <MenuItem as={Link} to={"/"} color={"red"} icon={<FaTrash />}>
                                    Eliminar
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>

                    <Box position='relative' padding='10'>
                        <Divider />
                        <AbsoluteCenter bg='white' px='4'>
                            <Text>{datosPregunta.index + 1}/20</Text>
                        </AbsoluteCenter>
                    </Box>
                    <Progress value={(((datosPregunta.index + 1)) / 20 * 100)} size='xs' colorScheme='blue' />
                </CardHeader>
                <CardBody>
                    <Box dir="row" textAlign={"start"}>
                        <Heading m={2}>Pregunta {datosPregunta.index + 1}</Heading>
                    </Box>
                    <Stack border={'1px solid #A0AEC0'} backgroundColor={"whitesmoke"} p={4} borderRadius={10} >
                        <Text>{pregunta.pregunta}</Text>
                    </Stack>

                    <RadioGroup m={10}>
                        <Stack {...group} >
                            {pregunta.respuestas.map((resp, index) => {
                                const value = resp.substring(0, 1)
                                const texto = resp.slice(2)
                                const radio = getRadioProps({ value })
                                return <Opcion op={value} datos={datosPregunta} disable={datosPregunta.estado == "Terminado"} text={texto} key={value} {...radio} />
                            })
                            }
                            {pregunta.respuestas.length == 0 ?

                                <Box background={"red"} m={"auto"}>
                                    <Image w={500} src={pregunta.imgRespuesta} fallbackSrc='https://via.placeholder.com/150' />
                                </Box>

                                : <></>
                            }
                        </Stack>
                    </RadioGroup>

                    <Spacer>
                    </Spacer>

                    <Flex alignItems={"flex-end"}>
                        {
                            datosPregunta.index > 0 ?

                                <Button as={Link} to={`/examen/${idExamen}/${datosPregunta.anterior}`} colorScheme='telegram' variant={"outline"} w={200} leftIcon={<FaArrowLeft />} >
                                    Anterior
                                </Button> : null
                        }

                        <Spacer>
                        </Spacer>

                        {
                            datosPregunta.siguiente
                                ?
                                <Button as={Link} to={`/examen/${idExamen}/${datosPregunta.siguiente}`} colorScheme='telegram' w={200} rightIcon={<FaArrowRight />}>
                                    Siguiente
                                </Button >
                                :
                                <Button as={Link} to={`/resultado/${idExamen}`} colorScheme='green' w={200} rightIcon={<FaCheck />}>
                                    Finalizar
                                </Button >

                        }

                    </Flex >
                </CardBody>


            </Card>
        </Container>

    )
}

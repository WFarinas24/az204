import { Alert, AlertIcon, Box, Button, Card, Flex, Heading, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Stack, Table, Tbody, Td, Text, Thead, Tooltip, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GuardarFavorito, ListaFavoritos, ObtenerExamen, TerminarExamen } from '../services/servicios'
import { Link, useParams } from 'react-router-dom'
import JSConfetti from 'js-confetti'

import imgUrlExito from '../assets/exito.png'
import imgUrlError from '../assets/error.png'
import { FaEye } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'

const jsConfetti = new JSConfetti()

export const Resultado = () => {
  const { idExamen } = useParams()

  const [examen, setExamen] = useState({})
  const [resultado, setResultado] = useState({})
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    const _examen = ObtenerExamen(idExamen)
    if (_examen.estado != 'Terminado') {
      TerminarExamen({ idExamen })
    }
    setExamen(_examen)
    setFavoritos(ListaFavoritos())
    setResultado({
      correctas: _examen.preguntas?.filter(x => x.respuestaCorrecta?.includes(x.usuarioRespuesta) || x.respuestaCorrecta?.length === 0).length,
      incorrectas: _examen.preguntas?.filter(x => !x.respuestaCorrecta?.includes(x.usuarioRespuesta) && x.usuarioRespuesta != '' && x.usuarioRespuesta != undefined && x.respuestaCorrecta != '').length,
      enBlanco: _examen.preguntas?.filter(x => x.usuarioRespuesta == undefined && x.respuestaCorrecta?.length > 0).length
    })
  }, [])

  useEffect(() => {
    if (((resultado.correctas) / examen.preguntas?.length * 100).toFixed(2) > 70) {
      jsConfetti.addConfetti()
    }
  }, [resultado])

  return (
        <Card alignItems={'center'}>
            <Heading>
                Resultado
            </Heading>
            <Flex m={10} direction={'row'} maxH={300} minH={400} flexDirection={'row'} flexWrap={'wrap'} overflowX={'auto'} >
                <Box borderRadius={4} border={'1px solid green'} overflowY={'auto'}>
                    <Text fontWeight={'bold'}>Correctas</Text>

                    <Table maxW={'30rem'} >
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
                                        <Td position={'relative'} bg={'green.100'} borderRadius={10}>
                                            <Image left={60} top={3} position={'absolute'} opacity={0.40} src={imgUrlExito} width={'60px'} alt="" />
                                            <Flex justifyContent={'center'} align={'center'} gap={2} >
                                                <Text fontWeight={'extrabold'} fontSize={30}>
                                                    {examen.preguntas?.findIndex(index => index.id == x.id) + 1}
                                                </Text>
                                                {x.pregunta?.slice(0, 120)} ...more
                                            </Flex>
                                        </Td>
                                    </Tr>
                                </Tooltip>
                            })}
                        </Tbody>
                    </Table>
                </Box>
                <Box borderRadius={4} border={'1px solid red'} overflowY={'auto'}>
                    <Text fontWeight={'bold'} >Incorrectas</Text>
                    <Table maxW={'30rem'}>
                        <Thead>
                            <Tr>
                                <Td>
                                    Pregunta
                                </Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {examen.preguntas?.filter(x => !x.respuestaCorrecta?.includes(x.usuarioRespuesta) && x.usuarioRespuesta != '' && x.respuestaCorrecta != '').map(x => {
                              return <Tr key={x.id}>
                                    <Td position={'relative'} bg={'red.100'} borderRadius={10}>
                                        <Image left={60} top={3} position={'absolute'} opacity={0.40} src={imgUrlError} width={'60px'} alt="" />
                                        <Flex justifyContent={'center'} align={'center'} gap={2} >
                                            <Text fontWeight={'extrabold'} fontSize={30}>
                                                {examen.preguntas?.findIndex(index => index.id == x.id) + 1}
                                            </Text>
                                            <Text>
                                                {x.pregunta?.slice(0, 120)}
                                                <Tooltip label={x.pregunta} hasArrow >

                                                    <Text w={'fit-content'} color={'blue'}>
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
                                                        <PopoverHeader fontWeight={'bold'}>Respuesta correcta</PopoverHeader>
                                                        <PopoverCloseButton />
                                                        <PopoverBody>

                                                            <Alert status='warning' gap={2}>
                                                                <AlertIcon />
                                                                <Text>{x.respuestas?.find(y => x.respuestaCorrecta?.includes(y?.slice(0, 1)))?.slice(2)}</Text>
                                                                <Button size={'sm'} colorScheme={favoritos?.includes(x.id) ? 'green' : 'gray'} onClick={() => {
                                                                  GuardarFavorito(x.id)
                                                                  setFavoritos(ListaFavoritos())
                                                                }} leftIcon={<FaStar/>}>

                                                                </Button>
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
                <Text fontWeight={'bolder'} >✅{resultado.correctas} Correctas / ❌{resultado.incorrectas} Incorrectas / ❔{resultado.enBlanco} En blanco</Text>
            </Stack>
            <Stack m={20}>
                <Heading fontSize={70}>
                    Nota
                </Heading>

                <Heading fontSize={70} color={((resultado.correctas) / examen.preguntas?.length * 100).toFixed(2) < 70 ? 'red' : 'green'}>
                    {((resultado.correctas) / examen.preguntas?.length * 100).toFixed(2)}
                </Heading>
            </Stack>

            <Flex m={2}>
                <Button as={Link} to={'/'} >
                    Volver a inicio
                </Button>
            </Flex>
        </Card >
  )
}

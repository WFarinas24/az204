import { AbsoluteCenter, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, CardHeader, Container, Divider, Flex, HStack, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Progress, Radio, RadioGroup, Skeleton, Spacer, Stack, Text, Textarea, VStack, useRadioGroup } from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight, FaBookmark, FaCheck, FaCog, FaEdit, FaExternalLinkAlt, FaHamburger, FaInfoCircle, FaLink, FaRegBookmark, FaRegClock, FaSave, FaTrash, FaFireAlt } from 'react-icons/fa'

import { MdOutlineGTranslate, MdError } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { Opcion } from '../components/Opcion'
import { ActualizarNota, ActualizarTiempoExamen, ExisteFavorito, GuardarFavorito, MoficarRespuesta, ObtenerNota, ObtenerPaginaExamTopic, ObtenerPregunta, ObtenerPreguntaData } from '../services/servicios'
import { Link, useParams } from 'react-router-dom'
import { Traducir } from '../services/traductor'

import JSConfetti from 'js-confetti'
import { useStoreExamenes } from '../services/storePreguntas'
import { EstadoPregunta } from '../components/EstadoPregunta'

const jsConfetti = new JSConfetti()

export const ExamamPage = () => {
  const { idPregunta, idExamen } = useParams()

  const [indexPregunta, setIndexPregunta] = useState(-1)

  const [traduccion, setTraduccion] = useState({
    cargando: false,
    texto: null
  })

  const [notas, setNotas] = useState({
    abierto: false,
    texto: ''
  })

  const [pregunta, setPregunta] = useState({
    respuestas: [],
    pregunta: 'cargando'
  })

  const [interval, setIntervalPregunta] = useState(-1)

  const [datosPregunta, setDatosPregunta] = useState({
    anterior: null,
    siguiente: null,
    index: -1,
    estado: 'Terminado'
  })

  const [mostrarRespuesta, setmostrarRespuesta] = useState({
    mostrar: false,
    correcta: '-1'
  })

  const { getRootProps, getRadioProps, setValue, isDisabled } = useRadioGroup({
    name: 'framework',
    defaultValue: '-1',
    onChange: (e) => {
      MoficarRespuesta({ idExamen, idPregunta, respuesta: e })
      setmostrarRespuesta({ ...mostrarRespuesta, correcta: e.replace('.', '') })
    }
  })

  const [cantidadPreguntas, setcantidadPreguntas] = useState(0)

  const [esFavorito, setEsFavorito] = useState(false)
  const group = getRootProps()

  useEffect(() => {
    if (mostrarRespuesta.mostrar && datosPregunta?.pregunta?.respuestaCorrecta?.toLowerCase().includes(mostrarRespuesta.correcta?.toLocaleLowerCase())) {
      jsConfetti.addConfetti({
        emojis: ['⚡️', '💥', '✨', '💫', '🤩'],
        confettiNumber: 35,
        emojiSize: 45
      })
    }
  }, [mostrarRespuesta])

  const __examenes = useStoreExamenes((state) => state.examenes)
  const getPregunta = useStoreExamenes((state) => state.idPregunta)

  useEffect(() => {
    const _pregunta = ObtenerPregunta(idExamen, idPregunta)

    setmostrarRespuesta({ mostrar: false, correcta: _pregunta.pregunta?.usuarioRespuesta ?? '-1' })
    setcantidadPreguntas(_pregunta.cantidadPreguntas)
    setPregunta(_pregunta.pregunta)
    setDatosPregunta(_pregunta)
    setValue(_pregunta.pregunta?.usuarioRespuesta ?? '-1')
    setEsFavorito(ExisteFavorito({ idPregunta }))

    setNotas({
      texto: ObtenerNota({ idPregunta })
    })

    clearInterval(interval)
    setIndexPregunta(ObtenerPaginaExamTopic(idPregunta))
    setTraduccion({
      cargando: false,
      texto: null
    })

    const intevalId = setInterval(() => {
      ActualizarTiempoExamen({ idExamen })
    }, 1000)

    return () => {
      clearInterval(intevalId)
    }
  }, [idPregunta])

  const TraducirPregunta = async () => {
    setTraduccion({
      cargando: true,
      texto: null
    })

    const res = await Traducir(pregunta?.pregunta)
    setTraduccion({
      cargando: false,
      texto: res
    })
  }

  return (
    <Container maxW='8xl' >

      <Card>

        <CardHeader>
          <Flex direction={'row'} gap={1}>
            <Spacer></Spacer>
            <Button onClick={() => { GuardarFavorito(idPregunta); setEsFavorito(!esFavorito) }} colorScheme={esFavorito ? 'green' : 'gray'} >
              {esFavorito
                ? <FaBookmark />
                : <FaRegBookmark />
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
                <MenuItem as={Link} to={'/'} onClick={clearInterval(interval)} icon={<FaSave />}>
                  Guardar y volver
                </MenuItem>
                <MenuItem as={Link} to={'/'} onClick={clearInterval(interval)} color={'red'} icon={<FaTrash />}>
                  Eliminar
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          {/* <CompletarContenido /> */}

          <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter bg='white' px='4'>
              <Text>{datosPregunta.index + 1}/ {cantidadPreguntas} </Text>
            </AbsoluteCenter>
          </Box>
          <Progress value={(((datosPregunta.index + 1)) / cantidadPreguntas * 100)} size='xs' colorScheme='blue' />
        </CardHeader>
        <CardBody>
          <Box dir="row" textAlign={'start'}>
            <Heading m={2}>Pregunta {datosPregunta.index + 1} <Text fontWeight={6} fontStyle={'italic'} fontSize={20}>({idPregunta})</Text> </Heading>
          </Box>

          <Stack border={'1px solid #A0AEC0'} backgroundColor={esFavorito ? 'orange.100' : 'whitesmoke'} p={4} borderRadius={10} position={'relative'} >

            <EstadoPregunta esFavorito={esFavorito} pregunta={getPregunta(idPregunta)} >

            </EstadoPregunta>

            {
              pregunta?.pregunta?.split('\n').map( (x, index) => {
                return (<>
                  <Text key={index}>{x}</Text>
                </>
                )
              })}

            {pregunta?.imgPregunta?.length > 0
              ? <Box m={'auto'}>
                <Image w={500} src={pregunta.imgPregunta} fallbackSrc='./pato-loading.gif' />
              </Box>
              : null
            }
            <HStack>
              <FaExternalLinkAlt />
              <a style={{ color: 'blue' }} target="_blank" href={'https://www.examtopics.com/exams/microsoft/az-204/view/' + indexPregunta}>Ver en Exam topics</a>
            </HStack>

            <Box position={'absolute'} right={5} bottom={2} opacity={0.4} _hover={{ opacity: 1 }} onClick={() => TraducirPregunta()}>

              {traduccion.cargando
                ? <div style={{ position: 'absolute', right: -26, top: -22, opacity: 0.6 }} class="lds-ripple"><div></div><div></div></div>
                : null
              }
              <MdOutlineGTranslate style={{ zIndex: 9999 }} size={32} />
            </Box>

          </Stack>

          {traduccion?.texto?.trim() !== undefined || traduccion.cargando
            ? < Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'bold'}>
                      Traducción

                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel borderRadius={'md'} bg={'orange.100'} pb={4}>

                  {
                    (traduccion.cargando)
                      ? <Stack>
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                      </Stack>
                      : <HStack alignItems={'top'}>
                        <Box>
                          <FaInfoCircle style={{ margin: '10px 2px' }} size={18} />
                        </Box>
                        <Text>
                          {traduccion.texto}
                        </Text>
                      </HStack>
                  }

                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            : null}
          <RadioGroup m={4}>
            <Stack {...group} >
              {pregunta?.respuestas?.map((resp, index) => {
                const value = resp.substring(0, 1)
                const texto = resp.slice(2)
                const radio = getRadioProps({ value })
                return <Opcion mostrarRespuesta={mostrarRespuesta.mostrar} op={value} datos={datosPregunta} disable={datosPregunta.estado == 'Terminado'} text={texto} key={value} {...radio} />
              })
              }
              {pregunta?.respuestas?.length === 0

                ? <Box m={'auto'}>
                  <Image w={500} src={pregunta.imgRespuesta} fallbackSrc='./pato-loading.gif' />
                </Box>

                : <></>
              }
            </Stack>
          </RadioGroup>

          <Spacer>
          </Spacer>
          <Flex >
            <Spacer />
            <Button onClick={() => {
              setmostrarRespuesta({ ...mostrarRespuesta, mostrar: true })
            }
            } colorScheme='green' m={2}>Ver respuesta</Button>
            <Spacer />

          </Flex>

          <Accordion allowMultiple mb={4}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' fontWeight={'bold'}>
                    Notas

                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel borderRadius={'md'} pb={4}>
                <Textarea
                  placeholder='No hay notas para esta pregunta'
                  size='sm'
                  resize={true}
                  value={notas.texto}
                  onChange={(e) => {
                    ActualizarNota({ idPregunta, notas: e.target.value })
                    setNotas({ texto: e.target.value })
                  }}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Flex alignItems={'flex-end'}>
            {
              datosPregunta.index > 0

                ? <Button as={Link} to={`/examen/${idExamen}/${datosPregunta.anterior}`} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} colorScheme='telegram' variant={'outline'} w={200} leftIcon={<FaArrowLeft />} >
                  Anterior
                </Button>
                : null
            }
            <Spacer />
            {
              datosPregunta.siguiente
                ? <Button as={Link} to={`/examen/${idExamen}/${datosPregunta.siguiente}`} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} colorScheme='telegram' w={200} rightIcon={<FaArrowRight />}>
                  Siguiente
                </Button >
                : <Button as={Link} to={`/resultado/${idExamen}`} onClick={clearInterval(interval)} colorScheme='green' w={200} rightIcon={<FaCheck />}>
                  Finalizar
                </Button >
            }

          </Flex >
        </CardBody>

      </Card>

    </Container >

  )
}

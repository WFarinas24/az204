import React, { useEffect, useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import { FaRepeat } from 'react-icons/fa6'

import { VscDebugContinue } from 'react-icons/vsc'

import { FaAngleDown, FaCheck, FaChessBoard, FaCog, FaExternalLinkAlt, FaFire, FaPaperPlane, FaPlus, FaRegFilePdf, FaReply, FaSave, FaTrash } from 'react-icons/fa'
import { CantidadPreguntasTotalesConImagenes, ClonarExamen, EliminarExamen, GenerarExamen, ObtenerExamenes } from '../services/servicios'
import { Link } from 'react-router-dom'
import { ObtenerTiempo } from '../util/Utilidadades'
import {
    Avatar, Button, Card, CardHeader, Container, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Tag, TagLabel, Text, Tooltip,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useDisclosure
} from '@chakra-ui/react'
import { ModalRepaso } from '../components/ModalRepaso'

export const MainPage = () => {
    const [listaExamenes, setListaExamenes] = useState([])

    const ActualizarTabla = () => {
        setListaExamenes(ObtenerExamenes())
    }
    useEffect(() => {
        ActualizarTabla()
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container maxW='8xl' mt={50}>
            <Card>
                <ModalRepaso isOpen={isOpen} onOpen={onOpen} onClose={onClose} actualizarTabla={ActualizarTabla} />

                <CardHeader align={'start'}>

                    <Flex gap={2}>

                        <Heading>Historial de Quizz realizado</Heading>
                        <Spacer></Spacer>

                        <Menu>
                            <MenuButton colorScheme='green' as={Button} rightIcon={<FaAngleDown />}>
                                Menú
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => {
                                    GenerarExamen()
                                    setListaExamenes(ObtenerExamenes())
                                }} gap={2}>
                                    <FaPaperPlane />
                                    Examen
                                </MenuItem>

                                <MenuItem onClick={() => {
                                    onOpen()
                                    setListaExamenes(ObtenerExamenes())
                                }} gap={2}>
                                    <FaFire />
                                    Repaso completo
                                </MenuItem>

                                <MenuItem as={Link} to={"Favoritos"} gap={2}>
                                    <FaExternalLinkAlt />
                                    Exportar favoritos
                                </MenuItem>

                            </MenuList>
                        </Menu>

                    </Flex>

                </CardHeader>

                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Fecha y hora</Th>
                                <Th>Tiempo</Th>
                                <Th>Tipo</Th>
                                <Th>Preguntas</Th>
                                <Th>Estado</Th>
                                <Th>Nota</Th>
                                <Th>Acciones</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {
                                listaExamenes.map(x => {
                                    const idExamen = x.id
                                    const idPregunta = x.ultimaPregunta ?? x.preguntas[0]?.id

                                    return <Tr key={x.id}>
                                        <Td>{new Intl.DateTimeFormat('es-mx', {
                                            dateStyle: 'short',
                                            timeStyle: 'short'
                                        }).format(new Date(x.fechaEdit))} 🕧</Td>
                                        <Td>{ObtenerTiempo(x.tiempo)}</Td>
                                        <Td>{x.tipo ?? 'Examen'}</Td>
                                        <Td>{x.preguntas.length ?? 'Preguntas'}</Td>
                                        <Td>{x.estado === 'Incompleto'
                                            ? <Tag p={1} size={20} variant='solid' colorScheme='purple'>
                                                {x.estado}
                                            </Tag>
                                            : <Tag p={1} size={20} variant='solid' colorScheme='teal'>
                                                {x.estado}
                                            </Tag>
                                        }
                                        </Td>
                                        <Td>{x.nota ?? 20}</Td>
                                        <Td> <Menu>
                                            <MenuButton
                                                as={IconButton}
                                                aria-label='Options'
                                                icon={<CiMenuKebab />}
                                                variant='outline'
                                            />
                                            <MenuList>
                                                <MenuItem as={Link} to={`/examen/${idExamen}/${idPregunta}`} icon={<VscDebugContinue />}>
                                                    {x.estado === 'Terminado' ? 'Revisar' : 'Continuar'}
                                                </MenuItem>

                                                <MenuItem onClick={() => { ClonarExamen(idExamen); ActualizarTabla() }} icon={<FaRepeat />}>
                                                    Repetir
                                                </MenuItem>
                                                {x.estado === 'Terminado'
                                                    ? <MenuItem as={Link} to={`/resultado/${idExamen}`} icon={<FaCheck />}>
                                                        Ver nota
                                                    </MenuItem>
                                                    : null
                                                }

                                                {/* <MenuItem icon={<FaRegFilePdf />}>
                                                    Guardar PDF
                                                </MenuItem> */}
                                                <MenuItem onClick={() => { EliminarExamen(x.id); ActualizarTabla() }} icon={<FaTrash />}>
                                                    Eliminar
                                                </MenuItem>
                                            </MenuList>
                                        </Menu> </Td>
                                    </Tr>
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                <Heading m={2}>Total preguntas {CantidadPreguntasTotalesConImagenes()}</Heading>

            </Card>

        </Container>

    )
}

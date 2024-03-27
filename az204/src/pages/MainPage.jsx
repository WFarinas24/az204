import React, { useEffect, useState } from 'react'
import { Button, Card, CardHeader, Container, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Tag } from '@chakra-ui/react'
import { CiMenuKebab } from "react-icons/ci";
import { FaRepeat } from "react-icons/fa6";

import { VscDebugContinue } from "react-icons/vsc";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { FaCheck, FaCog, FaPlus, FaRegFilePdf, FaReply, FaSave, FaTrash } from 'react-icons/fa';
import { GenerarExamen, ObtenerExamenes } from '../services/servicios';
import { Link } from 'react-router-dom';


export const MainPage = () => {

    const [listaExamenes, setListaExamenes] = useState([])

    useEffect(() => {
        setListaExamenes(ObtenerExamenes())
    }, [])

    return (
        <Container maxW='8xl' mt={50}>
            <Card>
                <CardHeader align={"start"}>
                    <Flex>
                        <Heading>Historial de Quizz realizado</Heading>
                        <Spacer></Spacer>
                        <Button onClick={() => {
                            GenerarExamen();
                            setListaExamenes(ObtenerExamenes());
                        }} leftIcon={<FaPlus />} colorScheme='green'>Nuevo</Button>
                    </Flex>

                </CardHeader>

                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Fecha y hora</Th>
                                <Th>Tiempo</Th>
                                <Th>Estado</Th>
                                <Th>Nota</Th>
                                <Th>Acciones</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {
                                listaExamenes.map(x => {

                                    let idExamen = x.id
                                    let idPregunta = x.ultimaPregunta ?? x.preguntas[0].id


                                    return <Tr key={x.id}>
                                        <Td>{new Intl.DateTimeFormat('es-mx', {
                                            dateStyle: 'short',
                                            timeStyle: 'short',
                                        }).format(new Date(x.fechaEdit))} 🕧</Td>
                                        <Td>{x.tiempo}</Td>
                                        <Td>{x.estado == "Incompleto" ?
                                            <Tag p={1} size={20} variant='solid' colorScheme='purple'>
                                                {x.estado}
                                            </Tag>
                                            :
                                            <Tag size={20} variant='solid' colorScheme='teal'>
                                                {x.estado}
                                            </Tag>
                                        }
                                        </Td>
                                        <Td>{x.nota}</Td>
                                        <Td> <Menu>
                                            <MenuButton
                                                as={IconButton}
                                                aria-label='Options'
                                                icon={<CiMenuKebab />}
                                                variant='outline'
                                            />
                                            <MenuList>
                                                <MenuItem as={Link} to={`/examen/${idExamen}/${idPregunta}`} icon={<VscDebugContinue />}>
                                                    Continuar
                                                </MenuItem>

                                                <MenuItem icon={<FaRepeat />}>
                                                    Repetir
                                                </MenuItem>
                                                <MenuItem as={Link} to={`/resultado/${idExamen}`} icon={<FaCheck />}>
                                                    Ver nota
                                                </MenuItem>

                                                <MenuItem icon={<FaRegFilePdf />}>
                                                    Guardar PDF
                                                </MenuItem>
                                                <MenuItem icon={<FaTrash />}>
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
            </Card>
        </Container>

    )
}

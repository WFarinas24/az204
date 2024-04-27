import { Button, Card, CardBody, CardHeader, Center, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ListaFavoritos } from '../services/servicios'
import { Link } from 'react-router-dom'

export const Exportar = () => {

    const [Favoritos, setFavoritos] = useState({})

    useEffect(() => {
        setFavoritos(ListaFavoritos())
    }, [])


    return (
        <Card>
            <CardHeader>
                <Text fontSize={"large"}>
                    Importar Favoritos
                </Text>
            </CardHeader>

            <CardBody>
                <Textarea value={JSON.stringify(Favoritos)}>
                </Textarea>
            </CardBody>

            <Center m={2}>
                <Button as={Link} to={"/"}>
                    volver
                </Button>
            </Center>

        </Card>
    )
}
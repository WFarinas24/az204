import { Button, Card, CardBody, CardHeader, Center, Text, Textarea, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ActualizarFavoritosJSON, ListaFavoritos } from '../services/servicios'
import { Link, json } from 'react-router-dom'
import { FaCircle } from 'react-icons/fa'
import { FaArrowRotateRight } from 'react-icons/fa6'

export const Exportar = () => {
  const [Favoritos, setFavoritos] = useState({})
  const toast = useToast()

  useEffect(() => {
    setFavoritos(JSON.stringify(ListaFavoritos() ?? ''))
  }, [])

  const Actualizar = () => {
    ActualizarFavoritosJSON({ favoritos: Favoritos })
  }

  return (
        <Card>
            <CardHeader>
                <Text fontSize={'large'}>
                    Importar Favoritos
                </Text>
            </CardHeader>

            <CardBody>
                <Textarea value={Favoritos} onChange={(e) => {
                  setFavoritos(e.target.value)
                }}

                >
                </Textarea>
            </CardBody>

            <Center m={2}>
                <Button colorScheme='red' leftIcon={<FaArrowRotateRight />} onClick={
                    () => {
                      try {
                        JSON.parse(Favoritos ?? '[]')

                        toast({
                          title: 'Exito.',
                          description: 'Se actualizaron los favoritos.',
                          status: 'success',
                          duration: 5000,
                          isClosable: true
                        })
                        Actualizar()
                      } catch (e) {
                        alert(e)
                      }
                    }
                }>
                    Actualizar
                </Button>
            </Center>

            <Center m={2}>
                <Button as={Link} to={'/'}>
                    volver
                </Button>
            </Center>

        </Card >
  )
}

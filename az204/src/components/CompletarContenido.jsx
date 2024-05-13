import { Button, Card, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'

export const CompletarContenido = () => {
  const [Lineas, setLineas] = useState([])
  return (
        <div>
            <HStack>
                html: '',
                <Button
                    onClick={() => {
                      const lineas2 = Lineas
                      lineas2.push({
                        elements: [
                          {
                            opciones: [],
                            correcta: ''
                          }
                        ]
                      })
                      setLineas(lineas2)
                    }}
                >
                    Agregar linea
                </Button>

                <Button>
                    Texto
                </Button>

                <Button>
                    Combo
                </Button>

            </HStack>

            <VStack>
                {
                    Lineas.map(x => {
                      return (<>
                            <Card height={20} width={10} border={'solid'}>

                            </Card>
                        </>)
                    })
                }
            </VStack>

        </div >
  )
}

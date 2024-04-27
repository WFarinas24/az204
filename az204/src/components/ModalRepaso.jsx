import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Switch, VStack } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { CantidadFavoritos, CantidadPreguntasTotales, CantidadPreguntasTotalesConImagenes, GenerarExamen, GenerarRepaso } from '../services/servicios'

export const ModalRepaso = ({ isOpen, onOpen, onClose, actualizarTabla }) => {
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const [inputs, setInputs] = useState({
    cantidad: 20,
    inicio: 0,
    incluirImagenes: false,
    aleatorio: false,
    favoritos: false
  })
  const [totalPreguntas, settotalPreguntas] = useState(100)
  const [totalFavs, settotalFavs] = useState(0)

  useEffect(() => {
    settotalPreguntas(CantidadPreguntasTotales())
  }, [])

  useEffect(() => {
    settotalPreguntas(!inputs.incluirImagenes ? CantidadPreguntasTotales() : CantidadPreguntasTotalesConImagenes())
    settotalFavs(CantidadFavoritos())
  }, [inputs])

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Configurar</ModalHeader>
          <ModalCloseButton />
          <form action="#" onSubmit={(e) => {
            e.preventDefault()
            GenerarRepaso({ cantidad: inputs.cantidad, inicio: inputs.inicio, imagenes: inputs.incluirImagenes, aleatorio: inputs.aleatorio, favoritos: inputs.favoritos })
            actualizarTabla()
            onClose()
          }}>
            <ModalBody pb={6}>

              <FormControl>
                <FormLabel>Cantidad de preguntas</FormLabel>
                <Input type='number' min={5} ref={initialRef} onChange={(e) => setInputs({ ...inputs, cantidad: parseInt(e.target.value) })} value={inputs.cantidad} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Pregunta de inicio (maximo {totalPreguntas - inputs.cantidad})</FormLabel>
                <Input type='number' min={0} max={totalPreguntas - inputs.cantidad} onChange={(e) => setInputs({ ...inputs, inicio: parseInt(e.target.value) })} value={inputs.inicio} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Incluir imagenes?</FormLabel>
                <Switch onChange={(e) => {
                  setInputs({
                    ...inputs,
                    incluirImagenes: e.target.checked
                  })
                }} size='lg' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Generar orden aleatorio?</FormLabel>
                <Switch onChange={(e) => {
                  setInputs({
                    ...inputs,
                    aleatorio: e.target.checked
                  })
                }} size='lg' />
              </FormControl>

              {totalFavs > 0 &&
                < FormControl mt={4}>
                  <FormLabel>Solo Favoritos {totalFavs}? </FormLabel>
                  <Switch onChange={(e) => {
                    setInputs({
                      ...inputs,
                      favoritos: e.target.favoritos,
                      cantidad: parseInt(totalFavs)
                    });

                  }} size='lg' />
                </FormControl>
              }

            </ModalBody>

            <ModalFooter>
              <Button type='submit' colorScheme='blue' mr={3}>
                Continuar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal >
    </>
  )
}

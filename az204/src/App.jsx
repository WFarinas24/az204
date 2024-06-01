import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { router } from './router/router'
import {
  RouterProvider
} from 'react-router-dom'
import { Footer } from './components/Footer'
import { useStoreExamenes } from './services/storePreguntas'
import { ObtenerExamenes } from './services/servicios'

export default function App () {
  const update = useStoreExamenes((state) => state.updateExamenes)
  update(ObtenerExamenes())

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  )
}

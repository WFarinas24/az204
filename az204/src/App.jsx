import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { router } from './router/router'
import {
  RouterProvider,
} from "react-router-dom";
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      <Footer/>
    </ChakraProvider>
  )
}



import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { FaCheckCircle as CheckIcon } from "react-icons/fa";
import { ObtenerDatosImagenes } from "../services/servicios";
import { dataImagenes } from "../data/data-imagenes";
import { Footer } from "../components/Footer";

const features2 = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
];

const obtenerDatosPregunta = (id) => {
    const datos = dataImagenes.find(x => x.id == id)
    return datos;
};

export const ResultadoImagenes = () => {
  const [features, setfeatures] = useState([]);

  useEffect(() => {
    setfeatures(ObtenerDatosImagenes().map(x => {
        const data = obtenerDatosPregunta(x.id)

        return {
            id : data.id,
            title : data.pregunta,
            img : data.imgPregunta,
            text : `✅Correctas ${x.correctas} \n ❌Incorrectas ${x.incorrectas}`
        }
    }))


  }, []);

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Resultado</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>

      <Footer></Footer>
    </Box>
  );
};

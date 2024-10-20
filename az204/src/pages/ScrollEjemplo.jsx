import React from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  ChakraProvider,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { dataImagenes } from "../data/data-imagenes";
import { ContendoresDropables } from "../components/DropsComponent/ContendoresDropables";
import { Footer } from "../components/Footer";

export const ScrollEjemplo = () => {
  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState({});
  const [NewData, setNewData] = useState([]);
  const [numPregunta, setNumPregunta] = useState(0);
  const [pregunta, setPregunta] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const EsRespuestaValida = () => {
    const selected = NewData[1]?.items?.map((x) => x.id) ?? [];
    console.log(selected);

    if (selected.join("") == pregunta.respuestaCorrecta) {
      toast({
        position: "top",
        title: "Correcto.",
        description: "Respuesta correcta",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top",
        title: "Incorrecto.",
        description: "Respuesta incorrecta",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      onOpen();
      return;
    }
    setNumPregunta(numPregunta + 1);
  };

  const dragQueen = (result) => {
    const { destination, draggableId, source, type } = result;

    console.log( { destination, draggableId, source, type, NewData} )

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if ("group" === type) {
        const sourceIndex = source.index;
        const targetIndex = destination.index;
        const workValue = items?.slice();
        const [deletedItem] = workValue.splice(sourceIndex, 1);
        workValue.splice(targetIndex, 0, deletedItem);
        
      buildAndSave();
      return;
    }

    const sourceDroppableIndex = groups[source.droppableId];
    const targetDroppableIndex = groups[destination.droppableId];
    const sourceItems = items[sourceDroppableIndex].items.slice();

    const targetItems =
      source.droppableId !== destination.droppableId
        ? items[targetDroppableIndex].items.slice()
        : sourceItems;

    const [deletedItem] = sourceItems.splice(source.index, 1);

    targetItems.splice(destination.index, 0, deletedItem);
    const workValue = items.slice();

    workValue[sourceDroppableIndex] = {
      ...items[sourceDroppableIndex],
      items: sourceItems,
    };

    workValue[targetDroppableIndex] = {
      ...items[targetDroppableIndex],
      items: targetItems,
    };

    setItems(workValue);
    setNewData(workValue);
  };

  function buildAndSave() {
    const _groups = {};

    for (let i = 0; i < Object.keys(NewData).length; ++i) {
      const currentGroup = NewData[i];
      _groups[currentGroup.id] = i;
    }

    setItems(NewData);
    setGroups(_groups);
  }

  useEffect(() => {
    const mi_pregunta = dataImagenes
      .filter(
        (x) =>
          x.respuestas.length > 0 &&
          x.respuestaCorrecta.length > 1 &&
          typeof x.respuestas[0].label != "undefined"
      )
      .sort(() => Math.random() - 0.5)[numPregunta];

    const mockData = [
      {
        id: "af1",
        label: "Opciones",
        items: mi_pregunta?.respuestas
          ?.sort(() => Math.random() - 0.5)
          .map((x) => {
            return { id: x.value, label: x.label };
          }),
      },
      {
        id: "af4",
        label: "Respuestas",
        items: [],
      },
    ];

    setPregunta(mi_pregunta);
    setNewData(mockData);
  }, [numPregunta]);

  useEffect(() => {
    buildAndSave();
  }, [NewData]);

  return (
    <ChakraProvider>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Respuestas correctas
            <Divider></Divider>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDir={"column"}>
            {pregunta?.respuestaCorrecta?.split("").map((x, index) => {
              return (
                <VStack
                  colorScheme="green"
                  wordBreak={"break-word"}
                  m={2}
                  key={x}
                  flexDir={"row"}
                  justifyContent={"start"}
                >
                  <Badge>{index + 1}. </Badge>

                  <Text>
                    {pregunta?.respuestas?.find(function (d) {
                      const valor = d.value == x;
                      return valor;
                    }).label ?? "no encontrado"}
                  </Text>
                </VStack>
              );
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Card p={8}>
        <Card
          border={"1px solid #ecf0f1"}
          backgroundColor={"whitesmoke"}
          p={4}
          m={4}
        
          borderRadius={10}
          position={"relative"}
        >
          {pregunta?.pregunta?.split("\n").map((x, index) => {
            return (
                <Text key={index}>{x}</Text>
            );
          })}
        </Card>

        <Box>
          <Box>
            <Box style={{ display: "flex", flexWrap: "wrap" }}>Pregunta</Box>
          </Box>

          <Card>
            <HStack m={3} display={"Flex"} justifyContent={"center"}>
              <Button
                colorScheme={numPregunta > 0 ? "green" : "white"}
                onClick={() => {
                  setNumPregunta((numPregunta > 0 ? numPregunta : 1) - 1);
                }}
              >
                Anterior
              </Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  EsRespuestaValida();
                }}
              >
                Siguiente
              </Button>
            </HStack>
          </Card>
        </Box>

        <ContendoresDropables
          setNewData={setNewData}
          setGroups={setGroups}
          numPregunta={numPregunta}
          NewData={NewData}
          items={items}
          setItems={setItems}
          groups={groups}
          dragQueen={dragQueen}
        />
      </Card>

      <Footer/>
    </ChakraProvider>
  );
};

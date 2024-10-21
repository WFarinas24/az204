import React from "react";
import {
  Box,
  Button,
  Card,
  ChakraProvider,
  HStack,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ContendoresDropables } from "../components/DropsComponent/ContendoresDropables";
import { Footer } from "../components/Footer";
import {
  ActualizarDatosImagenes,
  ObtenerPreguntasAleatoriasImagenes,
} from "../services/servicios";
import { ModalRespuestasCorrectas } from "../components/modals/ModalRespuestasCorrectas";
import { useNavigate } from "react-router-dom";

const _listaPreguntas = ObtenerPreguntasAleatoriasImagenes();

export const ScrollEjemplo = () => {
  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState({});
  const [NewData, setNewData] = useState([]);
  const [numPregunta, setNumPregunta] = useState(0);
  const [pregunta, setPregunta] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigator = useNavigate();
  const toast = useToast();

  const EsRespuestaValida = () => {
    console.log(pregunta);

    const selected = NewData[1]?.items?.map((x) => x.id) ?? [];
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

      ActualizarDatosImagenes(pregunta.id, false);
      window.scrollTo({ top: 0, behavior: 'smooth' })

      onOpen();
      return;
    }
    
    ActualizarDatosImagenes(pregunta.id, true);
    setNumPregunta(numPregunta + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const dragQueen = (result) => {
    const { destination, draggableId, source, type } = result;

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
    if (numPregunta == _listaPreguntas.length) {
      navigator("/resultadoImagen");
    }

    const mi_pregunta = _listaPreguntas[numPregunta];
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
      <ModalRespuestasCorrectas
        isOpen={isOpen}
        onClose={onClose}
        pregunta={pregunta}
      />

      <Card p={8}>
        <Text>
          {numPregunta + 1}/{_listaPreguntas.length}
        </Text>
        <Card
          border={"1px solid #ecf0f1"}
          backgroundColor={"whitesmoke"}
          p={4}
          m={4}
          borderRadius={10}
          position={"relative"}
        >
          {pregunta?.pregunta?.split("\n").map((x, index) => {
            return <Text key={index}>{x}</Text>;
          })}

          {pregunta?.imgPregunta?.length > 0 ? (
            <Box m={"auto"}>
              <Image
                w={500}
                src={pregunta.imgPregunta}
                fallbackSrc="./pato-loading.gif"
              />
            </Box>
          ) : null}
        </Card>

        <Box>
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
      <Box>
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
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Siguiente
          </Button>
        </HStack>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

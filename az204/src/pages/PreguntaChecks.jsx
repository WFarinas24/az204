import React, { useEffect, useState } from "react";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { dataImagenes } from "../data/data-imagenes";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
const icons = {
  moveToAvailable: <MdOutlineKeyboardArrowLeft />,
  moveAllToAvailable: [<MdOutlineKeyboardDoubleArrowLeft key={1} />],
  moveToSelected: <MdOutlineKeyboardArrowRight />,
  moveAllToSelected: [<MdOutlineKeyboardDoubleArrowRight key={1} />],
  moveDown: <MdOutlineKeyboardArrowDown />,
  moveUp: <MdOutlineKeyboardArrowUp />,
  moveTop: <MdOutlineKeyboardDoubleArrowUp />,
  moveBottom: <MdOutlineKeyboardDoubleArrowDown />,
};

export const PreguntaChecks = () => {
  const [selected, setSelected] = useState([]);
  const [numPregunta, setnumPregunta] = useState(0);
  const [correctas, setCorrectas] = useState(0);
  const [incorrectas, setIncorrectas] = useState(0);
  const [pregunta, setPregunta] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const EsRespuestaValida = () => {
    if (selected.join("") == pregunta.respuestaCorrecta) {
      setCorrectas(correctas + 1);

      toast({
        position: "top",
        title: "Correcto.",
        description: "Respuesta correcta",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      console.log(
        "pregunta ",
        pregunta?.respuestas
          .filter((x) => pregunta.respuestaCorrecta.includes(x.value))
          .map((x) => x.label)
      );

      setIncorrectas(incorrectas + 1);
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
    setnumPregunta(numPregunta + 1);
  };

  useEffect(() => {
    setSelected([]);
    setPregunta(
      dataImagenes.filter(
        (x) => x.respuestas.length > 1 && x.respuestaCorrecta.length > 1
      )[numPregunta]
    );
  }, [numPregunta]);

  return (
    <Card margin={4}>
      <CardHeader>
        <Card
          border={"1px solid #A0AEC0"}
          backgroundColor={"whitesmoke"}
          p={4}
          borderRadius={10}
          position={"relative"}
        >
          {pregunta?.pregunta?.split("\n").map((x, index) => {
            return (
              <>
                <Text key={index}>{x}</Text>
              </>
            );
          })}
        </Card>
      </CardHeader>

      <CardBody m={4}>
        <DualListBox
          icons={icons}
          preserveSelectOrder={true}
          showOrderButtons={true}
          options={pregunta?.respuestas?.sort(() => Math.random() - 0.5) ?? []}
          selected={selected}
          onChange={(newValue) => setSelected(newValue)}
        />
        <Spacer></Spacer>

        <Box margin={4} display={"flex"} justifyContent={"end"}>
          <Button
            onClick={() => {
              setnumPregunta((numPregunta > 0 ? numPregunta : 1) - 1);
            }}
            colorScheme="green"
          >
            Volver
          </Button>
          <Spacer></Spacer>
          <Button
            onClick={() => {
              toast({
                position: "top",
                title: "Total.",
                description: `Correctas : ${correctas}, incorrectas : ${incorrectas}`,
                status: "success",
                duration: 2000,
                isClosable: true,
              });
            }}
            colorScheme="green"
          >
            Terminar
          </Button>

          <Spacer></Spacer>
          <Button
            onClick={() => {
              EsRespuestaValida();
            }}
            colorScheme="green"
          >
            Siguiente
          </Button>
        </Box>
      </CardBody>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Respuestas correctas
          <Divider></Divider>

          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {pregunta?.respuestas
              .filter((x) => pregunta.respuestaCorrecta.includes(x.value))
              .map((x) => {
                return (<Text>
                    *{x.label}
                </Text>)
              })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};

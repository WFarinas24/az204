import {
  Card,
  CardBody,
  CheckboxGroup,
  Stack,
  Checkbox,
  Table,
  Th,
  Thead,
  TableContainer,
  TableCaption,
  Tr,
  Tbody,
  Td,
  RadioGroup,
  Radio,
  CardHeader,
  CardFooter,
  Button,
  Spacer,
  WrapItem,
  Text,
  Center,
  ListItem,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useEstadoGlobal } from "../services/storePreguntas";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
export const PreguntaChecks = () => {
  const todoItems = [
    "Schedule perm",
    "Rewind VHS tapes",
    "Make change for the arcade",
    "Get disposable camera developed",
    "Learn C++",
    "Return Nintendo Power Glove",
  ];
  const doneItems = ["Pickup new mix-tape from Beth"];

  const [todoList, todos] = useDragAndDrop(todoItems, { group: "todoList" });
  const [doneList, dones] = useDragAndDrop(doneItems, { group: "todoList" });

  const lista = useEstadoGlobal((x) => x.preguntasImanges);
  const updatePreguntas = useEstadoGlobal((x) => x.updatePreguntas);

  const preguntaActual = useEstadoGlobal((x) => x.preguntaActual);
  const updatePreguntaActual = useEstadoGlobal((x) => x.updatePreguntaActual);

  useEffect(() => {
    updatePreguntas();
    updatePreguntaActual(0);
    console.log(lista);
  }, []);

  return (
    <Card mt={10}>
      <Center>
        <Text fontWeight={"bold"}>Pregunta</Text>
      </Center>
      <CardHeader>
        <Card p={2}>{lista[preguntaActual ?? 0]?.pregunta}</Card>
      </CardHeader>
      <CardBody marginX={10}>
        <Card gap={2} display={"flex"} flexWrap={"wrap"} direction={"row"} className="kanban-board">
          <Card minHeight={200} minW={200} flex={1} ref={todoList}>
            {todos.map((todo) => (
              <li className="kanban-item" key={todo}>
                {todo}
              </li>
            ))}
          </Card>
          <Card minHeight={200} minW={200} flex={1} ref={doneList}>
            {dones.map((done) => (
              <Box  className="kanban-item" key={done}>
                {done}
              </Box>
            ))}
          </Card>
        </Card>
      </CardBody>

      <CardFooter marginRight={20}>
        <Spacer />
        <Button marginRight={5} colorScheme="blue">
          Anterior
        </Button>
        <Button colorScheme="blue">Siguiente</Button>
      </CardFooter>
    </Card>
  );
};

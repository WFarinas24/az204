import React from "react";
import {
  Box,
  Button,
  Card,
  ChakraProvider,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { dataImagenes } from "../data/data-imagenes";

const DATA = [
  {
    id: "af1",
    label: "Opciones",
    items: [
      { id: "af2", label: "Item 1" },
      { id: "af3", label: "Item 2" },
      { id: "af5", label: "Item 1" },
      { id: "af6", label: "Item 2" },
    ],
    tint: 1,
  },
  {
    id: "af4",
    label: "Respuestas",
    items: [],
    tint: 2,
  },
];

export const ScrollEjemplo = () => {
  return (
    <ChakraProvider>
      <Box className="layout__wrapper">
        <Box className="layout__header">
          <Box className="app-bar">
            <Box className="app-bar__title">Pregunta</Box>
          </Box>
        </Box>
        <LeadsOverview />
      </Box>
    </ChakraProvider>
  );
};

function LeadsOverview() {
  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState({});

  const [NewData, setNewData] = useState([]);
  const [numPregunta, setNumPregunta] = useState(0);

  useEffect(() => {
    // Mock an API call.
    setNewData([
      {
        id: "af1",
        label: "opciones",
        items: dataImagenes[numPregunta]?.respuestas?.map((x) => {
          return { id: x.value, label: x.label };
        }),
      },
      {
        id: "af4",
        label: "Respuestas",
        items: [],
      },
    ]);
    buildAndSave(NewData);
  }, [numPregunta]);

  function buildAndSave(items) {
    const groups = {};

    for (let i = 0; i < Object.keys(items).length; ++i) {
      const currentGroup = items[i];
      groups[currentGroup.id] = i;
    }

    // Set the data.
    setItems(items);
    setGroups(groups);
  }

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
      const workValue = items.slice();
      const [deletedItem] = workValue.splice(sourceIndex, 1);
      workValue.splice(targetIndex, 0, deletedItem);
      buildAndSave(workValue);
      return;
    }

    const sourceDroppableIndex = groups[source.droppableId];
    const targetDroppableIndex = groups[destination.droppableId];
    const sourceItems = items[sourceDroppableIndex].items.slice();
    const targetItems =
      source.droppableId !== destination.droppableId
        ? items[targetDroppableIndex].items.slice()
        : sourceItems; // Pull the item from the source.
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
  };

  return (
    <Card>
      <Card margin={3} display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
        <DragDropContext onDragEnd={dragQueen}>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <Box
                display={"flex"}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items.map((item, index) => (
                  <Draggable draggableId={item.id} key={item.id} index={index}>
                    {(provided) => (
                      <Box
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <DroppableList key={item.id} {...item} />
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Card>

      <HStack my={3} display={"Flex"} justifyContent={"space-between"}>
        <Button>Siguiente</Button>
        <Button>Anterior</Button>
      </HStack>
    </Card>
  );
}
const DroppableList = function DroppableList({ id, items, label, tint }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <Box
          marginLeft={10}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <Box
            minH={400}
            minW={400}
            border={1}
            borderColor={"black"}
            borderStyle={"solid"}
            className={`holder`}
          >
            <Box
              flex={1}
              border={1}
              borderColor={"black"}
              borderStyle={"solid"}
              className="holder__title"
            >
              {" "}
              {label}{" "}
            </Box>
            <Box className="holder__content">
              <ul className="list">
                {items.map((item, index) => (
                  <li
                    style={{
                      margin: "4px",
                      border: "1px solid gray",
                      textDecoration: "none",
                      listStyle: "none",
                      padding: "6px",
                    }}
                    className="list__item"
                    key={item.id}
                  >
                    <Draggable draggableId={item.id} index={index}>
                      {(provided) => (
                        <Box
                          className="card"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {item.label}
                        </Box>
                      )}
                    </Draggable>
                  </li>
                ))}
                {provided.placeholder}
              </ul>
            </Box>
          </Box>
        </Box>
      )}
    </Droppable>
  );
};

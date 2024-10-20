/* eslint-disable react/prop-types */
import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { dataImagenes } from "../data/data-imagenes";
import { ContendoresDropables } from "../components/DropsComponent/ContendoresDropables";

export const ScrollEjemplo = () => {
  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState({});
  const [NewData, setNewData] = useState([]);
  const [numPregunta, setNumPregunta] = useState(0);

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

  function buildAndSave() {
    const _groups = {};

    for (let i = 0; i < Object.keys(NewData).length; ++i) {
      const currentGroup = NewData[i];
      _groups[currentGroup.id] = i;
    }
    console.log(_groups);
    // Set the data.
    setItems(NewData);
    setGroups(_groups);
  }

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

    buildAndSave();
  }, []);

  return (
    <ChakraProvider>
      <Box className="layout__wrapper">
        <Box className="layout__header">
          <Box className="app-bar">
            <Box style={{ display: "flex", flexWrap: "wrap" }}>Pregunta</Box>
          </Box>
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
      </Box>
    </ChakraProvider>
  );
};

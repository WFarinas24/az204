/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Box, Button, Card, HStack } from "@chakra-ui/react";
import { DragDropContext } from "@hello-pangea/dnd";
import { DroppableList } from "./DroppableList";

export const ContendoresDropables = ({
  setNewData,
  setGroups,
  numPregunta,
  NewData,
  items,
  setItems,
  groups,
  dragQueen,
}) => {
  useEffect(() => {}, []);

  return (
    <Card margin={3} display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
      <DragDropContext onDragEnd={dragQueen}>
        <HStack wrap={"wrap"}>
          {items?.map((item, index) => (
              <DroppableList key={item.id} {...item} />
          ))}
        </HStack>
      </DragDropContext>
    </Card>
  );
};

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
    <Card>
      <Card margin={3} display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
        <DragDropContext onDragEnd={dragQueen}>
          <Box>
            <Box display={"flex"} flexWrap={"wrap"}>
              {items?.map((item, index) => (
                <Box display={"flex"} flexWrap={"wrap"} key={item.id}>
                  <Box key={item.id}>
                    <DroppableList key={item.id} {...item} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </DragDropContext>
      </Card>
    </Card>
  );
};

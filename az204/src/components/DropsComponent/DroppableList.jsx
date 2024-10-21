/* eslint-disable react/prop-types */
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import React from "react";

// Opciones que se pueden mover
export const DroppableList = ({ id, items, label }) => {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot1) => (
        <VStack
          alignItems={"center"}
          minH={400}
          minW={300}
          {...provided.droppableProps}
          ref={provided.innerRef}
          border={1}
          borderColor={"#bdc3c7"}
          borderStyle={"solid"}
          bgColor={snapshot1.isDraggingOver ? "#1abc9c" : ""}
        >
          <Text>{label}</Text>

          <Box className="list" style={{ width: "100%", justifyContent:"center" }} >
            {items?.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <Box
                    style={{
                      opacity: snapshot.isDragging ? 0.9 : 1,
                      margin: "2px",
                      border: "1px solid gray",
                      textDecoration: "none",
                      listStyle: "none",
                      padding: "6px",
                      //   minWidth: "278px",
                      background: "#ecf0f1",
                      borderStyle: snapshot.isDragging ? "dotted" : "solid",
                      borderWidth: snapshot.isDragging ? "3px" : "1px",
                      height: snapshot.isDragging ? "40px" : "auto",
                      //   width: "100%",
                      borderRadius: "4px",
                    }}
                    key={item.id}
                  >
                    <Box
                      userSelect={"none"}
                      className="card"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.label}
                    </Box>
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        </VStack>
      )}
    </Droppable>
  );
};

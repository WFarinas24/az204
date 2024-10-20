/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import React from "react";

// Opciones que se pueden mover
export const DroppableList = ({ id, items, label }) => {
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
            borderColor={"#bdc3c7"}
            borderStyle={"solid"}
            className={`holder`}
          >
            <Box
              flex={1}
              border={1}
              borderColor={"#bdc3c7"}
              borderStyle={"solid"}
              className="holder__title"
            >
              {" "}
              {label}{" "}
            </Box>
            <Box className="holder__content">
              <ul className="list">
                {items?.map((item, index) => (
                  <Draggable key={index} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <li
                        style={{
                          margin: "4px",
                          border: "1px solid gray",
                          textDecoration: "none",
                          listStyle: "none",
                          padding: "6px",
                          width: "400px",
                          background: "#ecf0f1",
                          borderStyle: snapshot.isDragging ? "dotted" : "solid",
                          borderWidth: snapshot.isDragging ? "3px" : "1px",
                          height: snapshot.isDragging ? "40px" : "auto",

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
                      </li>
                    )}
                  </Draggable>
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

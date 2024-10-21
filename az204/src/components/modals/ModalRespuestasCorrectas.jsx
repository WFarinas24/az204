/* eslint-disable react/prop-types */
import {
  Badge,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const ModalRespuestasCorrectas = ({ isOpen, onClose, pregunta }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      size={"xl"}
    >
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
          <Button colorScheme="green" mr={3} onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

import React from "react";
import {
  Container,
  HStack,
  Tag,
  TagLabel,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
export const Footer = () => {
  return (
    <VStack
      marginLeft={"auto"}
      marginRight={10}
      alignItems={"end"}
      mt={50}
      color={"black"}
      width={"max-content"}
    >
      <Tag
        position={"fixed"}
        right={10}
        bottom={10}
        size={"lg"}
        colorScheme="gray"
        borderRadius="full"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <TagLabel userSelect={"none"}>
          {" "}
          <FaArrowUp></FaArrowUp>{" "}
        </TagLabel>
      </Tag>

      <Tooltip hasArrow label="Inicio">
        <Tag
          as={Link}
          to={"/"}
          size={"lg"}
          colorScheme="gray"
          borderRadius="full"
        >
          <TagLabel userSelect={"none"}>Ir al inicio</TagLabel>
        </Tag>
      </Tooltip>
    </VStack>
  );
};

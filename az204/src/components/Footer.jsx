import React from "react";
import { Container, Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container mt={50} color={"black"} width={"max-content"}>
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
    </Container>
  );
};

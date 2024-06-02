import React from 'react'
import { Avatar, Container, Tag, TagLabel, Tooltip } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
        <Container mt={50} color={'black'} width={'max-content'}>

            <Tooltip hasArrow label='Inicio'>

                    <Tag size={'lg'} colorScheme='gray' borderRadius='full'>
                       

                        <TagLabel as={Link} to="/">Ir al inicio</TagLabel>

                    </Tag>
            </Tooltip>
        </Container>
  )
}

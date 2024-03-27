import React from 'react'
import { Avatar, Container, Tag, TagLabel, Tooltip } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <Container my={50} color={"black"} width={'max-content'}>

            <Tooltip hasArrow label='Haz click aqui para enviarme un correo'>
                <a href="mailto:wfarinasg@gmail.com">

                    <Tag size={"lg"} colorScheme='gray' borderRadius='full'>
                        <Avatar
                            src='https://bit.ly/sage-adeb2ayo'
                            size='xs'
                            name='William Farinas'
                            ml={-1}
                            mr={2}
                        />

                        <TagLabel>Developed by William Farinas</TagLabel>

                    </Tag>
                </a>
            </Tooltip>
        </Container>
    )
}

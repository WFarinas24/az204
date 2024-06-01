import { Box, Button, Card, CardBody, CardHeader, Center, Container, Image, Text, list } from "@chakra-ui/react"
import { useStoreExamenes } from "../services/storePreguntas"
import { data } from "../data/data-examen"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ListaFavoritos } from "../services/servicios";


export const Estudiar = () => {

    const [soloFav, setSoloFav] = useState(true)
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        const lista = ListaFavoritos()
        if (!lista.length){
            setSoloFav(false)
        }

        setFavoritos(lista)
    }, [])
    
    const filtrar = (preg) =>{

        if(soloFav){
            return favoritos.includes(preg.id)
        }

        return true
    }
    return <>
  <Container maxW='4xl'>

    {data.filter((x) => filtrar(x)).map( (x, index1) => {
        return <Card key={index1} my={4}>

            <CardHeader textAlign={"center"}>
                <Text mb={3} textAlign={"left"} backgroundColor={"whitesmoke"} p={2} borderRadius={5}>
                    {x.pregunta?.split('\n')?.map( (text2, index3) => {
                        return (<>
                        <Text mt={2} key={index3}>{text2}</Text>
                        </>
                        )
                    })}
                    <Text fontStyle={"italic"}>({x.id})</Text>
                </Text>

               {
                x.imgPregunta &&
                   <LazyLoadImage
                   key={index1}
                   src={x.imgPregunta}
                   alt={`Image Alt-${12}`}
                   className="img-lazy"
                   width={500}
                   placeholderSrc={"./loaders.svg"}
                   effect='blur' // opacity | black-and-white
                   />
                } 
            </CardHeader>

            <CardBody>
                {x.respuestas.map( (pre, index) => {
                return (
                     <Box key={index} border={"solid"} borderWidth={1} backgroundColor={ x.respuestaCorrecta.includes(pre?.slice(0,1)) ? "green.200": "white"} borderColor={ x.respuestaCorrecta.includes(pre?.slice(0,1)) ? "green.900": "black"} my={1} borderRadius={4} p={2} mx={2}>
                        <Text fontWeight={x.respuestaCorrecta.includes(pre?.slice(0,1)) ?  "bold" : "normal"}>{pre?.slice(2)}</Text>
                    </Box>)
                })}

                {x.imgRespuesta && 
                <Box textAlign={"center"}>
                <Text  fontWeight={"bold"}>Respuesta</Text>
                <LazyLoadImage
                key={index1}
                src={x.imgRespuesta}
                alt={`Image Alt-${12}`}
                className="img-lazy"
                width={500}
                placeholderSrc={"./loaders.svg"}
                effect='blur' // opacity | black-and-white
                />
                </Box>
             }
            </CardBody>
        </Card>
    })}

    <Button leftIcon={<FaArrowLeft/>} as={Link} to={"/"} colorScheme="blue" bottom={10} right={10} position={"fixed"}>
        Volver
    </Button>

    <Button onClick={()=> {setSoloFav(!soloFav)}} colorScheme={soloFav ? "orange" : "green"}  bottom={90} right={10} position={"fixed"}>
        {!soloFav ? "Ver solo favoritos" : "Ver todas las preguntas"}
    </Button>

  </Container>
  </>
}
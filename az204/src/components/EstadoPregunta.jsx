import { Box, HStack, Text, Tooltip } from "@chakra-ui/react"
import { FaFireAlt } from "react-icons/fa"
import { MdOutlineFiberNew } from "react-icons/md";
export const EstadoPregunta = ({ esFavorito, pregunta: { incorrectas, correctas } }) => {
    console.log(incorrectas, correctas)
  return (
        <>
            {esFavorito && incorrectas > (correctas + 2) &&
                <Box position={'absolute'} color={'orange'} right={2} top={'-60px'} textAlign={'center'} >
                    <FaFireAlt style={{ zIndex: 9999 }} size={32} />
                    <Text fontWeight="bold">{incorrectas}</Text>
                </Box>
            }
            {!esFavorito && incorrectas == 0 && (correctas == 0) &&
                <Box backgroundColor={"green.100"} borderRadius={10} py={0} my={0} position={'absolute'} color={'green'} right={2} top={'-60px'} textAlign={'center'} >
                    <MdOutlineFiberNew style={{ zIndex: 9999 }} size={42} />
                </Box>
            }

            {!esFavorito && (incorrectas != 0 || (correctas != 0)) &&
            <Tooltip label={`Total correctas : ${correctas} - incorrectas : ${incorrectas}`}>
                <HStack display={{ sm: 'none', md: 'block' }}  backgroundColor={"orange.100"} borderRadius={10} py={0} my={0} position={'absolute'} color={'green'} right={2} top={'-60px'} textAlign={'center'} >
                    <Text mx={2} fontSize={"32px"} fontWeight="bold">🥳{correctas}</Text>
                    <Text mx={2} fontSize={"32px"} fontWeight="bold">/😖{incorrectas}</Text>
                </HStack>

            </Tooltip>
            }


        </>
  )
}

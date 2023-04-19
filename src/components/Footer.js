import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend, AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <div>
      <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading size={"md"} textTransform={'uppercase'} textAlign={"center"}>
                    Join the Community to get Updates
                </Heading>
                <HStack
                    borderBottom={"2px solid white"}
                    py={"2"}
                >
                    <Input placeholder='Enter Email Here...' border={"none"} borderRadius={"none"} outline={"none"}
                    focusBorderColor={"none"}/>

                    <Button
                        p={"0"}
                        colorScheme={"purple"}
                        variant={"ghost"}
                        borderRadius={"0 20px 20px 0"}

                    >
                        <AiOutlineSend size={"20"}/>
                    </Button>
            </HStack>
            </VStack>
            <br />
            <VStack w={"full"} borderLeft={["none", "2px solid white"]} borderRight={["none", "2px solid white"]}>
                <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"} borderBottom={"2px solid white"}>VideoXpress</Heading>
                <Text>All rights recieved</Text>
            </VStack>
            <br />
            <VStack w={"full"} >
                
                <Heading size={"sm"} textTransform={"uppercase"} borderBottom={"2px solid white"} >Handles</Heading> 
                <HStack>
                <Button variant={"link"} colorScheme={"whiteAlpha"} p={"0"} borderRadius={"0 20px 20px 0"} >
                    <a href="https://github.com/ShivanshMehtaa"> <AiFillGithub size={"40"}/></a>
                </Button>
                <Button variant={"link"} colorScheme={"whiteAlpha"} p={"0"} borderRadius={"0 20px 20px 0"} >
                    <a href="https://www.instagram.com/_shivansh.mehta_/"> <AiFillInstagram size={"40"}/></a>
                </Button>
                <Button variant={"link"} colorScheme={"whiteAlpha"} p={"0"} borderRadius={"0 20px 20px 0"} >
                    <a href="https://linkedin.com//ShivanshMehtaa"> <AiFillLinkedin size={"40"}/></a>
                </Button>
                </HStack>
            </VStack>
            

        </Stack>

      </Box>
    </div>
  )
}

export default Footer

import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%, -50%)",
  textTransform:"uppercase",
  p:'4',
  size:"4xl"

}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} p={'16'} maxW={'container.xl'} >
          <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>Services</Heading>
          <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={['column','row']}
          >
            <Img src={img5} filter={"hue-rotate(-130deg)"} h={["40", "400"]}/>
            <Text letterSpacing={'wider'} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestiae! Mollitia in soluta tempore corporis obcaecati odit similique consequuntur quo dolore quae praesentium at, sed maxime, id saepe, vel a inventore. Ducimus autem, officiis aliquam veritatis obcaecati commodi repellat dolor nihil iure ipsa ut officia optio sapiente nam eius et! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo alias laboriosam repellat voluptatum sequi, minima pariatur asperiores rerum consequuntur officiis doloremque eos similique, tenetur sapiente magnam. Itaque dicta ut tempora?
            </Text>

          </Stack>
      </Container>
    </Box>
  );
};

export default Home;

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1500}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={"100%"} h={"100vh"}>
      <Img src={img1}/>
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} >
        Watch the Future
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Img src={img2}/>
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Img src={img3}/>
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
        Enter The Matrix
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Img src={img4}/>
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

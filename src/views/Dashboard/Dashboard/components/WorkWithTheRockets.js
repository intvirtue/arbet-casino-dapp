// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Portal,
  Spacer,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";

const WorkWithTheRockets = ({ title, description, backgroundImage }) => {
  const overlayRef = React.useRef();
  return (
    <Card maxHeight='280px' p='1rem'>
      <CardBody
        p='0px'
        backgroundImage={backgroundImage}
        bgPosition='center'
        bgRepeat='no-repeat'
        w='100%'
        h={{ sm: "200px", lg: "100%" }}
        bgSize='cover'
        position='relative'
        borderRadius='15px'>
        <Box
          bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'
          w='100%'
          position='absolute'
          h='inherit'
          borderRadius='inherit'
          ref={overlayRef}></Box>
        <Portal containerRef={overlayRef}>
          <Flex
            flexDirection='column'
            color='white'
            p='1.5rem 1.2rem 0.3rem 1.2rem'
            lineHeight='1.6'>
            <Text fontSize='xl' fontWeight='bold' pb='.3rem'>
              {title}
            </Text>
            <Text fontSize='sm' fontWeight='normal' w={{ lg: "92%" }}>
              {description}
            </Text>
            <Spacer />
          </Flex>
        </Portal>
      </CardBody>
    </Card>
  );
};

export default WorkWithTheRockets;

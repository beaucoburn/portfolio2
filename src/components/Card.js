import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <Box 
        backgroundColor="white"
        maxW="sm"  
        borderRadius="lg"
      >
        <Image 
          src={imageSrc} 
          alt={title}
          borderRadius="lg" 
        />
        <VStack
          alignItems="baseline"
          padding="2.5"
        >
          <Heading 
            color="black" 
            justify="right"
            fontSize="sm"
          >
            {title}
            </Heading>
          <Text 
            color="gray"
            fontSize="xs"
          >
            {description}
            </Text>
          <HStack>
            <Text 
              color="black" 
              fontSize="xs"
            >
              See more
              </Text>
            <FontAwesomeIcon 
              icon={faArrowRight} 
              color="black" 
              size="lg" 
            />
          </HStack>
        </VStack>
      </Box>
  );
};

export default Card;

import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import headshot from '../images/headshot.jpg'

const greeting = "Hello, I am Beau Coburn!";
const bio1 = "A Software Developer";
const bio2 = "specialized in React and Python";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2c698d"
  >
      <VStack>
        <Avatar size="2xl" my={16}name="Beau Coburn" src={headshot}/>
        <Heading size="2xl" my={8}>{greeting}</Heading>
        <Heading size="xl" my={8}>{bio1}</Heading>
        <Heading size="xl" my={8}>{bio2}</Heading>
      </VStack>
  </FullScreenSection>
);

export default LandingSection;

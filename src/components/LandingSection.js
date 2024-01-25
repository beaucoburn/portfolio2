import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

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
        <Avatar size="3xl" name="Beau Coburn" src="../images/aprilart.png"/>
        <Heading size="2xl">{greeting}</Heading>
        <Heading size="xl">{bio1}</Heading>
        <Heading size="xl">{bio2}</Heading>
      </VStack>
  </FullScreenSection>
);

export default LandingSection;

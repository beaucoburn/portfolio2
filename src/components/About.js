import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import { Heading, VStack, HStack, Text } from "@chakra-ui/react";
import ReactIcon from "./icons/ReactIcon";
import NextIcon from "./icons/NextIcon";
import TailwindIcon from "./icons/TailwindIcon";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";

function About() {
  return (
    <FullScreenSection
        backgroundColor="#bae8e8"
        py={16}
        spacing={8}
        id="about-section"
    >
        <VStack py={12}>
            <Heading>
              About Me
            </Heading>
            <Text>
              I am a frontend developer from the US. I have a passion for learning and creating.
            </Text>
        </VStack>
        <HStack>
            <ReactIcon />
            <NextIcon />
            <TailwindIcon />
            <HtmlIcon />
            <CssIcon />
        </HStack>
    </FullScreenSection>
  )
}

export default About;
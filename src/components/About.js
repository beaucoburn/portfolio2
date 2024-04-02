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

const icons = [
  {
    iconName: "ReactIcon",
    key: ReactIcon,
  },
  {
    iconName: "NextIcon",
    key: NextIcon,
  },
  {
    iconName: "TailwindIcon",
    key: TailwindIcon,
  },
  {
    iconName: "HtmlIcon",
    key: HtmlIcon,
  },
  {
    iconName: "CssIcon",
    key: CssIcon,
  },
]



function About() {
  return (
    <FullScreenSection
        backgroundColor="#bae8e8"
        py={16}
        spacing={8}
        id="about-section"
    >
        <VStack py={12}>
            <Heading py={8}>
              About Me
            </Heading>
            <Text py={8} px={60} size="xl">
            As a passionate Frontend Developer based in the United States, my expertise lies in crafting seamless and visually appealing web experiences. My primary focus revolves around utilizing cutting-edge technologies, with a strong proficiency in React and Next.js to build dynamic and responsive user interfaces. Leveraging the power of Tailwind CSS, I bring a keen eye for design and a commitment to creating intuitive and efficient user interfaces. With a deep understanding of web development principles and a penchant for staying abreast of the latest industry trends, I am dedicated to delivering high-quality, performance-driven applications that resonate with both clients and end-users. My journey as a Frontend Developer is characterized by a commitment to innovation, attention to detail, and a genuine passion for creating exceptional digital experiences.
            </Text>
        </VStack>
        <HStack>
            
        </HStack>
    </FullScreenSection>
  )
}

export default About;
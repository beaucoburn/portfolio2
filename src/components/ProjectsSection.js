import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "April Elizabeth E-Commerce NextJS App",
    description:
      "An E-Commerce app built with NextJS, React, Tailwind CSS, and Shopify's GraphQL API.",
    getImageSrc: () => require("../images/aprilart.png"),
    url: "https://april-art-22sh.vercel.app/"
  },
  {
    title: "Little Lemon Restaurant Reservation React App",
    description:
      "An addition to a restaurant reservation app built with React.",
    getImageSrc: () => require("../images/restaurantChef.jpg"),
    url: "https://little-lemon-rouge.vercel.app/"
  },
  {
    title: "Asteroids Game",
    description: "A simple Asteroids game built with Python and Pygame.",
    getImageSrc: () => require("../images/Asteroids.png"),
    url: "https://github.com/beaucoburn/Asteroids"
  },
  {
    title: "AI Agent",
    description:
      "A simple AI agent that can write code for you based on your prompts.",
    getImageSrc: () => require("../images/AIAgentProject.png"),
    url: "https://github.com/beaucoburn/AIAgent"
  },
  {
    title: "Book Bot",
    description: "A simple bot that can take a text file and give you the statistics of that file.",
    getImageSrc: () => require("../images/bookbot.png"),
    url: "https://github.com/beaucoburn/bookbot"
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#e3f6f5"
      p={8}
      alignItems="flex-start"
      spacing={8}
      id="projects-section"
    >
      <Heading as="h1" pt={16}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        pt={32}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

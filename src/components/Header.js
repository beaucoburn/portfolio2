import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: douglas.coburn@gmail.com",
    key: faEnvelope,
  },
  {
    icon: faGithub,
    url: "https://github.com/beaucoburn",
    key: faGithub,
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/beau-coburn-79bb14b/",
    key: faLinkedin,
  },
  {
    icon: faMedium,
    url: "https://medium.com/@douglas.coburn",
    key: faMedium,
  },
  {
    icon: faDev,
    url: "https://dev.to/beaucoburn",
    key: faDev,
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/13156654/beau",
    key: faStackOverflow,
  },
];



function Header() {

  const socialList = socials.map((socials) => {
    return (
        <a href={socials.url} alt="">
        <FontAwesomeIcon icon={socials.icon} size="2xl" style={{padding: "0.25em"}} />
        </a>
    );
  });

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
                {socialList}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a 
                href="/#projects-section" 
                alt="Projects"
                onClick={handleClick}
                >
                  Projects
                </a>
              <a 
                href="/#contactme-section" 
                alt="Contact Me"
                onClick={handleClick}
                >
                  Contact Me
                </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
}
export default Header;

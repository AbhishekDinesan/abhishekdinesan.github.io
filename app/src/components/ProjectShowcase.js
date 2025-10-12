import { Box, Heading, Text, VStack, HStack, Badge, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaGithub, FaCode } from "react-icons/fa";
import GitHubStats from "./GitHubStats";
import "../styles/ProjectShowcase.css";
import SideProjects from "../info/sideProjects.json";

const ProjectShowcase = () => {
  const ProjectCard = ({ project, index }) => {
    
    const handleClick = (e) => {
      if (project.link) {
        window.open(project.link, '_blank', 'noopener,noreferrer');
      }
    };
    
    return (
      <Box
        className="project-card"
        onClick={handleClick}
        padding={{ base: 4, md: 5 }}
        borderRadius="xl"
        bg="bg.muted"
        border="1px solid"
        borderColor="border.muted"
        cursor="pointer"
        transition="all 0.3s ease"
        height="100%"
        width="100%"
        transform="scale(1)"
        _hover={{
          transform: "translateY(-2px) !important",
          borderColor: "border.emphasized",
          shadow: "md",
          zIndex: 10,
        }}
      >
        <VStack align="stretch" gap={{ base: 2, md: 3 }} height="100%">
          <HStack justify="space-between" align="start">
            <HStack gap={2}>
              <Icon fontSize={{ base: "lg", md: "xl" }} color="fg.muted">
                <FaCode />
              </Icon>
              <Heading 
                size={{ base: "sm", md: "md" }}
                noOfLines={1}
              >
                {project.title}
              </Heading>
            </HStack>
            {project.link && (
              <Icon 
                fontSize={{ base: "md", md: "lg" }} 
                color="fg.muted"
              >
                <FaGithub />
              </Icon>
            )}
          </HStack>

          <HStack flexWrap="wrap" gap={1}>
            {project.skills.map((skill, idx) => (
              <Badge
                key={idx}
                colorPalette="gray"
                size={{ base: "xs", md: "sm" }}
                fontSize={{ base: "2xs", md: "xs" }}
              >
                {skill}
              </Badge>
            ))}
          </HStack>

          {project.githubRepo && (
            <Box py={2}>
              <GitHubStats repoUrl={project.githubRepo} />
            </Box>
          )}

          <Text
            fontSize={{ base: "xs", md: "sm" }}
            color="fg.muted"
            flex="1"
          >
            {project.description}
          </Text>

        </VStack>
      </Box>
    );
  };

  return (
    <Box className="project-showcase" mb={{ base: 6, md: 8 }}>
      <VStack mb={{ base: 4, md: 6 }} gap={2}>
        <Heading size={{ base: "lg", md: "xl" }}>side projects</Heading>
        <Text fontSize={{ base: "xs", md: "sm" }} color="fg.muted">
          things i've built and tinkered with
        </Text>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={{ base: 4, md: 6 }}
        width="100%"
      >
        {SideProjects.map((project, index) => (
          <Box width="100%" key={index}>
            <ProjectCard
              project={project}
              index={index}
            />
          </Box>
        ))}
      </SimpleGrid>

      <Box
        mt={{ base: 4, md: 6 }}
        padding={{ base: 3, md: 4 }}
        borderRadius="lg"
        bg="bg.subtle"
        border="1px solid"
        borderColor="border.muted"
        textAlign="center"
      >
        <HStack justify="center" gap={2}>
          <Icon color="fg.muted">
            <FaGithub />
          </Icon>
          <Text fontSize={{ base: "xs", md: "sm" }} color="fg.muted">
            more on{" "}
            <a 
              href="https://github.com/AbhishekDinesan" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontWeight: "600", textDecoration: "underline" }}
            >
              github
            </a>
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectShowcase;


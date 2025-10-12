import { Box, Heading, HStack, Text, VStack, Badge, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "../styles/SkillsAnimation.css";
import SkillsData from "../info/Skills.json";

const SkillsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const SkillBadge = ({ skill, index }) => {
    return (
      <Box
        className={`skill-badge ${isVisible ? 'visible' : ''}`}
        style={{
          animationDelay: `${index * 0.05}s`,
        }}
      >
        <Badge
          colorPalette="gray"
          size={{ base: "sm", md: "md" }}
          padding={{ base: "6px 12px", md: "8px 16px" }}
          borderRadius="full"
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="medium"
          cursor="pointer"
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.1) translateY(-2px)",
            shadow: "lg",
          }}
        >
          {skill}
        </Badge>
      </Box>
    );
  };

  const SkillCategory = ({ title, skills, icon }) => (
    <VStack align="stretch" gap={{ base: 2, md: 3 }}>
      <HStack gap={2}>
        <Text fontSize={{ base: "lg", md: "xl" }}>{icon}</Text>
        <Heading size={{ base: "sm", md: "md" }} fontWeight="semibold">
          {title}
        </Heading>
      </HStack>
      <HStack flexWrap="wrap" gap={{ base: 2, md: 3 }}>
        {skills.map((skill, index) => (
          <SkillBadge key={skill} skill={skill} index={index} />
        ))}
      </HStack>
    </VStack>
  );

  return (
    <Box
      className="skills-dashboard"
      padding={{ base: "1.5rem", md: "2rem" }}
      borderRadius="xl"
      marginBottom={{ base: "2rem", md: "3rem" }}
    >
      <VStack align="stretch" gap={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={{ base: 2, md: 3 }}>
          <Heading size={{ base: "lg", md: "xl" }} mb={2}>
            skills
          </Heading>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: 4, md: 6 }}
          width="100%"
        >
          <SkillCategory
            title="languages"
            icon="💻"
            skills={SkillsData.languages}
          />
          <SkillCategory
            title="frameworks"
            icon="⚛️"
            skills={SkillsData.frameworks}
          />
          <SkillCategory
            title="tools & devops"
            icon="🛠️"
            skills={SkillsData.tools}
          />
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default SkillsDashboard;


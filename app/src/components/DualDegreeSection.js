import { Box, Heading, Text, VStack, HStack, Image, Stack, Badge } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { useState } from "react";
import "../styles/DualDegree.css";
import Uw from "../info/Waterloo.json";
import Wlu from "../info/Laurier.json";

const DualDegreeSection = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);

  const handleGooseClick = () => {
    setIsFlipping(true);
    
    setTimeout(() => {
      setIsSwapped(!isSwapped);
    }, 400);
    
    setTimeout(() => {
      setIsFlipping(false);
    }, 800);
  };
  const SchoolCard = ({ school, side }) => (
    <Box
      className={`school-card school-${side}`}
      position="relative"
      padding={{ base: 4, md: 6 }}
      borderRadius="xl"
      bg="bg.muted"
      border="2px solid"
      borderColor="border.emphasized"
      flex="1"
      minWidth={{ base: "100%", md: "300px" }}
      transition="all 0.3s ease"
      transform="scale(1)"
      _hover={{
        transform: "scale(1.02) !important",
        borderColor: "border.emphasized",
        shadow: "md",
        zIndex: 10,
      }}
    >
      {school.imageUrl && (
        <Box
          display="flex"
          justifyContent="center"
          mb={4}
        >
          <Image
            src={school.imageUrl}
            alt={school.title}
            maxHeight={{ base: "80px", md: "100px" }}
            maxWidth={{ base: "80px", md: "100px" }}
            objectFit="contain"
          />
        </Box>
      )}

      <Heading size={{ base: "sm", md: "md" }} textAlign="center" mb={2}>
        {school.title}
      </Heading>

      <VStack gap={2} align="stretch" mb={3}>
        {school.skills.map((skill, index) => (
          <Badge
            key={index}
            colorPalette="gray"
            size={{ base: "sm", md: "md" }}
            textAlign="center"
            padding={{ base: "4px 8px", md: "6px 12px" }}
          >
            {skill}
          </Badge>
        ))}
      </VStack>

      {school.involvement && (
        <Box
          mb={3}
          padding={{ base: "8px", md: "10px" }}
          bg="bg.emphasized"
          borderRadius="md"
          border="1px solid"
          borderColor="border.emphasized"
        >
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="semibold"
            textAlign="center"
          >
            {school.involvement}
          </Text>
        </Box>
      )}

      <Text
        fontSize={{ base: "xs", md: "sm" }}
        color="fg.muted"
        textAlign="center"
      >
        {school.description}
      </Text>

      <Box
        position="absolute"
        top={3}
        right={3}
        fontSize={{ base: "lg", md: "xl" }}
      >
        <FaGraduationCap />
      </Box>
    </Box>
  );

  return (
    <Box className="dual-degree-section" mb={{ base: 6, md: 8 }}>
      <VStack mb={{ base: 4, md: 6 }} gap={2}>
        <Heading size={{ base: "lg", md: "xl" }}>education</Heading>
      </VStack>

      <Stack
        direction={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 6 }}
        align="stretch"
        justify="center"
        position="relative"
      >
        <Box className={isFlipping ? 'flipping' : ''} flex="1">
          <SchoolCard school={isSwapped ? Wlu : Uw} side="left" />
        </Box>

        <Box
          className="connection-symbol"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position={{ base: "relative", md: "relative" }}
          my={{ base: 0, md: "auto" }}
        >
          <Box
            className={`goose ${isFlipping ? 'honking' : ''}`}
            fontSize={{ base: "3xl", md: "5xl" }}
            bg="bg.panel"
            borderRadius="full"
            padding={{ base: 3, md: 4 }}
            border="3px solid"
            borderColor="border.emphasized"
            zIndex={2}
            cursor="pointer"
            transition="all 0.3s ease"
            onClick={handleGooseClick}
            _hover={{
              transform: "scale(1.15)",
              borderColor: "border.emphasized",
            }}
            _active={{
              transform: "scale(0.95)",
            }}
          >
            🦆
          </Box>
        </Box>

        <Box className={isFlipping ? 'flipping' : ''} flex="1">
          <SchoolCard school={isSwapped ? Uw : Wlu} side="right" />
        </Box>
      </Stack>
    </Box>
  );
};

export default DualDegreeSection;


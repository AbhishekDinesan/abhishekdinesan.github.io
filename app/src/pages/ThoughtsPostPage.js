import { Box, Heading, Stack, Text, Badge, SimpleGrid } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useParams } from "react-router-dom";
import factoryFloorPost from "../info/ThoughtsFactoryFloor.json";
import comfortableIrrelevancePost from "../info/ThoughtsComfortableIrrelevance.json";

const postsBySlug = {
  "factory-floor-national-security": factoryFloorPost,
  "comfortable-irrelevance-ai-abundance": comfortableIrrelevancePost
};

const ThoughtsPostPage = () => {
  const { slug } = useParams();
  const post = postsBySlug[slug] ?? factoryFloorPost;
  const pageBg = useColorModeValue("white", "#0a0a0b");
  const headingColor = useColorModeValue("gray.900", "white");
  const bodyColor = useColorModeValue("gray.700", "gray.300");
  const muted = useColorModeValue("gray.500", "gray.500");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const panelBg = useColorModeValue("gray.50", "whiteAlpha.100");

  return (
    <Box
      as="section"
      background={pageBg}
      paddingY={{ base: 10, md: 16 }}
      paddingX={{ base: 4, md: 8 }}
      minHeight="70vh"
      textAlign="left"
    >
      <Box
        maxWidth="760px"
        margin="0 auto"
        width="100%"
        borderRadius="xl"
        padding={{ base: 3, md: 6 }}
      >
        <Stack gap={{ base: 5, md: 6 }}>
          <Badge width="fit-content" colorPalette="gray" variant="subtle">
            {post.postLabel}
          </Badge>
          <Heading
            color={headingColor}
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "1.2", md: "1.15" }}
          >
            {post.title}
          </Heading>

          <Text
            color={bodyColor}
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.75"
            fontStyle="italic"
          >
            {post.dek}
          </Text>

          <Text fontSize={{ base: "xs", md: "sm" }} color={muted}>
            {post.meta}
          </Text>

          <Stack gap={5}>
            {post.openingParagraphs.map((paragraph, index) => (
              <Text key={`opening-${index}`} color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
                {paragraph}
              </Text>
            ))}
          </Stack>

          <SimpleGrid columns={1} gap={3}>
            {post.stats.map((stat, index) => (
              <Box key={`stat-${index}`} bg={panelBg} border="1px solid" borderColor={borderColor} borderRadius="lg" p={4}>
                <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color={headingColor}>{stat.value}</Text>
                <Text color={muted} fontSize={{ base: "xs", md: "sm" }}>
                  {stat.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {post.sections.slice(0, 3).map((section, sectionIndex) => (
            <Box key={`section-top-${sectionIndex}`}>
              <Heading
                color={headingColor}
                fontSize={{ base: "xl", md: "2xl" }}
                mt={sectionIndex === 0 ? 2 : 0}
                mb={3}
              >
                {section.heading}
              </Heading>
              <Stack gap={4}>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <Text key={`section-top-${sectionIndex}-paragraph-${paragraphIndex}`} color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
                    {paragraph}
                  </Text>
                ))}
              </Stack>
            </Box>
          ))}

          {post.sections.slice(3).map((section, sectionIndex) => (
            <Box key={`section-bottom-${sectionIndex}`}>
              <Heading
                color={headingColor}
                fontSize={{ base: "xl", md: "2xl" }}
                mb={3}
              >
                {section.heading}
              </Heading>
              <Stack gap={4}>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <Text key={`section-bottom-${sectionIndex}-paragraph-${paragraphIndex}`} color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
                    {paragraph}
                  </Text>
                ))}
              </Stack>
            </Box>
          ))}

          {post.pullQuote ? (
            <Box
              borderLeft="3px solid"
              borderColor={borderColor}
              pl={4}
              py={2}
            >
              <Text
                color={bodyColor}
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                lineHeight="1.8"
              >
                {post.pullQuote}
              </Text>
            </Box>
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
};

export default ThoughtsPostPage;

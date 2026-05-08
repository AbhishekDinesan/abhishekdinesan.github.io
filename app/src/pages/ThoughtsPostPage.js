import { Box, Heading, Stack, Text, SimpleGrid, Grid } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useParams } from "react-router-dom";
import Seo from "../components/Seo";
import factoryFloorPost from "../info/ThoughtsFactoryFloor.json";
import comfortableIrrelevancePost from "../info/ThoughtsComfortableIrrelevance.json";
import taxPenthousePost from "../info/ThoughtsTaxPenthouse.json";

const postsBySlug = {
  "tax-penthouse-not-payroll": taxPenthousePost,
  "factory-floor-national-security": factoryFloorPost,
  "comfortable-irrelevance-ai-abundance": comfortableIrrelevancePost
};

const renderSectionParagraph = (paragraph, key, colors) => {
  if (typeof paragraph === "string") {
    return (
      <Text key={key} color={colors.bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
        {paragraph}
      </Text>
    );
  }

  if (paragraph?.table) {
    const headers = paragraph.table.headers ?? [];
    const rows = paragraph.table.rows ?? [];
    return (
      <Box key={key} border="1px solid" borderColor={colors.borderColor} borderRadius="lg" overflow="hidden">
        <Box overflowX="auto">
          <Grid templateColumns="minmax(220px, 2fr) minmax(120px, 0.8fr) minmax(260px, 2.2fr)" minWidth="700px">
            {headers.map((header) => (
              <Box key={`${key}-header-${header}`} bg={colors.panelBg} borderBottom="1px solid" borderColor={colors.borderColor} p={3}>
                <Text color={colors.headingColor} fontSize={{ base: "xs", md: "sm" }} fontWeight="semibold">
                  {header}
                </Text>
              </Box>
            ))}
            {rows.flatMap((row, rowIndex) =>
              row.map((cell, cellIndex) => (
                <Box
                  key={`${key}-row-${rowIndex}-cell-${cellIndex}`}
                  borderTop={rowIndex === 0 ? "none" : "1px solid"}
                  borderColor={colors.borderColor}
                  p={3}
                >
                  <Text color={colors.bodyColor} fontSize={{ base: "xs", md: "sm" }} lineHeight="1.65">
                    {cell}
                  </Text>
                </Box>
              ))
            )}
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <Text
      key={key}
      color={colors.bodyColor}
      fontSize={{ base: "sm", md: "md" }}
      lineHeight="1.95"
      fontStyle={paragraph?.italic ? "italic" : undefined}
    >
      {paragraph?.text ?? ""}
    </Text>
  );
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
      <Seo
        title={post.title}
        description={post.dek}
        path={`/thoughts/${slug}`}
        type="article"
      />
      <Box
        maxWidth="760px"
        margin="0 auto"
        width="100%"
        borderRadius="xl"
        padding={{ base: 3, md: 6 }}
      >
        <Stack gap={{ base: 5, md: 6 }}>
          <Heading
            as="h1"
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
            {post.openingParagraphs.map((item, index) =>
              typeof item === "object" && item.heading ? (
                <Heading
                  key={`opening-${index}`}
                  color={headingColor}
                  fontSize={{ base: "xl", md: "2xl" }}
                  mt={2}
                >
                  {item.heading}
                </Heading>
              ) : (
                <Text key={`opening-${index}`} color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
                  {item}
                </Text>
              )
            )}
          </Stack>

          <SimpleGrid columns={1} gap={3}>
            {(post.stats ?? []).map((stat, index) => (
              <Box key={`stat-${index}`} bg={panelBg} border="1px solid" borderColor={borderColor} borderRadius="lg" p={4}>
                <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color={headingColor}>{stat.value}</Text>
                <Text color={muted} fontSize={{ base: "xs", md: "sm" }}>
                  {stat.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {(post.sections ?? []).map((section, sectionIndex) => (
            <Box key={`section-${sectionIndex}`}>
              <Heading
                color={headingColor}
                fontSize={{ base: "xl", md: "2xl" }}
                mt={sectionIndex === 0 ? 2 : 0}
                mb={3}
              >
                {section.heading}
              </Heading>
              <Stack gap={4}>
                {(section.paragraphs ?? []).map((paragraph, paragraphIndex) => (
                  renderSectionParagraph(paragraph, `section-${sectionIndex}-paragraph-${paragraphIndex}`, {
                    bodyColor,
                    headingColor,
                    borderColor,
                    panelBg
                  })
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

import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import RewrittenSynopsis from "../info/RewrittenSynopsis.json";
import Seo from "../components/Seo";

const emphasizeWord = (paragraph, word, paragraphIndex) => {
  const lowerWord = word.toLowerCase();
  if (!paragraph.toLowerCase().includes(lowerWord)) {
    return paragraph;
  }

  const regex = new RegExp(`(${word})`, "gi");
  return paragraph.split(regex).map((segment, segmentIndex) => {
    if (segment.toLowerCase() === lowerWord) {
      return (
        <Text
          as="span"
          fontStyle="italic"
          key={`${paragraphIndex}-${segmentIndex}`}
        >
          {segment}
        </Text>
      );
    }
    return segment;
  });
};

const RewrittenPage = () => {
  const pageBg = useColorModeValue("#f7f7f8", "#050505");
  const headingColor = useColorModeValue("gray.900", "white");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      as="section"
      background={pageBg}
      minHeight="100vh"
      width="100%"
      paddingY={{ base: 10, md: 16 }}
      paddingX={{ base: 4, md: 12 }}
      textAlign="left"
    >
      <Seo
        title="Rewritten Synopsis"
        description="Synopsis and world-building notes for Rewritten by Abhi Dinesan."
        path="/personal/rewritten"
      />
      <Box maxWidth="900px">
        <Heading
          as="h1"
          size={{ base: "lg", md: "xl" }}
          color={headingColor}
          mb={6}
          textTransform="uppercase"
          letterSpacing="0.3em"
        >
          Rewritten — Synopsis
        </Heading>
        <Stack spacing={4} color={textColor} fontSize={{ base: "sm", md: "md" }}>
          {RewrittenSynopsis.synopsisParagraphs.map((paragraph, index) => (
            <Text key={index}>
              {emphasizeWord(paragraph, "folks", index)}
            </Text>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default RewrittenPage;


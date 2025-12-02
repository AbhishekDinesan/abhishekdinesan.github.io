import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { WritingCard } from "../components/Card";
import { Typewriter } from 'react-simple-typewriter';

const IdeasPage = () => {
  return (
    <Box
      as="section"
      paddingY={{ base: 10, md: 16 }}
      paddingX={{ base: 4, md: 8 }}
      minHeight="70vh"
      display="flex"
      flexDirection="column"
      gap={10}
    >
      <Box>
        <Heading
          as="h1"
          size={{ base: "lg", md: "xl" }}
          color="whiteAlpha.900"
        >
          Fiction
        </Heading>

      </Box>

      <Flex direction="column" gap={4}>
        <Link to="/ideas/rewritten" style={{ textDecoration: "none", display: "block", width: "100%" }}>
          <WritingCard
            eyebrow="Fiction"
            title="Rewritten"
            meta="View the synopsis."
            isInteractive
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default IdeasPage;

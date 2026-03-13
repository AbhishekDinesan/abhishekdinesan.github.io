import { Box, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorModeValue } from "../components/ui/color-mode";

const ThoughtsPage = () => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const muted = useColorModeValue("gray.600", "gray.400");
  const hoverBg = useColorModeValue("gray.50", "whiteAlpha.100");
  const titleColor = useColorModeValue("gray.900", "whiteAlpha.900");

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
      <Box maxWidth="900px" margin="0 auto" width="100%" textAlign="left">
        <Text color="fg.muted" maxWidth="760px" fontSize={{ base: "sm", md: "md" }} mb={2}>
          technical writing on physical ai, systems, and product-minded engineering.
        </Text>
      </Box>

      <Box maxWidth="900px" margin="0 auto" width="100%">
        <Link
          to="/thoughts/factory-floor-national-security"
          style={{ textDecoration: "none", display: "block", width: "100%" }}
        >
          <Box
            border="1px solid"
            borderColor={borderColor}
            borderRadius="lg"
            padding={{ base: 5, md: 6 }}
            transition="background 0.2s ease, border-color 0.2s ease"
            _hover={{ background: hoverBg, borderColor: muted }}
          >
            <Stack gap={3} textAlign="left">
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                textTransform="uppercase"
                letterSpacing="0.08em"
                color={muted}
              >
                post 001 • september 2026 • 6 min read
              </Text>
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                lineHeight="1.35"
                color={titleColor}
              >
                domestic manufacturing capability has become a national security problem
              </Text>
              <Text color={muted} fontSize={{ base: "sm", md: "md" }} lineHeight="1.7" maxWidth="780px">
                why industrial capability is quietly hollowing out, and why it's important.
              </Text>
              <Text fontSize={{ base: "sm", md: "sm" }} color={titleColor}>
                read essay {"->"}
              </Text>
            </Stack>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default ThoughtsPage;

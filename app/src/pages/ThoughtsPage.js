import { Box, HStack, Stack, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorModeValue } from "../components/ui/color-mode";
import { LuPin } from "react-icons/lu";
import factoryFloorPost from "../info/ThoughtsFactoryFloor.json";
import comfortableIrrelevancePost from "../info/ThoughtsComfortableIrrelevance.json";
import siliconShieldPost from "../info/ThoughtsSiliconShield.json";

const posts = [
  {
    slug: "comfortable-irrelevance-ai-abundance",
    readTime: "8 min read",
    preview: "why abundance may raise living standards while making many people economically unnecessary.",
    pinned: true,
    ...comfortableIrrelevancePost
  },
  {
    slug: "silicon-shield-sacred-mountain",
    readTime: "12 min read",
    preview: "TSMC, silicon shields, and why Canada needs a sacred mountain.",
    ...siliconShieldPost
  },
  {
    slug: "factory-floor-national-security",
    readTime: "6 min read",
    preview: "why industrial capability is quietly hollowing out, and why it's important.",
    ...factoryFloorPost
  }
];

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
          writing on tech and engineering with a splash of humour
        </Text>
      </Box>

      <Stack maxWidth="900px" margin="0 auto" width="100%" gap={5}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/thoughts/${post.slug}`}
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
                <HStack gap={1}>
                  {post.pinned && <Icon size="xs" color={muted}><LuPin /></Icon>}
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    textTransform="uppercase"
                    letterSpacing="0.08em"
                    color={muted}
                  >
                    {`${post.meta.split("•")[1]?.trim() ?? ""} • ${post.readTime}`}
                  </Text>
                </HStack>
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  lineHeight="1.35"
                  color={titleColor}
                >
                  {post.title}
                </Text>
                <Text color={muted} fontSize={{ base: "sm", md: "md" }} lineHeight="1.7" maxWidth="780px">
                  {post.preview}
                </Text>
                <Text fontSize={{ base: "sm", md: "sm" }} color={titleColor}>
                  read essay {"->"}
                </Text>
              </Stack>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default ThoughtsPage;

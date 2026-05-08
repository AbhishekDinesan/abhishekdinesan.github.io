import { useState } from "react";
import { Box, HStack, Stack, Text, Icon, Grid, GridItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorModeValue } from "../components/ui/color-mode";
import { LuPin } from "react-icons/lu";
import Seo from "../components/Seo";
import factoryFloorPost from "../info/ThoughtsFactoryFloor.json";
import comfortableIrrelevancePost from "../info/ThoughtsComfortableIrrelevance.json";
import taxPenthousePost from "../info/ThoughtsTaxPenthouse.json";

const posts = [
  {
    slug: "tax-penthouse-not-payroll",
    readTime: "21 min read",
    cardSubtitle: "Productive Taxation: We need to fundamentally change how we do taxes",
    preview: "why we should tax extractive land hoarding instead of productive labour.",
    category: "social",
    ...taxPenthousePost
  },
  {
    slug: "comfortable-irrelevance-ai-abundance",
    readTime: "8 min read",
    preview: "why abundance may raise living standards while making many people economically unnecessary.",
    pinned: true,
    category: "tech",
    ...comfortableIrrelevancePost
  },
  {
    slug: "factory-floor-national-security",
    readTime: "6 min read",
    preview: "why industrial capability is quietly hollowing out, and why it's important.",
    category: "tech",
    ...factoryFloorPost
  }
];

const ThoughtsPage = () => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const muted = useColorModeValue("gray.600", "gray.400");
  const hoverBg = useColorModeValue("gray.50", "whiteAlpha.100");
  const titleColor = useColorModeValue("gray.900", "whiteAlpha.900");
  const sidebarBg = useColorModeValue("gray.50", "whiteAlpha.100");
  const activeCategoryBg = useColorModeValue("white", "whiteAlpha.100");
  const activeCategoryText = useColorModeValue("gray.900", "white");
  const activeCategoryBorder = useColorModeValue("gray.900", "white");
  const inactiveCategoryBorder = useColorModeValue("gray.200", "whiteAlpha.200");
  const inactiveCategoryText = useColorModeValue("gray.700", "gray.300");
  const categories = ["tech", "social"];
  const [selectedCategory, setSelectedCategory] = useState("tech");
  const postsByCategory = categories.reduce((acc, category) => {
    acc[category] = posts.filter((post) => post.category === category);
    return acc;
  }, {});
  const filteredPosts = postsByCategory[selectedCategory] ?? [];

  const renderPostCard = (post) => (
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
          {post.cardSubtitle ? (
            <Text color={titleColor} fontSize={{ base: "sm", md: "md" }} fontStyle="italic" lineHeight="1.7">
              {post.cardSubtitle}
            </Text>
          ) : null}
          <Text color={muted} fontSize={{ base: "sm", md: "md" }} lineHeight="1.7" maxWidth="780px">
            {post.preview}
          </Text>
          <Text fontSize={{ base: "sm", md: "sm" }} color={titleColor}>
            read essay {"->"}
          </Text>
        </Stack>
      </Box>
    </Link>
  );

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
      <Seo
        title="Thoughts on Tech and Society"
        description="Essays by Abhi Dinesan on technology, systems, policy, and product engineering."
        path="/thoughts"
      />
      <Box maxWidth="900px" margin="0 auto" width="100%" textAlign="left">
        <Text color="fg.muted" maxWidth="760px" fontSize={{ base: "sm", md: "md" }} mb={2}>
          writing on tech, society and engineering with a splash of humour
        </Text>
      </Box>

      <Grid maxWidth="1100px" margin="0 auto" width="100%" gap={{ base: 6, md: 10 }} templateColumns={{ base: "1fr", md: "240px 1fr" }}>
        <GridItem>
          <Box
            bg={sidebarBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="lg"
            p={4}
            position={{ base: "static", md: "sticky" }}
            top={{ md: 24 }}
          >
            <Stack gap={4}>
              <Text fontSize={{ base: "xs", md: "sm" }} letterSpacing="0.08em" textTransform="uppercase" color={muted}>
                categories
              </Text>
              {categories.map((category) => (
                <Button
                  key={`sidebar-${category}`}
                  onClick={() => setSelectedCategory(category)}
                  justifyContent="space-between"
                  borderRadius="md"
                  border="1px solid"
                  borderColor={selectedCategory === category ? activeCategoryBorder : inactiveCategoryBorder}
                  bg={selectedCategory === category ? activeCategoryBg : "transparent"}
                  color={selectedCategory === category ? activeCategoryText : inactiveCategoryText}
                  _hover={{
                    bg: selectedCategory === category ? activeCategoryBg : hoverBg,
                    borderColor: selectedCategory === category ? activeCategoryBorder : muted
                  }}
                  _active={{
                    transform: "translateY(0px)"
                  }}
                  fontWeight="semibold"
                  textTransform="capitalize"
                  fontSize="sm"
                  letterSpacing="0.01em"
                  px={4}
                  h="44px"
                  boxShadow={selectedCategory === category ? "sm" : "none"}
                  transition="all 0.2s ease"
                >
                  <Text>{category}</Text>
                  <Text fontSize="xs" opacity={0.8}>
                    {postsByCategory[category].length}
                  </Text>
                </Button>
              ))}
            </Stack>
          </Box>
        </GridItem>
        <GridItem>
          <Stack gap={5}>
            {filteredPosts.map((post) => renderPostCard(post))}
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ThoughtsPage;

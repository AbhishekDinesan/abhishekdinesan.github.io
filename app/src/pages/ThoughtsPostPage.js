import { Box, Heading, Stack, Text, Badge, SimpleGrid } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

const ThoughtsPostPage = () => {
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
            post 001
          </Badge>
          <Heading
            color={headingColor}
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "1.2", md: "1.15" }}
          >
            The Factory Floor Has Become a National Security Problem
          </Heading>

          <Text
            color={bodyColor}
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.75"
            fontStyle="italic"
          >
            U.S. and Canadian firms still know how to make things, but the capability has quietly hollowed out.
            Rebuilding that capacity is not just an economic project, it is a strategic imperative for both sides
            of the border.
          </Text>

          <Text fontSize={{ base: "xs", md: "sm" }} color={muted}>
            abhi dinesan • september 2026 • manufacturing, ai, systems
          </Text>

          <Stack gap={5}>
            <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
              There is a shop owner working between Detroit and Windsor who has spent decades learning how to
              cut metal with extraordinary precision. He can look at a technical drawing, turn it over in his
              hands, and tell you where it will fail before the first piece is cut. That knowledge does not
              live in a database. It lives in his motions, his instincts, and the accumulated pattern recognition
              of years.
            </Text>
            <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
              His children became lawyers and product managers. Nobody is coming to inherit his craft.
              Multiply that story by thousands and you have the current state of North American precision
              manufacturing, from the Great Lakes corridor to Quebec and the U.S. Sun Belt.
            </Text>
          </Stack>

          <SimpleGrid columns={1} gap={3}>
            <Box bg={panelBg} border="1px solid" borderColor={borderColor} borderRadius="lg" p={4}>
              <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color={headingColor}>40K+</Text>
              <Text color={muted} fontSize={{ base: "xs", md: "sm" }}>
                estimated open precision-manufacturing roles across the U.S. and Canada.
              </Text>
            </Box>
            <Box bg={panelBg} border="1px solid" borderColor={borderColor} borderRadius="lg" p={4}>
              <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color={headingColor}>~50%</Text>
              <Text color={muted} fontSize={{ base: "xs", md: "sm" }}>
                of institutional shop-floor knowledge can disappear in one retirement cycle.
              </Text>
            </Box>
            <Box bg={panelBg} border="1px solid" borderColor={borderColor} borderRadius="lg" p={4}>
              <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color={headingColor}>$1T+</Text>
              <Text color={muted} fontSize={{ base: "xs", md: "sm" }}>
                annual value tied to U.S.-Canada supply chains exposed to geopolitical shocks.
              </Text>
            </Box>
          </SimpleGrid>

          <Heading
            color={headingColor}
            fontSize={{ base: "xl", md: "2xl" }}
            mt={2}
          >
            The Quiet Hollowing
          </Heading>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            We did not lose capability in one dramatic collapse. We lost it through decades of offshoring,
            fragmented incentives, and the assumption that supply would always be available on demand.
            What remains is often excellent, but thin. The shops that still perform at a world-class level
            are overloaded, aging, and difficult to scale.
          </Text>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            This is why conversations about industrial policy miss the point when they focus only on headcount.
            You can announce a new factory quickly. You cannot instantly recreate the tacit layer of capability
            that keeps quality high, tolerances tight, and schedules predictable in both Ontario and Ohio,
            in Quebec and Michigan.
          </Text>

          <Heading
            color={headingColor}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            When Supply Chains Become Weapons
          </Heading>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            The geopolitics are no longer hypothetical. Disruptions in critical inputs, concentrated refining,
            and chokepoints in advanced components have turned supply chains into strategic terrain. What once
            looked like efficient globalization now looks like fragile dependency.
          </Text>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            Precision manufacturing sits in the center of this tension. It touches aerospace, semiconductors,
            energy systems, medical devices, and defense. If this layer remains brittle in either the U.S. or
            Canada, both economies inherit that brittleness.
          </Text>

          <Heading
            color={headingColor}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            The Digitization Gap Is the Real Problem
          </Heading>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            This sector is not short on software. It is short on the right software. Enterprise tooling
            optimized for planning and reporting does not capture the high-frequency reality of machines,
            fixtures, tolerances, and process drift. The most important information still lives in operator
            judgment and scattered notes.
          </Text>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            The result is a system that is capacity constrained and hard to modernize: too digital to be managed
            manually, too analog to be orchestrated algorithmically across cross-border production networks.
          </Text>

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
              The market is thick with both supply and demand, and nearly devoid of the infrastructure that can
              coordinate current between them.
            </Text>
          </Box>

          <Heading
            color={headingColor}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Intelligence as Industrial Policy
          </Heading>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            Countries are not only investing in factories. They are investing in the intelligence layer that
            makes factories adaptive and compounding. The U.S. and Canada both have world-class software and AI
            talent, but that capability remains under-deployed where it matters most: on the manufacturing floor.
          </Text>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            The opportunity is to encode and scale expert shop-floor reasoning, then pair it with robotics and
            automation so capability no longer retires when one operator does, whether the line runs in Detroit,
            Windsor, Pittsburgh, or Hamilton.
          </Text>

          <Heading
            color={headingColor}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            The Stakes
          </Heading>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            If we do not fix this layer, we risk losing both industrial resilience and technological leverage.
            If we do fix it, we unlock a foundation for the next generation of innovation in robotics, energy,
            aerospace, and biotech.
          </Text>
          <Text color={bodyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.95">
            This is not a nostalgia project. It is an infrastructure project for U.S.-Canada industrial capacity.
            The question is whether we build the tools to scale hard-won manufacturing knowledge now, together,
            or wait until the cost of rebuilding is much higher.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default ThoughtsPostPage;

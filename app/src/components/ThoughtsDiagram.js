import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const cakeLayers = [
  {
    label: "applications",
    examples: "cursor · harvey · palantir · anduril",
    light: { bg: "#f6d7e0", text: "#5d2b3b" },
    dark: { bg: "#6d4a56", text: "#f9e7ec" },
    height: { base: "54px", md: "62px" }
  },
  {
    label: "models",
    note: "the filling",
    examples: "anthropic · openai · google · deepseek",
    light: { bg: "#3a2317", text: "#f4e0cb" },
    dark: { bg: "#c98b4b", text: "#2a1608" },
    height: { base: "34px", md: "36px" }
  },
  {
    label: "infrastructure",
    examples: "coreweave · nebius · crusoe · baseten",
    light: { bg: "#f0e2c8", text: "#4a3d22" },
    dark: { bg: "#575040", text: "#f1e7d3" },
    height: { base: "54px", md: "62px" }
  },
  {
    label: "chips",
    examples: "nvidia · tsmc · broadcom · amd",
    light: { bg: "#e6d3b3", text: "#453820" },
    dark: { bg: "#4a4235", text: "#eae0c8" },
    height: { base: "54px", md: "62px" }
  },
  {
    label: "energy",
    examples: "constellation · ge vernova · smrs",
    light: { bg: "#d8be95", text: "#3f3318" },
    dark: { bg: "#3d372c", text: "#ded3b9" },
    height: { base: "54px", md: "62px" }
  }
];

const AiStackCake = () => {
  const isDark = useColorModeValue(false, true);

  return (
    <Stack gap="3px">
      {cakeLayers.map((layer, index) => {
        const palette = isDark ? layer.dark : layer.light;
        const isFirst = index === 0;
        const isLast = index === cakeLayers.length - 1;

        return (
          <Box
            key={layer.label}
            bg={palette.bg}
            minHeight={layer.height}
            borderTopRadius={isFirst ? "14px" : "3px"}
            borderBottomRadius={isLast ? "6px" : "3px"}
            paddingX={{ base: 3, md: 4 }}
            paddingY={2}
            display="flex"
            alignItems="center"
          >
            <HStack width="100%" justifyContent="space-between" gap={3}>
              <HStack gap={2} flexShrink={0}>
                <Text
                  color={palette.text}
                  fontSize={{ base: "2xs", md: "xs" }}
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  {layer.label}
                </Text>
                {layer.note ? (
                  <Text color={palette.text} fontSize="2xs" fontStyle="italic" opacity={0.85}>
                    {layer.note}
                  </Text>
                ) : null}
              </HStack>
              <Text
                color={palette.text}
                fontSize="2xs"
                opacity={0.8}
                textAlign="right"
                lineHeight="1.4"
              >
                {layer.examples}
              </Text>
            </HStack>
          </Box>
        );
      })}
    </Stack>
  );
};

const CapabilityFloor = () => {
  const axis = useColorModeValue("#9ca3af", "#4b5563");
  const ceilingStroke = useColorModeValue("#1f2937", "#e5e7eb");
  const floorStroke = useColorModeValue("#b45309", "#f59e0b");
  const band = useColorModeValue("rgba(31, 41, 55, 0.08)", "rgba(229, 231, 235, 0.1)");
  const label = useColorModeValue("#374151", "#d1d5db");
  const subtle = useColorModeValue("#6b7280", "#9ca3af");

  return (
    <Box width="100%" overflowX="auto">
      <Box as="svg" viewBox="0 0 660 300" width="100%" minWidth="420px" role="img">
        <title>the frontier ceiling and the rising floor of good-enough intelligence</title>

        <path
          d="M 56 96 C 220 58, 380 46, 604 34 L 604 66 C 400 124, 240 214, 56 250 Z"
          fill={band}
        />

        <line x1="56" y1="24" x2="56" y2="266" stroke={axis} strokeWidth="1" />
        <line x1="56" y1="266" x2="620" y2="266" stroke={axis} strokeWidth="1" />

        <line
          x1="56"
          y1="186"
          x2="604"
          y2="186"
          stroke={subtle}
          strokeWidth="1"
          strokeDasharray="5 5"
        />

        <path
          d="M 56 96 C 220 58, 380 46, 604 34"
          fill="none"
          stroke={ceilingStroke}
          strokeWidth="2.5"
        />
        <path
          d="M 56 250 C 240 214, 400 124, 604 66"
          fill="none"
          stroke={floorStroke}
          strokeWidth="2.5"
        />

        <text x="604" y="24" textAnchor="end" fill={label} fontSize="12">
          frontier ceiling
        </text>
        <text x="330" y="100" textAnchor="middle" fill={label} fontSize="12">
          work that still needs the frontier
        </text>
        <text x="604" y="178" textAnchor="end" fill={subtle} fontSize="11">
          competence threshold of most white-collar work
        </text>
        <text x="66" y="264" fill={floorStroke} fontSize="12">
          the floor: open weights, small and private models
        </text>
        <text x="620" y="288" textAnchor="end" fill={subtle} fontSize="11">
          time
        </text>
        <text
          x="20"
          y="150"
          fill={subtle}
          fontSize="11"
          transform="rotate(-90 20 150)"
          textAnchor="middle"
        >
          capability
        </text>
      </Box>
    </Box>
  );
};

const diagrams = {
  "ai-stack-cake": AiStackCake,
  "capability-floor": CapabilityFloor
};

const ThoughtsDiagram = ({ name, title, caption }) => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const panelBg = useColorModeValue("gray.50", "whiteAlpha.100");
  const headingColor = useColorModeValue("gray.900", "white");
  const muted = useColorModeValue("gray.500", "gray.500");
  const Diagram = diagrams[name];

  if (!Diagram) {
    return null;
  }

  return (
    <Box
      as="figure"
      margin={0}
      bg={panelBg}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="lg"
      padding={{ base: 4, md: 5 }}
    >
      <Stack gap={3}>
        {title ? (
          <Text
            color={headingColor}
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="0.08em"
          >
            {title}
          </Text>
        ) : null}
        <Diagram />
        {caption ? (
          <Text as="figcaption" color={muted} fontSize={{ base: "xs", md: "sm" }} lineHeight="1.6">
            {caption}
          </Text>
        ) : null}
      </Stack>
    </Box>
  );
};

export default ThoughtsDiagram;

import { useState } from "react";
import { Stack, Text, Box, HStack, Link } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const ColumnRule = ({ color, width = "100%", opacity = 0.5 }) => (
  <Box height="1px" bg={color} width={width} opacity={opacity} />
);

const FakeBodyLine = ({ color, width = "100%", opacity = 0.35, height = "1.5px" }) => (
  <Box height={height} bg={color} width={width} opacity={opacity} borderRadius="0.5px" />
);

const Clipping = ({
  item,
  isActive,
  onClick,
  rotation,
  paperBg,
  inkColor,
  mutedInk,
  ruleColor,
  activeBorder,
}) => {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      bg={paperBg}
      color={inkColor}
      padding={{ base: "4px 5px 4px 5px", md: "6px 7px 5px 7px" }}
      width={{ base: "70px", sm: "78px", md: "86px" }}
      height={{ base: "128px", md: "138px" }}
      flexShrink={0}
      display="flex"
      flexDirection="column"
      transform={isActive ? "rotate(0deg) translateY(-6px)" : `rotate(${rotation}deg)`}
      transformOrigin="center center"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      boxShadow={isActive
        ? "0 6px 14px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.08)"
        : "0 2px 4px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.06)"}
      border={isActive ? "1px solid" : "none"}
      borderColor={isActive ? activeBorder : "transparent"}
      _hover={{
        transform: isActive ? "rotate(0deg) translateY(-8px)" : `rotate(0deg) translateY(-3px)`,
      }}
      position="relative"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(0,0,0,0.015) 0px, transparent 1px)`,
        backgroundSize: "3px 3px",
      }}
    >
      <Text
        fontSize="5.5px"
        textTransform="uppercase"
        letterSpacing="0.2em"
        color={inkColor}
        textAlign="center"
        fontWeight="900"
        fontFamily="'Playfair Display', 'Times New Roman', serif"
        marginBottom="2px"
        lineHeight="1"
      >
        {item.masthead}
      </Text>
      <Box height="2px" bg={ruleColor} marginBottom="1px" />
      <Box height="0.5px" bg={ruleColor} marginBottom="4px" />

      <Text
        fontSize="5px"
        textTransform="uppercase"
        letterSpacing="0.15em"
        color={mutedInk}
        textAlign="left"
        fontWeight="700"
        marginBottom="2px"
      >
        {item.section}
      </Text>

      <Text
        fontSize={item.headline.length > 26 ? "8px" : "9.5px"}
        fontWeight="900"
        fontFamily="'Playfair Display', 'Times New Roman', serif"
        lineHeight="1.05"
        textAlign="left"
        letterSpacing="-0.015em"
        marginBottom="4px"
      >
        {item.headline}
      </Text>

      <Stack gap="2px" marginBottom="4px">
        <FakeBodyLine color={inkColor} width="80%" opacity={0.45} height="2px" />
        <FakeBodyLine color={inkColor} width="60%" opacity={0.45} height="2px" />
      </Stack>

      <Stack gap="1.5px" flex={1}>
        <FakeBodyLine color={inkColor} width="100%" />
        <FakeBodyLine color={inkColor} width="92%" />
        <FakeBodyLine color={inkColor} width="100%" />
        <FakeBodyLine color={inkColor} width="78%" />
      </Stack>

      <Box marginTop="3px">
        <ColumnRule color={ruleColor} opacity={0.4} />
        <Text
          fontSize="5.5px"
          color={mutedInk}
          fontStyle="italic"
          textAlign="left"
          marginTop="2px"
          fontFamily="'Playfair Display', 'Times New Roman', serif"
        >
          {item.byline}
        </Text>
      </Box>
    </Box>
  );
};

const TrophyShelfCard = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const borderColor = useColorModeValue("gray.200", "gray.700");
  const paperBg = useColorModeValue("#f4f0e6", "#1f1d18");
  const inkColor = useColorModeValue("#0a0a0a", "#e8e4d8");
  const mutedInk = useColorModeValue("#666", "#999");
  const ruleColor = useColorModeValue("#1a1a1a", "#999");
  const activeBorder = useColorModeValue("gray.900", "whiteAlpha.900");
  const mutedColor = useColorModeValue("gray.500", "gray.400");
  const linkHoverColor = useColorModeValue("gray.900", "white");

  const rotations = [-3, 2.5, -1.5, 3];

  const currentItem = items[currentIndex];

  return (
    <Stack
      gap={0}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="lg"
      padding={{ base: "0.9em", md: "1.1em" }}
      shadow="xs"
      minHeight="100%"
    >
      <Text fontSize={{ base: "sm", md: "md" }} letterSpacing="0.005em" marginBottom={5} textAlign="left">
        foundational experiences
      </Text>

      <HStack
        spacing={1}
        justify="center"
        align="center"
        height="148px"
      >
        {items.map((item, i) => (
          <Clipping
            key={i}
            item={item}
            isActive={i === currentIndex}
            onClick={() => setCurrentIndex(i)}
            rotation={rotations[i % rotations.length]}
            paperBg={paperBg}
            inkColor={inkColor}
            mutedInk={mutedInk}
            ruleColor={ruleColor}
            activeBorder={activeBorder}
          />
        ))}
      </HStack>

      <Stack gap={1} paddingTop={3} borderTop="1px solid" borderColor={borderColor}>
        {currentItem.link ? (
          <Link
            href={currentItem.link}
            isExternal
            _hover={{ color: linkHoverColor, textDecoration: "none" }}
          >
            <Text fontSize={{ base: "sm", md: "sm" }} fontWeight="semibold" lineHeight="1.4" textAlign="left" textTransform="lowercase">
              {currentItem.label} ↗
            </Text>
          </Link>
        ) : (
          <Text fontSize={{ base: "sm", md: "sm" }} fontWeight="semibold" lineHeight="1.4" textAlign="left" textTransform="lowercase">
            {currentItem.label}
          </Text>
        )}
        <Text fontSize="xs" color={mutedColor} fontStyle="italic" textAlign="left" lineHeight="1.5">
          {currentItem.detail}
        </Text>
      </Stack>
    </Stack>
  );
};

export default TrophyShelfCard;

import { useState } from "react";
import { Stack, Text, Box, HStack, Link } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const BookSpine = ({ book, isActive, onClick, index, isDark }) => {
  const parts = book.text.split(" - ");
  const title = parts[0] || "";

  const lightPalettes = [
    { bg: "#1a1a1a", text: "#f5f5f5" },
    { bg: "#2d2d2d", text: "#e8e8e8" },
    { bg: "#404040", text: "#f0f0f0" },
    { bg: "#1a1a1a", text: "#dadada" },
    { bg: "#525252", text: "#f5f5f5" },
  ];
  const darkPalettes = [
    { bg: "#e8e8e8", text: "#1a1a1a" },
    { bg: "#c4c4c4", text: "#0a0a0a" },
    { bg: "#a8a8a8", text: "#1a1a1a" },
    { bg: "#dadada", text: "#0a0a0a" },
    { bg: "#929292", text: "#1a1a1a" },
  ];
  const palette = (isDark ? darkPalettes : lightPalettes)[index % lightPalettes.length];

  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      width={isActive ? { base: "26px", md: "30px" } : { base: "18px", md: "22px" }}
      height={isActive ? { base: "128px", md: "140px" } : { base: "118px", md: "130px" }}
      bg={palette.bg}
      borderRadius="2px 3px 3px 2px"
      position="relative"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      transform={isActive ? "translateY(-10px)" : "translateY(0)"}
      boxShadow={isActive
        ? "0 6px 12px rgba(0,0,0,0.25), inset -2px 0 3px rgba(0,0,0,0.2), inset 2px 0 2px rgba(255,255,255,0.06)"
        : "inset -2px 0 3px rgba(0,0,0,0.2), inset 2px 0 2px rgba(255,255,255,0.06)"}
      _hover={{
        transform: "translateY(-6px)",
      }}
      flexShrink={0}
    >
      <Box
        position="absolute"
        top="5px"
        left="2px"
        right="2px"
        height="1px"
        bg={palette.text}
        opacity={0.4}
      />
      <Box
        position="absolute"
        bottom="5px"
        left="2px"
        right="2px"
        height="1px"
        bg={palette.text}
        opacity={0.4}
      />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%) rotate(-90deg)"
        fontSize={isActive ? "9px" : "8px"}
        fontWeight="semibold"
        color={palette.text}
        whiteSpace="nowrap"
        letterSpacing="0.05em"
        textTransform="uppercase"
        width={isActive ? "120px" : "110px"}
        textAlign="center"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {title}
      </Text>
    </Box>
  );
};

const BookCard = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const borderColor = useColorModeValue("gray.200", "gray.700");
  const isDark = useColorModeValue(false, true);
  const shelfLineColor = useColorModeValue("gray.300", "gray.700");
  const mutedColor = useColorModeValue("gray.500", "gray.400");
  const linkHoverColor = useColorModeValue("gray.900", "white");

  const filteredBooks = books.filter(book => !book.text.includes("check out"));
  const currentBook = filteredBooks[currentIndex];
  const bookParts = currentBook.text.split(" - ");
  const title = bookParts[0] || "";
  const author = bookParts[1] || "";

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
        pages i've flipped through
      </Text>

      <HStack
        spacing="2px"
        align="flex-end"
        justify="center"
        height="148px"
      >
        {filteredBooks.map((book, i) => (
          <BookSpine
            key={i}
            book={book}
            index={i}
            isActive={i === currentIndex}
            onClick={() => setCurrentIndex(i)}
            isDark={isDark}
          />
        ))}
      </HStack>

      <Stack gap={1} paddingTop={3} borderTop="1px solid" borderColor={borderColor}>
        <Link
          href={currentBook.link}
          isExternal
          _hover={{ color: linkHoverColor, textDecoration: "none" }}
        >
          <Text fontSize={{ base: "sm", md: "sm" }} fontWeight="semibold" noOfLines={2} textAlign="left">
            {title} ↗
          </Text>
        </Link>
        <Text fontSize="xs" color={mutedColor} fontStyle="italic" textAlign="left">
          {author}
        </Text>
      </Stack>
    </Stack>
  );
};

export default BookCard;

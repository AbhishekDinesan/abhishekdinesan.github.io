import { useState, useEffect } from "react";
import { Stack, Text, Box, HStack, Link, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { LuPlay, LuPause } from "react-icons/lu";

const VinylRecord = ({ isPlaying, size, vinylColor, labelColor, grooveColor, centerColor, accentLabel }) => {
  const center = size / 2;
  const spinStyle = {
    transformOrigin: `${center}px ${center}px`,
    animation: isPlaying ? 'vinylSpin 3s linear infinite' : 'none',
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <style>{`
        @keyframes vinylSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <g style={spinStyle}>
        <circle cx={center} cy={center} r={center - 2} fill={vinylColor} />
        {[0.82, 0.72, 0.62, 0.52, 0.42, 0.34].map((ratio, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={center * ratio}
            fill="none"
            stroke={grooveColor}
            strokeWidth="0.5"
            opacity="0.35"
          />
        ))}
        <circle cx={center} cy={center} r={center * 0.3} fill={labelColor} />
        <circle cx={center} cy={center} r={center * 0.3} fill="none" stroke={accentLabel} strokeWidth="0.5" opacity="0.4" />
        <circle cx={center} cy={center} r={center * 0.06} fill={centerColor} />
      </g>
      <ellipse
        cx={center * 0.65}
        cy={center * 0.65}
        rx={center * 0.4}
        ry={center * 0.14}
        fill="white"
        opacity="0.05"
        transform={`rotate(-45 ${center * 0.65} ${center * 0.65})`}
      />
    </svg>
  );
};

const ResponsiveVinyl = (props) => {
  const size = useBreakpointValue({ base: 100, sm: 115, md: 130 }) || 130;
  return <VinylRecord {...props} size={size} />;
};

const VinylMusicCard = ({ songs }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const borderColor = useColorModeValue("gray.200", "gray.700");
  const vinylColor = useColorModeValue("#0a0a0a", "#0a0a0a");
  const labelColor = useColorModeValue("#1a1a1a", "#e8e8e8");
  const accentLabel = useColorModeValue("#e8e8e8", "#1a1a1a");
  const grooveColor = useColorModeValue("#444", "#666");
  const centerColor = useColorModeValue("#fafafa", "#fafafa");
  const mutedColor = useColorModeValue("gray.500", "gray.400");
  const subtleColor = useColorModeValue("gray.400", "gray.500");
  const activeBg = useColorModeValue("gray.100", "whiteAlpha.100");
  const activeBorder = useColorModeValue("gray.900", "whiteAlpha.900");
  const linkHoverColor = useColorModeValue("gray.900", "white");

  const currentSong = songs[currentIndex];
  const songParts = currentSong.text.split(" - ");
  const songTitle = songParts[0];
  const songArtist = songParts[1] || "";

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % songs.length);
      }, 12000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, songs.length]);

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
        music i'd tell ya to listen to
      </Text>

      <HStack spacing={{ base: 3, md: 4 }} align="center" height="148px">
        <Box flexShrink={0}>
          <ResponsiveVinyl
            isPlaying={isPlaying}
            vinylColor={vinylColor}
            labelColor={labelColor}
            grooveColor={grooveColor}
            centerColor={centerColor}
            accentLabel={accentLabel}
          />
        </Box>

        <Stack gap={2} flex={1} minWidth={0} align="flex-start" textAlign="left">
          <Stack gap={1} align="flex-start" textAlign="left" width="100%">
            <Link
              href={currentSong.link}
              isExternal
              textDecoration="underline"
              textUnderlineOffset="3px"
              textDecorationThickness="1px"
              textDecorationColor={mutedColor}
              _hover={{
                color: linkHoverColor,
                textDecoration: "underline",
                textDecorationColor: linkHoverColor,
              }}
              width="100%"
            >
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="semibold"
                lineHeight="1.25"
                noOfLines={2}
                textAlign="left"
              >
                {songTitle} <Box as="span" fontSize="0.85em" opacity={0.7}>↗</Box>
              </Text>
            </Link>
            <Text fontSize="xs" color={mutedColor} noOfLines={1} textAlign="left">
              {songArtist}
            </Text>
          </Stack>

          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            size="sm"
            variant="ghost"
            borderRadius="full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <LuPause size={14} /> : <LuPlay size={14} />}
          </IconButton>
        </Stack>
      </HStack>

      <Box
        borderTop="1px solid"
        borderColor={borderColor}
        paddingTop={2}
        maxHeight="130px"
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          '&::-webkit-scrollbar-thumb': { background: 'rgba(128,128,128,0.3)', borderRadius: '2px' },
          '&::-webkit-scrollbar-thumb:hover': { background: 'rgba(128,128,128,0.5)' },
        }}
      >
        <Stack gap={0}>
          {songs.map((song, i) => {
            const parts = song.text.split(" - ");
            const isActive = i === currentIndex;
            return (
              <HStack
                key={i}
                spacing={2}
                paddingY={1.5}
                paddingX={2}
                borderRadius="sm"
                borderLeft="2px solid"
                borderColor={isActive ? activeBorder : "transparent"}
                bg={isActive ? activeBg : "transparent"}
                cursor="pointer"
                onClick={() => setCurrentIndex(i)}
                _hover={{ bg: activeBg }}
                transition="background 0.15s ease, border-color 0.15s ease"
              >
                <Text
                  fontSize="2xs"
                  color={subtleColor}
                  fontFamily="mono"
                  width="18px"
                  flexShrink={0}
                >
                  {String(i + 1).padStart(2, '0')}
                </Text>
                <Text
                  fontSize="xs"
                  noOfLines={1}
                  fontWeight={isActive ? "medium" : "normal"}
                  flex={1}
                  minWidth={0}
                  textAlign="left"
                >
                  {parts[0]}
                </Text>
                <Text fontSize="2xs" color={mutedColor} noOfLines={1} flexShrink={0} maxWidth="40%" textAlign="right">
                  {parts[1]}
                </Text>
              </HStack>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default VinylMusicCard;

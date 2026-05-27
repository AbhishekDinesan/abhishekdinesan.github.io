import { useState } from "react";
import { Stack, Text, Box } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const HobbyIllustration = ({ index, fg, bg, accent }) => {
  const illustrations = [
    <svg key="tech" width="100%" height="100%" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="100" height="80" fill={bg} />
      <g stroke={fg} strokeWidth="0.6" fill="none" opacity="0.35">
        <line x1="0" y1="20" x2="32" y2="20" />
        <line x1="0" y1="35" x2="32" y2="35" />
        <line x1="0" y1="50" x2="32" y2="50" />
        <line x1="0" y1="65" x2="32" y2="65" />
        <line x1="68" y1="20" x2="100" y2="20" />
        <line x1="68" y1="35" x2="100" y2="35" />
        <line x1="68" y1="50" x2="100" y2="50" />
        <line x1="68" y1="65" x2="100" y2="65" />
      </g>
      <rect x="32" y="14" width="36" height="52" fill={fg} stroke={fg} strokeWidth="1" />
      <rect x="38" y="20" width="24" height="32" fill={bg} stroke={bg} strokeWidth="0.5" />
      <text x="50" y="40" textAnchor="middle" fill={fg} fontSize="8" fontWeight="700" fontFamily="monospace">AI</text>
      <circle cx="42" cy="58" r="1.2" fill={accent} />
      <circle cx="50" cy="58" r="1.2" fill={accent} />
      <circle cx="58" cy="58" r="1.2" fill={accent} />
    </svg>,
    <svg key="guitar" width="100%" height="100%" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="100" height="80" fill={bg} />
      <ellipse cx="32" cy="56" rx="22" ry="18" fill={fg} stroke={fg} strokeWidth="1" />
      <ellipse cx="32" cy="56" rx="6" ry="4" fill={bg} stroke={bg} />
      <line x1="44" y1="46" x2="78" y2="14" stroke={fg} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="76" y="6" width="14" height="14" rx="1.5" fill={fg} stroke={fg} strokeWidth="1" transform="rotate(45 83 13)" />
      <g stroke={accent} strokeWidth="0.4" opacity="0.7">
        <line x1="44" y1="48" x2="76" y2="16" />
        <line x1="46" y1="50" x2="78" y2="18" />
        <line x1="48" y1="52" x2="80" y2="20" />
      </g>
      <text x="80" y="72" fill={fg} fontSize="8" fontFamily="serif" opacity="0.5">♪</text>
      <text x="14" y="20" fill={fg} fontSize="9" fontFamily="serif" opacity="0.4">♫</text>
    </svg>,
    <svg key="mountain" width="100%" height="100%" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="100" height="80" fill={bg} />
      <circle cx="78" cy="20" r="7" fill={accent} stroke={fg} strokeWidth="1" />
      <path d="M 0 58 L 22 30 L 36 48 L 56 20 L 76 50 L 100 36 L 100 80 L 0 80 Z" fill={fg} stroke={fg} strokeWidth="1" />
      <path d="M 22 30 L 28 38 L 26 42 L 30 46" stroke={bg} strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M 56 20 L 60 28 L 58 34 L 62 38" stroke={bg} strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M 0 64 L 30 62 L 50 66 L 70 64 L 100 66" stroke={bg} strokeWidth="0.6" fill="none" opacity="0.4" strokeDasharray="2,1.5" />
      <g fill={fg} stroke={bg} strokeWidth="0.3">
        <polygon points="14,60 16,54 18,60" />
        <polygon points="42,58 44,52 46,58" />
        <polygon points="68,62 70,56 72,62" />
      </g>
    </svg>,
    <svg key="coffee" width="100%" height="100%" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="100" height="80" fill={bg} />
      <g stroke={fg} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6">
        <path d="M 38 6 c -3 4 3 6 0 10" />
        <path d="M 48 4 c -3 4 3 6 0 10" />
        <path d="M 58 6 c -3 4 3 6 0 10" />
      </g>
      <path d="M 26 26 L 28 64 a 7 7 0 0 0 7 7 L 60 71 a 7 7 0 0 0 7 -7 L 70 26 Z" fill={fg} stroke={fg} strokeWidth="1" />
      <ellipse cx="48" cy="27" rx="22" ry="4" fill={bg} stroke={fg} strokeWidth="1" />
      <ellipse cx="48" cy="27" rx="16" ry="2" fill={accent} opacity="0.4" />
      <path d="M 70 36 a 9 9 0 0 1 9 9 a 9 9 0 0 1 -9 9" stroke={fg} strokeWidth="2.5" fill="none" />
      <path d="M 28 73 L 66 73 L 76 78 L 18 78 Z" fill={fg} stroke={fg} strokeWidth="1" />
    </svg>,
    <svg key="roadtrip" width="100%" height="100%" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="100" height="80" fill={bg} />
      <path d="M 0 22 L 100 18" stroke={fg} strokeWidth="0.5" fill="none" opacity="0.3" />
      <circle cx="14" cy="14" r="2.5" fill={accent} opacity="0.5" />
      <path d="M 0 50 L 100 50 L 100 80 L 0 80 Z" fill={fg} opacity="0.85" />
      <g stroke={bg} strokeWidth="1" strokeDasharray="6,5" opacity="0.7">
        <line x1="0" y1="65" x2="100" y2="65" />
      </g>
      <g transform="translate(28, 32)">
        <path d="M 4 14 L 8 6 L 30 6 L 36 14 L 42 14 L 44 22 L 4 22 L 2 22 Z" fill={fg} stroke={fg} strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 10 8 L 14 12 L 24 12 L 28 8 Z" fill={bg} opacity="0.5" />
        <path d="M 28 8 L 32 12 L 35 12 L 33 8 Z" fill={bg} opacity="0.5" />
        <circle cx="12" cy="22" r="4" fill={bg} stroke={fg} strokeWidth="1.2" />
        <circle cx="12" cy="22" r="1.5" fill={fg} />
        <circle cx="34" cy="22" r="4" fill={bg} stroke={fg} strokeWidth="1.2" />
        <circle cx="34" cy="22" r="1.5" fill={fg} />
      </g>
      <g stroke={fg} strokeWidth="1.2" strokeLinecap="round" opacity="0.5">
        <line x1="6" y1="38" x2="20" y2="38" />
        <line x1="2" y1="42" x2="22" y2="42" />
        <line x1="8" y1="46" x2="24" y2="46" />
      </g>
    </svg>,
  ];

  return illustrations[index % illustrations.length];
};

const CrumpledPaper = ({ width, height, top, left, right, rotation, color, lineColor, opacity = 0.9, zIndex = 1, hasLines = false }) => (
  <Box
    position="absolute"
    width={width}
    height={height}
    top={top}
    left={left}
    right={right}
    transform={`rotate(${rotation}deg)`}
    zIndex={zIndex}
    opacity={opacity}
    pointerEvents="none"
  >
    <svg width="100%" height="100%" viewBox="0 0 100 70" preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <filter id={`paper-${rotation}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>
      <path
        d="M 4 6 Q 2 3 8 4 L 92 2 Q 98 3 96 8 L 98 64 Q 96 68 90 66 L 8 68 Q 2 66 4 60 Z"
        fill={color}
        stroke={lineColor}
        strokeWidth="0.3"
        opacity="0.95"
      />
      <path
        d="M 20 12 Q 35 18 55 14 M 30 30 Q 50 26 70 32 M 25 48 Q 45 52 65 46"
        stroke={lineColor}
        strokeWidth="0.4"
        fill="none"
        opacity="0.25"
      />
      {hasLines && (
        <g stroke={lineColor} strokeWidth="0.4" opacity="0.4">
          <line x1="14" y1="22" x2="86" y2="22" />
          <line x1="14" y1="32" x2="80" y2="32" />
          <line x1="14" y1="42" x2="84" y2="42" />
          <line x1="14" y1="52" x2="76" y2="52" />
        </g>
      )}
    </svg>
  </Box>
);

const Doodle = ({ type, top, left, right, bottom, rotation = 0, color, size = 24, opacity = 0.55 }) => {
  const doodles = {
    arrow: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 3 14 Q 8 4 18 8" />
        <path d="M 18 8 L 14 5 M 18 8 L 16 13" />
      </svg>
    ),
    coffeeRing: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round">
        <path d="M 6 16 Q 6 8 16 7 Q 26 8 26 16 Q 26 24 16 25 Q 6 24 6 16 Z" strokeDasharray="0.5,0.8" />
        <path d="M 8 17 Q 8 10 16 9 Q 24 10 24 17" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
    tally: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round">
        <line x1="5" y1="4" x2="5" y2="20" />
        <line x1="9" y1="4" x2="9" y2="20" />
        <line x1="13" y1="4" x2="13" y2="20" />
        <line x1="17" y1="4" x2="17" y2="20" />
        <line x1="3" y1="18" x2="19" y2="6" />
      </svg>
    ),
    xmark: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </svg>
    ),
    bracket: (
      <svg width={size} height={size * 1.2} viewBox="0 0 20 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
        <path d="M 8 3 L 4 3 L 4 21 L 8 21" />
      </svg>
    ),
    underline: (
      <svg width={size * 1.6} height={size * 0.4} viewBox="0 0 40 10" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
        <path d="M 2 5 L 38 4" />
        <path d="M 4 7 L 36 6" opacity="0.5" />
      </svg>
    ),
    asterisk: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </svg>
    ),
    crosshatch: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
        <line x1="3" y1="3" x2="3" y2="21" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
        <line x1="21" y1="3" x2="21" y2="21" />
      </svg>
    ),
  };

  return (
    <Box
      position="absolute"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      transform={`rotate(${rotation}deg)`}
      zIndex={2}
      pointerEvents="none"
      opacity={opacity}
    >
      {doodles[type]}
    </Box>
  );
};

const WashiTape = ({ rotation, position, color, width = "22px", height = "9px" }) => (
  <Box
    position="absolute"
    width={width}
    height={height}
    bg={color}
    opacity={0.6}
    transform={`rotate(${rotation}deg)`}
    {...position}
    zIndex={20}
    style={{
      backgroundImage: `repeating-linear-gradient(45deg, transparent 0, transparent 1.5px, rgba(0,0,0,0.1) 1.5px, rgba(0,0,0,0.1) 2.5px)`,
    }}
    border="1px solid rgba(0,0,0,0.05)"
  />
);

const Polaroid = ({
  hobby,
  isActive,
  onClick,
  rotation,
  yOffset,
  zIndex,
  polaroidBg,
  photoBg,
  photoFg,
  photoAccent,
  captionColor,
  tapeColor,
  width,
  photoHeight,
}) => {
  const activeScale = 1.12;

  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      position="relative"
      width={width}
      flexShrink={0}
      transform={isActive
        ? `translateY(-12px) rotate(0deg) scale(${activeScale})`
        : `translateY(${yOffset}px) rotate(${rotation}deg) scale(1)`}
      transformOrigin="center center"
      transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
      zIndex={isActive ? 30 : zIndex}
      _hover={{
        transform: isActive
          ? `translateY(-12px) rotate(0deg) scale(${activeScale})`
          : `translateY(${yOffset - 4}px) rotate(${rotation * 0.5}deg) scale(1.04)`,
      }}
    >
      <Box
        bg={polaroidBg}
        padding="4px 4px 0 4px"
        boxShadow={isActive
          ? "0 8px 16px rgba(0,0,0,0.22), 0 2px 4px rgba(0,0,0,0.12)"
          : "0 3px 6px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)"}
        position="relative"
      >
        {isActive && (
          <>
            <WashiTape
              rotation={-15}
              position={{ top: "-4px", left: "6px" }}
              color={tapeColor}
            />
            <WashiTape
              rotation={10}
              position={{ top: "-3px", right: "8px" }}
              color={tapeColor}
            />
          </>
        )}

        <Box
          bg={photoBg}
          height={photoHeight}
          overflow="hidden"
          position="relative"
        >
          <HobbyIllustration index={hobby._index} fg={photoFg} bg={photoBg} accent={photoAccent} />
        </Box>

        <Box
          height={{ base: "22px", md: "28px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingTop="2px"
        >
          <Text
            fontSize={{ base: "9px", sm: "10px", md: "11px" }}
            color={captionColor}
            textAlign="center"
            lineHeight="1"
            noOfLines={1}
            fontFamily="'Caveat', 'Brush Script MT', cursive"
            fontWeight="600"
          >
            {hobby.shortLabel}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const shortLabels = ["emerging tech", "guitar nights", "trails & runs", "good coffee", "road trips"];
const rotations = [-8, 5, -3, 7, -5];
const yOffsets = [2, 6, 0, 4, 3];
const zIndexes = [3, 5, 4, 2, 1];

const PolaroidHobbiesCard = ({ hobbies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const borderColor = useColorModeValue("gray.200", "gray.700");
  const polaroidBg = useColorModeValue("#fafaf5", "#f0ede5");
  const scrapBg1 = useColorModeValue("#f0ebd9", "#3a362d");
  const scrapBg2 = useColorModeValue("#e8e2cd", "#2e2a22");
  const scrapBg3 = useColorModeValue("#f4eed8", "#403c32");
  const scrapLine = useColorModeValue("#8a8270", "#a8a08e");
  const photoBg = useColorModeValue("#1a1a1a", "#1a1a1a");
  const photoFg = useColorModeValue("#fafaf5", "#fafaf5");
  const photoAccent = useColorModeValue("#d4d0c4", "#d4d0c4");
  const captionColor = useColorModeValue("#1a1a1a", "#1a1a1a");
  const tapeColor = useColorModeValue("#e8e4d4", "#c9c5b8");
  const doodleColor = useColorModeValue("#3a3a3a", "#9a9a9a");
  const inkColor = useColorModeValue("#2a2a2a", "#bbb");
  const mutedColor = useColorModeValue("gray.500", "gray.400");

  const enriched = hobbies.map((h, i) => ({
    ...h,
    _index: i,
    shortLabel: shortLabels[i] || "hobby",
  }));

  const currentHobby = enriched[currentIndex];

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
        things that i enjoy
      </Text>

      <Box
        position="relative"
        height="148px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <CrumpledPaper
          width={{ base: "85px", sm: "95px", md: "110px" }}
          height={{ base: "60px", sm: "70px", md: "80px" }}
          top="6px"
          left="-8px"
          rotation={-12}
          color={scrapBg1}
          lineColor={scrapLine}
          zIndex={1}
          hasLines={true}
        />
        <CrumpledPaper
          width={{ base: "70px", sm: "80px", md: "95px" }}
          height={{ base: "55px", sm: "60px", md: "70px" }}
          top="50px"
          right="-10px"
          rotation={8}
          color={scrapBg2}
          lineColor={scrapLine}
          zIndex={1}
          hasLines={false}
        />
        <CrumpledPaper
          width={{ base: "60px", sm: "65px", md: "75px" }}
          height={{ base: "45px", sm: "50px", md: "60px" }}
          top="-8px"
          right="35%"
          rotation={-5}
          color={scrapBg3}
          lineColor={scrapLine}
          zIndex={1}
          hasLines={true}
        />

        <Doodle type="coffeeRing" top="8px" left="3%" rotation={-8} color={doodleColor} size={28} opacity={0.4} />
        <Doodle type="tally" bottom="8px" left="8%" rotation={-4} color={doodleColor} size={18} opacity={0.5} />
        <Doodle type="xmark" top="14px" right="14%" rotation={12} color={doodleColor} size={14} opacity={0.55} />
        <Doodle type="underline" bottom="14px" right="22%" rotation={-3} color={doodleColor} size={16} opacity={0.5} />
        <Doodle type="asterisk" top="48%" left="2%" rotation={0} color={doodleColor} size={11} opacity={0.45} />
        <Doodle type="bracket" top="4px" right="3%" rotation={0} color={doodleColor} size={14} opacity={0.4} />
        <Doodle type="crosshatch" bottom="2px" right="4%" rotation={6} color={doodleColor} size={16} opacity={0.3} />

        <Box
          position="absolute"
          top="4px"
          right="8%"
          transform="rotate(-4deg)"
          zIndex={2}
          fontFamily="monospace"
          fontSize={{ base: "8px", md: "9px" }}
          fontWeight="700"
          letterSpacing="0.15em"
          color={inkColor}
          opacity={0.5}
          pointerEvents="none"
          whiteSpace="nowrap"
        >
          NO. 04 / 05
        </Box>
        <Box
          position="absolute"
          bottom="4px"
          left="38%"
          transform="rotate(2deg)"
          zIndex={2}
          fontFamily="monospace"
          fontSize={{ base: "7px", md: "8px" }}
          letterSpacing="0.1em"
          color={inkColor}
          opacity={0.45}
          pointerEvents="none"
          whiteSpace="nowrap"
        >
          REC. 02.26
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          position="relative"
          zIndex={5}
          paddingX={{ base: "2px", md: "4px" }}
        >
          {enriched.map((hobby, i) => (
            <Box
              key={hobby._index}
              marginLeft={i === 0 ? 0 : { base: "-12px", sm: "-10px", md: "-8px" }}
            >
              <Polaroid
                hobby={hobby}
                isActive={i === currentIndex}
                onClick={() => setCurrentIndex(i)}
                rotation={rotations[i % rotations.length]}
                yOffset={yOffsets[i % yOffsets.length]}
                zIndex={zIndexes[i % zIndexes.length]}
                polaroidBg={polaroidBg}
                photoBg={photoBg}
                photoFg={photoFg}
                photoAccent={photoAccent}
                captionColor={captionColor}
                tapeColor={tapeColor}
                width={{ base: "58px", sm: "66px", md: "76px" }}
                photoHeight={{ base: "48px", sm: "56px", md: "66px" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Stack gap={1} paddingTop={3} borderTop="1px solid" borderColor={borderColor}>
        <Text fontSize={{ base: "sm", md: "sm" }} fontWeight="medium" textAlign="left" lineHeight="1.4">
          {currentHobby.text}
        </Text>
        <Text fontSize="xs" color={mutedColor} fontStyle="italic" textAlign="left">
          tap a photo to switch
        </Text>
      </Stack>
    </Stack>
  );
};

export default PolaroidHobbiesCard;

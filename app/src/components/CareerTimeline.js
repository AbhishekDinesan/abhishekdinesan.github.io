import { Box, Heading, Text, VStack, HStack, Badge } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import "../styles/TimelineAnimation.css";
import TimelineData from "../info/CareerTimeline.json";

const CareerTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "blue";
      case "education":
        return "purple";
      case "project":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <Box
      ref={timelineRef}
      className="career-timeline"
      padding={{ base: "1.5rem", md: "2rem" }}
      marginBottom={{ base: "2rem", md: "3rem" }}
    >
      <Box textAlign="center" mb={{ base: 4, md: 6 }}>
        <Heading size={{ base: "lg", md: "xl" }} mb={2}>
          journey
        </Heading>
      </Box>

      <VStack align="stretch" gap={0} position="relative">
        <Box
          className="timeline-line"
          position="absolute"
          left={{ base: "20px", md: "50%" }}
          top="0"
          bottom="0"
          width="2px"
          bg="border.emphasized"
          transform={{ base: "none", md: "translateX(-50%)" }}
        />

        {TimelineData.map((item, index) => (
          <Box
            key={index}
            className={`timeline-item ${visibleItems.includes(index) ? "visible" : ""}`}
            data-index={index}
            position="relative"
            paddingBottom={{ base: 6, md: 8 }}
          >
            <Box
              className="timeline-dot"
              position="absolute"
              left={{ base: "20px", md: "50%" }}
              top="0"
              width={{ base: "12px", md: "16px" }}
              height={{ base: "12px", md: "16px" }}
              borderRadius="full"
              bg={`${getTypeColor(item.type)}.500`}
              border="3px solid"
              borderColor="bg.panel"
              transform={{ base: "translateX(-50%)", md: "translate(-50%, 0)" }}
              zIndex={2}
            />

            <HStack
              align="start"
              justify={{ base: "flex-start", md: index % 2 === 0 ? "flex-end" : "flex-start" }}
              paddingLeft={{ base: "50px", md: 0 }}
              width="100%"
            >
              <Box
                width={{ base: "100%", md: "45%" }}
                marginLeft={{ base: 0, md: index % 2 === 0 ? 0 : "55%" }}
                marginRight={{ base: 0, md: index % 2 === 0 ? "55%" : 0 }}
              >
                <Box
                  className="timeline-content"
                  padding={{ base: 3, md: 4 }}
                  borderRadius="lg"
                  bg="bg.muted"
                  border="1px solid"
                  borderColor="border.muted"
                  _hover={{
                    borderColor: `${getTypeColor(item.type)}.500`,
                    shadow: "md",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  <HStack justify="space-between" mb={2}>
                    <Badge
                      colorPalette={getTypeColor(item.type)}
                      size="sm"
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      {item.year}
                    </Badge>
                    <Text fontSize={{ base: "lg", md: "xl" }}>{item.icon}</Text>
                  </HStack>
                  
                  <Heading size={{ base: "xs", md: "sm" }} mb={1}>
                    {item.title}
                  </Heading>
                  
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color="fg.muted"
                    fontWeight="medium"
                    mb={2}
                  >
                    {item.company}
                  </Text>
                  
                  <Text fontSize={{ base: "xs", md: "sm" }} color="fg.subtle">
                    {item.description}
                  </Text>
                </Box>
              </Box>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CareerTimeline;


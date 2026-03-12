import { Box, Text, SimpleGrid, Stack, HStack, Badge } from "@chakra-ui/react";

const CareerPage = () => {
    const past = [
        "software engineer intern @ tesla",
        "full-stack engineer @ tradable bits",
        "product engineer intern @ ontario teachers' pension plan"
    ];

    const present = [
        "undergraduate research @ university of waterloo with prof abouee-mehrizi",
        "tinkering with AI-driven CNC machining"
    ];

    const future = [
        "incoming on the drive-alpha team @ nvidia",
    ];

    return (
        <div style={{ padding: 'clamp(0.5rem, 2vw, 1rem)' }}>
            <Stack gap={{ base: 6, md: 8 }} paddingTop={{ base: "1em", md: "2em" }}>
                <Box textAlign="center">
                    <Text
                        color="fg.default"
                        maxWidth="760px"
                        margin="0 auto"
                        fontSize={{ base: "md", md: "lg" }}
                        lineHeight="1.7"
                    >
                        first-principles engineer w/ strong product sense
                    </Text>
                    <HStack justify="center" gap={2} mt={4} flexWrap="wrap">
                        <Badge colorPalette="purple" variant="subtle">reinforcement learning</Badge>
                        <Badge colorPalette="red" variant="subtle">natural language processing</Badge>
                        <Badge colorPalette="teal" variant="subtle">computer vision</Badge>
                        <Badge colorPalette="orange" variant="subtle">vision-language-action</Badge>
                    </HStack>
                </Box>

                <Box
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    padding={{ base: 4, md: 6 }}
                >
                    <Text fontSize={{ base: "xs", md: "sm" }} color="fg.muted" mb={2}>
                        thesis
                    </Text>
                    <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.8">
                    The next wave of innovation is physical. The models that matter will understand the real world, not just language.
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
                    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" padding={{ base: 4, md: 5 }}>
                        <Text fontSize={{ base: "xs", md: "sm" }} color="fg.muted" mb={3}>
                            past
                        </Text>
                        <Stack as="ul" gap={3} pl={4}>
                            {past.map((item) => (
                                <Text as="li" key={item} fontSize={{ base: "sm", md: "sm" }}>
                                    {item}
                                </Text>
                            ))}
                        </Stack>
                    </Box>

                    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" padding={{ base: 4, md: 5 }}>
                        <Text fontSize={{ base: "xs", md: "sm" }} color="fg.muted" mb={3}>
                            present
                        </Text>
                        <Stack as="ul" gap={3} pl={4}>
                            {present.map((item) => (
                                <Text as="li" key={item} fontSize={{ base: "sm", md: "sm" }}>
                                    {item}
                                </Text>
                            ))}
                        </Stack>
                    </Box>

                    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" padding={{ base: 4, md: 5 }}>
                        <Text fontSize={{ base: "xs", md: "sm" }} color="fg.muted" mb={3}>
                            future
                        </Text>
                        <Stack as="ul" gap={3} pl={4}>
                            {future.map((item) => (
                                <Text as="li" key={item} fontSize={{ base: "sm", md: "sm" }}>
                                    {item}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Stack>
        </div>
    )
}

export default CareerPage

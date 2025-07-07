import { Alert, Box, SimpleGrid } from "@chakra-ui/react"
import { useState, useEffect } from "react"

const layouts = [
  [
    { bg: "gray.100", col: 3, row: 3 },
    { bg: "gray.200", col: 2, row: 2 },
    { bg: "gray.300", col: 1, row: 2 },
    { bg: "gray.400", col: 3, row: 1 },
    { bg: "gray.500", col: 2, row: 2 },
    { bg: "gray.600", col: 3, row: 2 },
    { bg: "gray.700", col: 1, row: 2 },
  ],
  [
    { bg: "blue.100", col: 2, row: 2 },
    { bg: "blue.200", col: 4, row: 3 },
    { bg: "blue.300", col: 1, row: 2 },
    { bg: "blue.400", col: 3, row: 1 },
    { bg: "blue.500", col: 2, row: 3 },
    { bg: "blue.600", col: 4, row: 2 },
  ]
]

const GalleryPage = () => {
  const [layoutIndex, setLayoutIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayoutIndex(prevIndex => prevIndex == 0 ? 1 : 0);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <Box>
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>404 Error</Alert.Title>
          <Alert.Description>
            Abhi is cooking...
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>

      <SimpleGrid columns={6} gap="40px" height="100vh" padding="20px">
        {layouts[layoutIndex].map((item, idx) => (
          <Box
            key={idx}
            bg={item.bg}
            gridColumn={`span ${item.col}`}
            gridRow={`span ${item.row}`}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GalleryPage;

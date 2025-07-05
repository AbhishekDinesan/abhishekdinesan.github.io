



import { Alert, Box, SimpleGrid} from "@chakra-ui/react"

const GalleryPage = () => {

  const photos = [] //figure out cloud storage mechanism and iterate through  

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
        <SimpleGrid columns={6} gap="40px" height={"100vh"} padding="20px">
          <Box bg="gray.100" gridColumn="span 3" gridRow="span 3" />
          <Box bg="gray.200" gridColumn="span 2" gridRow="span 2" />
          <Box bg="gray.300" gridColumn="span 1" gridRow="span 2" />
          <Box bg="gray.400" gridColumn="span 3" gridRow="span 1" />
          <Box bg="gray.500" gridColumn="span 2" gridRow="span 2" />
          <Box bg="gray.600" gridColumn="span 3" gridRow="span 2" />
          <Box bg="gray.700" gridColumn="span 1.5." gridRow="span 2" />
      </SimpleGrid>
      </Box>
    )
}

export default GalleryPage
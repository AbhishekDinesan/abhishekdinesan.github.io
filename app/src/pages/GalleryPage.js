



import { Alert } from "@chakra-ui/react"

const GalleryPage = () => {
    return (
        <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>404 Error</Alert.Title>
          <Alert.Description>
            Abhi is cooking...
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    )
}

export default GalleryPage
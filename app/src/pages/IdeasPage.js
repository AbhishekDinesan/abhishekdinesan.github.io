

import { Alert } from "@chakra-ui/react"

const IdeasPage = () => {
    return (
        <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>404 Error</Alert.Title>
          <Alert.Description>
            Abhi has yet to build this page. Will be mimicking a blog.
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    )
}

export default IdeasPage
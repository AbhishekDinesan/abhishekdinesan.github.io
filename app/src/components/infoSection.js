import { Stack, Text, List, ListItem, Link, Show, Spinner, Center, VStack, Box } from "@chakra-ui/react";

const InfoSection = ({ sectionHeading, infoArray, variant = "default", showBullets = true }) => {
  const isCardVariant = variant === "card";

  return (
    <Stack
      gap={{ base: 2, md: 3 }}
      border={isCardVariant ? "1px solid" : "none"}
      borderColor={isCardVariant ? "gray.200" : "transparent"}
      borderRadius={isCardVariant ? "lg" : "none"}
      padding={isCardVariant ? { base: "0.9em", md: "1.1em" } : "0"}
      background={isCardVariant ? "transparent" : "transparent"}
      shadow={isCardVariant ? "xs" : "none"}
      minHeight={isCardVariant ? "100%" : "auto"}
    >
      <Text 
        textAlign="left" 
        padding={{ base: "0.75em", md: "1em" }} 
        textStyle={{ base: "md", md: "lg" }}
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="normal"
        letterSpacing={isCardVariant ? "0.005em" : "normal"}
      >
        {sectionHeading}
      </Text>
      <Show
        when={Array.isArray(infoArray) && infoArray.length > 0}
        fallback={<Center>
                    <VStack>
                      <Spinner 
                        borderWidth={{ base: "3px", md: "5px" }} 
                        size={{ base: 'lg', md: 'xl' }} 
                        justifyItems={'center'} 
                        alignItems={'center'} 
                        margin={{ base: '20px', md: '35px' }}
                      /> 
                    </VStack>
                </Center>}>
      <List.Root listStyleType={showBullets ? "disc" : "none"} textAlign="left" paddingBottom={{ base: "0.5em", md: "1em" }} >
        <Stack 
          as="ul" 
          spacing={{ base: 2, md: 3 }} 
          listStyleType={showBullets ? "disc" : "none"} 
          pl={showBullets ? { base: "2em", md: "3em" } : { base: "0.75em", md: "1em" }} 
          textAlign="left"
        >
        {infoArray && infoArray.map((item, index) => (
          <ListItem key={index}>
            <Box
              padding={isCardVariant ? { base: "0.2em", md: "0.25em" } : "0"}
            >
              {item.link ? (
                <Link
                  href={item.link}
                  isExternal
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                >
                  <Text textStyle="sm" fontSize={{ base: "xs", md: "sm" }}>
                    {item.text} <Box as="span" fontSize="0.9em">↗</Box>
                  </Text>
                </Link>
              ) : (
                <Text textStyle="sm" fontSize={{ base: "xs", md: "sm" }}>{item.text}</Text>
              )}
            </Box>
          </ListItem>
        ))}
        </Stack>
    </List.Root>
    </Show>
    </Stack>
  );
};

export default InfoSection
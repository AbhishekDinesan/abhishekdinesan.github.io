import { Stack, Text, List, ListItem, Link, Show, Spinner, Center, VStack} from "@chakra-ui/react";

const InfoSection = ({ sectionHeading, infoArray}) => {
  return (
    <Stack gap={{ base: 2, md: 3 }}>
      <Text 
        textAlign="left" 
        padding={{ base: "0.75em", md: "1em" }} 
        textStyle={{ base: "md", md: "lg" }}
        fontSize={{ base: "sm", md: "md" }}
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
      <List.Root listStyleType="disc" textAlign="left" paddingBottom={{ base: "0.5em", md: "1em" }} >
        <Stack 
          as="ul" 
          spacing={{ base: 1, md: 2 }} 
          listStyleType="disc" 
          pl={{ base: "2em", md: "3em" }} 
          textAlign="left"
        >
        {infoArray && infoArray.map((item, index) => (
          <ListItem key={index}>
            {item.link ? (
              <Link href={item.link} isExternal>
                <Text textStyle="sm" fontSize={{ base: "xs", md: "sm" }}>{item.text}</Text>
              </Link>
            ) : (
              <Text textStyle="sm" fontSize={{ base: "xs", md: "sm" }}>{item.text}</Text>
            )}
          </ListItem>
        ))}
        </Stack>
    </List.Root>
    </Show>
    </Stack>
  );
};

export default InfoSection
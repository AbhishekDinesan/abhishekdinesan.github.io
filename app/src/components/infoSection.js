import { Stack, Text, List, ListItem, Link, Show, Spinner, Center, VStack} from "@chakra-ui/react";

const InfoSection = ({ sectionHeading, infoArray}) => {
  return (
    <Stack>
      <Text textAlign="left" padding="1em" textStyle="lg">
        {sectionHeading}
      </Text>
      <Show
        when={Array.isArray(infoArray) && infoArray.length > 0}
        fallback={<Center>
                    <VStack>
                      <Spinner borderWidth="5px" size='xl' justifyItems={'center'} alignItems={'center'} margin='35px' /> 
                    </VStack>
                </Center>}>
      <List.Root listStyleType="disc" textAlign="left" paddingBottom="1em" >
        <Stack as="ul" spacing={2} listStyleType="disc" pl="3em" textAlign="left">
        {infoArray && infoArray.map((item, index) => (
          <ListItem key={index}>
            {item.link ? (
              <Link href={item.link} isExternal>
                <Text textStyle="sm">{item.text}</Text>
              </Link>
            ) : (
              <Text textStyle="sm">{item.text}</Text>
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
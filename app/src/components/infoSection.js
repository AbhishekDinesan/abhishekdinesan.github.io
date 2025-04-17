import { Stack, Text, List, ListItem, Link} from "@chakra-ui/react";

const InfoSection = ({ sectionHeading, infoArray}) => {
  return (
    <Stack>
      <Text textAlign="left" padding="1em" textStyle="lg">
        {sectionHeading}
      </Text>
      <List.Root listStyleType="disc" textAlign="left" paddingBottom="1em" >
        <Stack as="ul" spacing={2} listStyleType="disc" pl="3em" textAlign="left">
            {infoArray.map((item, index) => (
                <ListItem key={index}>  
                {item.link ?
                    <Link href={item.link} isExternal>
                        <Text textStyle="sm">{item.text}</Text>
                    </Link>
                    : <Text textStyle="sm">{item.text}</Text>
                }
                </ListItem>
            ))}
        </Stack>
    </List.Root>
    </Stack>
  );
};

export default InfoSection
import { Card, Image, Flex, Box, Stack, Wrap, WrapItem, Separator} from "@chakra-ui/react"; 
import CustomIcon from './icons';
import TextButton from "./Button";
import { ButtonSizes, ButtonVariant } from "../utils/enums";

const CareerCard = ({
  cardTitle,
  link,
  location,
  skills,
  description,
  imageUrl
}) => {
  return (
    <Card.Root width="85%" height="auto">
      <Card.Body gap="4">
        <Flex
          direction="row"
          align="flex-start"
          justify="space-between"
          gap={4}
        >
          <Box flex="1">
            <Card.Title mt="2" fontSize={{ base: "lg", md: "xl" }}>
              {cardTitle}
            </Card.Title>
            <Card.Description>{location}</Card.Description>
          </Box>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Ontario Teachers"
              rounded="xl"
              boxSize="150px"
              objectFit="cover"
              border="2px solid"
              borderColor="gray.100"
              shadow="md"
              transition="all 0.3s"
              _hover={{ shadow: "lg" }}
            />
          )}
        </Flex>
        <Stack spacing={2} mt={4}>
          <Wrap spacing={2}>
            {skills.map((skill, index) => (
              <WrapItem key={index}>
                <TextButton size={ButtonSizes.small} variant={ButtonVariant.alt} text={skill} />
              </WrapItem>
            ))}
          </Wrap>
          <Separator marginTop={'1.5em' }size={'xl'} />
          <Card.Description>{description}</Card.Description>
        </Stack>
      </Card.Body>

      <Card.Footer justifyContent="flex-end" gap={2}>
        <TextButton variant={ButtonVariant.alt} text={'🔗'} link={link} />
      </Card.Footer>
    </Card.Root>
  );
};

const FaceCard = ({ cardType }) => {
  return(
  <CustomIcon iconName={cardType} />
  )
};

export { CareerCard, FaceCard };

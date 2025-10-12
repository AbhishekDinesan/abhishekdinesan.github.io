import { Card, Image, Flex, Box, Stack, Wrap, WrapItem, Separator} from "@chakra-ui/react"; 
import CustomIcon from './icons';
import TextButton from "./Button";
import { ButtonSizes, ButtonVariant } from "../utils/enums";
import GitHubStats from "./GitHubStats";

const CareerCard = ({
  cardTitle,
  link,
  location,
  skills,
  description,
  imageUrl,
  githubRepo
}) => {
  return (
    <Card.Root 
      width={{ base: "95%", md: "90%", lg: "85%" }} 
      height="auto"
      maxWidth="600px"
    >
      <Card.Body gap={{ base: "3", md: "4" }} padding={{ base: "4", md: "6" }}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          align="flex-start"
          justify="space-between"
          gap={{ base: 3, md: 4 }}
        >
          <Box flex="1">
            <Card.Title mt="2" fontSize={{ base: "md", md: "lg", lg: "xl" }}>
              {cardTitle}
            </Card.Title>
            <Card.Description fontSize={{ base: "xs", md: "sm" }}>
              {location}
            </Card.Description>
          </Box>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={cardTitle}
              rounded="xl"
              boxSize={{ base: "100px", md: "120px", lg: "150px" }}
              objectFit="cover"
              border="2px solid"
              borderColor="gray.100"
              shadow="md"
              transition="all 0.3s"
              _hover={{ shadow: "lg" }}
              flexShrink={0}
            />
          )}
        </Flex>
        <Stack spacing={{ base: 1, md: 2 }} mt={{ base: 2, md: 4 }}>
          <Wrap spacing={{ base: 1, md: 2 }}>
            {skills.map((skill, index) => (
              <WrapItem key={index}>
                <TextButton size={ButtonSizes.small} variant={ButtonVariant.alt} text={skill} />
              </WrapItem>
            ))}
          </Wrap>
          {githubRepo && (
            <Box mt={2} mb={1}>
              <GitHubStats repoUrl={githubRepo} />
            </Box>
          )}
          <Separator marginTop={{ base: '1em', md: '1.5em' }} size={'xl'} />
          <Card.Description fontSize={{ base: "xs", md: "sm" }}>
            {description}
          </Card.Description>
        </Stack>
      </Card.Body>

      <Card.Footer justifyContent="flex-end" gap={2} padding={{ base: "3", md: "4" }}>
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

const WritingCard = ({ title, description }) =>{
  return (
    <Card.Root 
      width={{ base: "100%", md: "95%", lg: "90%" }} 
      height="auto"
      maxWidth="800px"
    >
      <Card.Body gap={{ base: "3", md: "4" }} padding={{ base: "4", md: "6" }}>
        <Flex
          direction="row"
          align="flex-start"
          justify="space-between"
          gap={{ base: 3, md: 4 }}
        >
          <Box flex="1">
            <Card.Title mt="2" fontSize={{ base: "md", md: "lg" }}>
              {title}
            </Card.Title>
          </Box>
        </Flex>
        <Stack spacing={{ base: 1, md: 2 }}>
          <Card.Description fontSize={{ base: "xs", md: "sm" }}>
            {description}
          </Card.Description>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}

export { CareerCard, FaceCard, WritingCard };

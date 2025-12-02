import { Card, Image, Flex, Box, Stack, Wrap, WrapItem, Separator, Text} from "@chakra-ui/react"; 
import CustomIcon from './icons';
import TextButton from "./Button";
import { ButtonSizes, ButtonVariant } from "../utils/enums";
import GitHubStats from "./GitHubStats";
import { useColorModeValue } from "./ui/color-mode";

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

const WritingCard = ({
  title,
  description,
  eyebrow,
  meta,
  isInteractive = false,
  ...cardProps
}) =>{
  const bg = useColorModeValue("white", "#0b0b0b");
  const hoverBg = useColorModeValue("gray.50", "#0f0f0f");
  const border = useColorModeValue("rgba(0,0,0,0.08)", "rgba(255,255,255,0.08)");
  const hoverBorder = useColorModeValue("rgba(0,0,0,0.12)", "rgba(255,255,255,0.18)");
  const titleColor = useColorModeValue("gray.900", "whiteAlpha.900");
  const descriptionColor = useColorModeValue("gray.700", "gray.200");
  const eyebrowColor = useColorModeValue("gray.600", "gray.500");
  const metaColor = useColorModeValue("gray.500", "gray.500");

  return (
    <Card.Root 
      width="100%" 
      height="auto"
      maxWidth="100%"
      background={bg}
      border="1px solid"
      borderColor={border}
      shadow="lg"
      rounded="xl"
      position="relative"
      overflow="hidden"
      cursor={isInteractive ? "pointer" : "default"}
      transition="all 0.2s ease"
      _hover={
        isInteractive 
          ? { borderColor: hoverBorder, background: hoverBg }
          : undefined
      }
      {...cardProps}
    >
      <Card.Body gap={{ base: "3", md: "4" }} padding={{ base: "5", md: "7" }} position="relative">
        <Stack spacing={{ base: 2, md: 3 }}>
          {eyebrow && (
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="0.3em"
              color={eyebrowColor}
            >
              {eyebrow}
            </Text>
          )}
          <Card.Title mt="1" fontSize={{ base: "xl", md: "2xl" }} color={titleColor}>
            {title}
          </Card.Title>
          {description && (
            <Card.Description fontSize={{ base: "sm", md: "md" }} color={descriptionColor}>
              {description}
            </Card.Description>
          )}
          {meta && (
            <Text fontSize={{ base: "xs", md: "sm" }} color={metaColor}>
              {meta}
            </Text>
          )}
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}

export { CareerCard, FaceCard, WritingCard };

import React from "react";
import {
  Card,
  CardBody,
  Box,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaSpade } from "react-icons/fa";

const PlayingCard = ({ rank = "A", suit = "spade" }) => {
  const suitIcons = {
    spade: <FaSpade />,
    // You can add other suits here: heart, diamond, club
  };

  const suitColor = {
    spade: "black",
    club: "black",
    heart: "red.500",
    diamond: "red.500",
  };

  return (
    <Card
      width="150px"
      height="220px"
      border="1px solid"
      borderColor="gray.300"
      borderRadius="xl"
      bg="white"
      boxShadow="md"
    >
      <CardBody p={3}>
        <Flex direction="column" justify="space-between" height="100%">
          <Box color={suitColor[suit]}>
            <Text fontSize="2xl" fontWeight="bold">
              {rank}
            </Text>
            <Icon as={FaSpade} boxSize={5} />
          </Box>

          <Flex justify="center" align="center" flexGrow={1}>
            <Icon as={FaSpade} boxSize={10} color={suitColor[suit]} />
          </Flex>

          <Box
            color={suitColor[suit]}
            transform="rotate(180deg)"
            alignSelf="flex-end"
          >
            <Text fontSize="2xl" fontWeight="bold">
              {rank}
            </Text>
            <Icon as={FaSpade} boxSize={5} />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PlayingCard;

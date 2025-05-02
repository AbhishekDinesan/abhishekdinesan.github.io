import { FaceCard } from "../components/Card";
import { CardTypes } from '../utils/enums';
import {
  HStack, Text, SimpleGrid, Box,
  Dialog, Portal, Button, 
} from "@chakra-ui/react";
import InfoSection from "../components/infoSection";
import Past from "../info/Past.json";
import Present from "../info/Present.json";
import { useState } from "react";
import { BsFillSuitSpadeFill } from "react-icons/bs";
import Timeline from "../info/Timeline.json";

const LandingPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (cardType) => {
    let selectedCardPayload = {}
    for (let year of Timeline){
      if (year.key == cardType){
        selectedCardPayload = year
      }
    }
    setSelectedCard(selectedCardPayload);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedCard(null);
  };

  const handleDialogChange = (open) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => setSelectedCard(null), 100);
    }
  };

  return (
    <div>
      <SimpleGrid marginBottom="3em" columns={{ base: 2, md: 3 }} spacing={10} paddingTop="2em">
        <InfoSection sectionHeading={"past"} infoArray={Past} />
        <InfoSection sectionHeading={"present"} infoArray={Present} />
        <InfoSection sectionHeading={"future"} />
      </SimpleGrid>

      <Dialog.Root open={isOpen} onOpenChange={handleDialogChange}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          {isOpen && selectedCard && (
            <Dialog.Content>
                <Dialog.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <BsFillSuitSpadeFill size='5em' />
                <Dialog.Title style={{ fontSize: '2em', textAlign: 'right' }}>
                  {selectedCard.year}
                </Dialog.Title>
                </Dialog.Header>
              <Dialog.Body>
              {selectedCard.elapsed === "true" ? (
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  {Object.values(selectedCard.text).map((value, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>{value}</li>
                  ))}
                </ul>
              ) : (
                <div style={{ textAlign: 'center' }}>
                Nice try bud - I'm not gonna reveal ALL my cards.
                </div>
              )}
              </Dialog.Body>
              <Dialog.Footer>
                <Button size="sm" onClick={closeDialog}>Close</Button>
              </Dialog.Footer>
            </Dialog.Content>
          )}
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>

      <HStack marginBottom="2em" spacing={20} maxWidth="100%" flexWrap="wrap">
        {Object.values(CardTypes).map((card) => (
          <Box
            key={card}
            _hover={{
              transform: "scale(1.5)",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(card)}
          >
            <FaceCard cardType={card} />
          </Box>
        ))}
      </HStack>

      <Text>A decade through a deck of cards (2022 - Present)</Text>
    </div>
  );
};

export default LandingPage;

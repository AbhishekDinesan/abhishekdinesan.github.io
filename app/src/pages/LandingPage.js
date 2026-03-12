import { FaceCard } from "../components/Card";
import { CardTypes } from '../utils/enums';
import {
  HStack, Text, SimpleGrid, Box,
  Dialog, Portal, Button, 
} from "@chakra-ui/react";
import InfoSection from "../components/infoSection";
import Past from "../info/Past.json";
import Present from "../info/Present.json";
import { useState, useEffect } from "react";
import { BsFillSuitSpadeFill } from "react-icons/bs";
import Timeline from "../info/Timeline.json";
import "../styles/CardShuffle.css";

const LandingPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isShuffling, setIsShuffling] = useState(true);
  const cardsToRender = Object.values(CardTypes).filter((card) => card !== "GiCard10Spades");

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

  useEffect(() => {
    // End shuffling animation after it completes
    const timer = setTimeout(() => {
      setIsShuffling(false);
    }, 2000); // Match this with CSS animation duration + delays
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: 'clamp(0.5rem, 2vw, 1rem)' }}>
      <SimpleGrid 
        marginBottom={{ base: "2em", md: "3em" }} 
        columns={{ base: 1, sm: 2, md: 3 }} 
        spacing={{ base: 6, md: 10 }} 
        paddingTop={{ base: "1em", md: "2em" }}
      >
        <InfoSection sectionHeading={"past"} infoArray={Past} />
        <InfoSection sectionHeading={"present"} infoArray={Present} />
        <InfoSection sectionHeading={"future"} />
      </SimpleGrid>

      <Dialog.Root open={isOpen} onOpenChange={handleDialogChange}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          {isOpen && selectedCard && (
            <Dialog.Content maxWidth={{ base: "90vw", md: "600px" }}>
                <Dialog.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <BsFillSuitSpadeFill size='clamp(3em, 8vw, 5em)' />
                <Dialog.Title style={{ fontSize: 'clamp(1.5em, 4vw, 2em)', textAlign: 'right' }}>
                  {selectedCard.year}
                </Dialog.Title>
                </Dialog.Header>
              <Dialog.Body>
              {selectedCard.elapsed === "true" ? (
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  {Object.values(selectedCard.text).map((value, index) => (
                    <li key={index} style={{ marginBottom: "8px", fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>{value}</li>
                  ))}
                </ul>
              ) : (
                <div style={{ textAlign: 'center', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Nice try buddy - I'm not gonna reveal ALL my cards.
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
<div
  className="card-container"
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
    gap: 'clamp(0.75rem, 2vw, 1.5rem)',
    padding: 'clamp(0.5rem, 2vw, 2rem)',
    width: '100%',
    boxSizing: 'border-box',
    perspective: '1000px',
  }}
>
  {cardsToRender.map((card, index) => (
    <Box
      key={card}
      className={`playing-card ${isShuffling ? 'shuffling' : ''}`}
      style={{
        animationDelay: `${index * 0.08}s`,
      }}
      _hover={{
        transform: 'scale(1.1) translateZ(20px)',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer',
        zIndex: 10,
      }}
      onClick={() => handleCardClick(card)}
    >
      <FaceCard cardType={card} />
    </Box>
  ))}
</div>
      <Text fontSize={{ base: "xs", md: "sm" }} paddingY={{ base: 2, md: 4 }}>
        A decade through a deck of cards (2022 - Present)
      </Text>
    </div>
  );
};

export default LandingPage;

import InfoSection from "../components/infoSection"
import {Stack, SimpleGrid, Image, Center} from "@chakra-ui/react"
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutMe from '../info/AboutMe.json';
import Music from '../info/Music.json';
import Books from "../info/Books.json";
import Hobbies from "../info/Hobbies.json"
import Foundations from "../info/Foundations.json"
import photo from '../static/abhi.jpg'


const PersonalPage = () => {
    const [rotationIndex, setRotationIndex] = useState(0);

    const sectionCards = [
        { sectionHeading: "things that i enjoy", infoArray: Hobbies },
        { sectionHeading: "books i've recently read", infoArray: Books },
        { sectionHeading: "music i'd tell ya to listen to", infoArray: Music },
        { sectionHeading: "foundational experiences", infoArray: Foundations }
    ];

    useEffect(() => {
        const rotateInterval = setInterval(() => {
            setRotationIndex((prev) => (prev + 1) % sectionCards.length);
        }, 8000);

        return () => clearInterval(rotateInterval);
    }, [sectionCards.length]);

    const rotatedCards = sectionCards.map((_, index) => (
        sectionCards[(index + rotationIndex) % sectionCards.length]
    ));

    return (
        <div style={{ padding: 'clamp(0.5rem, 2vw, 1rem)' }}>
            <Stack gap={{ base: 6, md: 8 }}>
            <SimpleGrid 
                columns={{ base: 1, md: 2 }} 
                spacing={{ base: 6, md: 10 }} 
                paddingTop={{ base: "1em", md: "2em" }}
            >
                <InfoSection
                    sectionHeading={
                        <Typewriter
                            words={['a little bit about me...']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1200}
                        />
                    }
                    infoArray={AboutMe}
                />
                <Center>
                <Image 
                    maxHeight={{ base: '250px', md: '350px' }} 
                    maxWidth={{ base: '100%', md: '500px' }} 
                    width="100%"
                    src={photo} 
                    alt="Abhi Dinesan" 
                    display='flex' 
                    alignContent={'center'} 
                    justifyContent={'center'}
                    objectFit="cover"
                    borderRadius="md"
                />
                </Center>
                </SimpleGrid>
                <SimpleGrid 
                    columns={{ base: 1, sm: 2 }} 
                    gap={{ base: 4, md: 6 }} 
                    paddingTop={{ base: "1em", md: "2em" }}
                    paddingX={{ base: "0.25em", md: "0.5em" }}
                >
                    {rotatedCards.map((card) => (
                        <motion.div
                            key={card.sectionHeading}
                            layout
                            transition={{
                                layout: { type: "spring", stiffness: 90, damping: 20, mass: 0.9 },
                                opacity: { duration: 0.25, ease: "easeOut" }
                            }}
                            initial={false}
                            animate={{ opacity: 1 }}
                        >
                            <InfoSection
                                sectionHeading={card.sectionHeading}
                                infoArray={card.infoArray}
                                variant="card"
                                showBullets={false}
                            />
                        </motion.div>
                    ))}
                </SimpleGrid>
            </Stack>
        </div>
    );
};

export default PersonalPage
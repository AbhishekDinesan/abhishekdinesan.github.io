import InfoSection from "../components/infoSection"
import VinylMusicCard from "../components/VinylMusicCard"
import BookCard from "../components/BookCard"
import PolaroidHobbiesCard from "../components/PolaroidHobbiesCard"
import TrophyShelfCard from "../components/TrophyShelfCard"
import {Stack, SimpleGrid, Image, Center} from "@chakra-ui/react"
import { Typewriter } from 'react-simple-typewriter';
import AboutMe from '../info/AboutMe.json';
import Music from '../info/Music.json';
import Books from "../info/Books.json";
import Hobbies from "../info/Hobbies.json"
import Foundations from "../info/Foundations.json"
import photo from '../static/abhi.jpg'
import Seo from "../components/Seo";


const PersonalPage = () => {
    const sectionCards = [
        { sectionHeading: "things that i enjoy", infoArray: Hobbies },
        { sectionHeading: "foundational experiences", infoArray: Foundations },
        { sectionHeading: "music i'd tell ya to listen to", infoArray: Music },
        { sectionHeading: "books i'd recommend", infoArray: Books }
    ];

    return (
        <div style={{ padding: 'clamp(0.5rem, 2vw, 1rem)' }}>
            <Seo
                title="Personal"
                description="A personal snapshot of Abhi Dinesan: interests, books, music, and formative experiences."
                path="/personal"
            />
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
                    {sectionCards.map((card) => (
                        <div key={card.sectionHeading}>
                            {card.sectionHeading === "music i'd tell ya to listen to" ? (
                                <VinylMusicCard songs={card.infoArray} />
                            ) : card.sectionHeading === "books i'd recommend" ? (
                                <BookCard books={card.infoArray} />
                            ) : card.sectionHeading === "things that i enjoy" ? (
                                <PolaroidHobbiesCard hobbies={card.infoArray} />
                            ) : card.sectionHeading === "foundational experiences" ? (
                                <TrophyShelfCard items={card.infoArray} />
                            ) : (
                                <InfoSection
                                    sectionHeading={card.sectionHeading}
                                    infoArray={card.infoArray}
                                    variant="card"
                                    showBullets={false}
                                />
                            )}
                        </div>
                    ))}
                </SimpleGrid>
            </Stack>
        </div>
    );
};

export default PersonalPage
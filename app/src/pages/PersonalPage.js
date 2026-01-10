import InfoSection from "../components/infoSection"
import {Stack, SimpleGrid, Image, Center} from "@chakra-ui/react"
import { Typewriter } from 'react-simple-typewriter';
import AboutMe from '../info/AboutMe.json';
import Music from '../info/Music.json';
import Books from "../info/Books.json";
import Hobbies from "../info/Hobbies.json"
import photo from '../static/abhi.jpg'


const PersonalPage = () => {
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
                    columns={{ base: 1, sm: 2, md: 3 }} 
                    spacing={{ base: 6, md: 10 }} 
                    paddingTop={{ base: "1em", md: "2em" }}
                >
                    <InfoSection sectionHeading={"things that i enjoy"} infoArray={Hobbies} />
                    <InfoSection sectionHeading={"music i'd tell ya to listen to"} infoArray={Music} />
                    <InfoSection sectionHeading={"books i've recently read"} infoArray={Books}/>
                </SimpleGrid>
            </Stack>
        </div>
    );
};

export default PersonalPage
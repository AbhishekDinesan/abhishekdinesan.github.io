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
        <div>
            <Stack>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} paddingTop="2em">
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
                <Image maxHeight='350px' maxWidth='500px' src={photo} alt="Dan Abramov" display='flex' alignContent={'center'} justifyContent={'center'} />
                </Center>
                </SimpleGrid>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={10} paddingTop="2em">
                    <InfoSection sectionHeading={"things that i enjoy"} infoArray={Hobbies} />
                    <InfoSection sectionHeading={"music i'd tell ya to listen to"} infoArray={Music} />
                    <InfoSection sectionHeading={"books i'd recently read"} infoArray={Books}/>
                </SimpleGrid>
            </Stack>
        </div>
    );
};

export default PersonalPage
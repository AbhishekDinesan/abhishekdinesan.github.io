import InfoSection from "../components/infoSection"
import {Stack, SimpleGrid, Image} from "@chakra-ui/react"
import { Typewriter } from 'react-simple-typewriter';
import AboutMe from '../info/AboutMe.json';
import Music from '../info/Music.json';
import Books from "../info/Books.json";
import Hobbies from "../info/Hobbies.json"
import Past from "../info/Past.json"
import Present from "../info/Present.json"


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
                <Image />
                </SimpleGrid>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={10} paddingTop="2em">
                    <InfoSection sectionHeading={"music i'd tell ya to listen to"} infoArray={Music} />
                    <InfoSection sectionHeading={"books i'd recently read"} infoArray={Books}/>
                    <InfoSection sectionHeading={"things that i enjoy"} infoArray={Hobbies} />
                    <InfoSection sectionHeading={"past"} infoArray={Past} />
                    <InfoSection sectionHeading={"present"} infoArray={Present}/>
                    <InfoSection sectionHeading={"future"} />
                </SimpleGrid>
            </Stack>
        </div>
    );
};

export default PersonalPage
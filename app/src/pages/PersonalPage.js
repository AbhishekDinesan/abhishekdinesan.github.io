import InfoSection from "../components/infoSection"
import {Stack, HStack} from "@chakra-ui/react"
import { Typewriter } from 'react-simple-typewriter';
import AboutMe from '../info/AboutMe.json';
import Music from '../info/Music.json';
import Books from "../info/Books.json";
import Hobbies from "../info/Hobbies.json"


const PersonalPage = () => {
    return(
        <div>
            <Stack>
                <InfoSection sectionHeading={
                    <Typewriter
                    words={['a little bit about me...']}
                    loop={0} 
                    cursor
                    cursorStyle='_'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1200}
                    />
                    } infoArray={AboutMe}  />
                <HStack style={{ paddingTop: '2em' }}>
                    <InfoSection sectionHeading={"music i'd tell ya to listen to"} infoArray={Music} />
                    <InfoSection sectionHeading={"books i'd recently read"} infoArray={Books}/>
                    <InfoSection sectionHeading={"things that i enjoy"} infoArray={Hobbies} />
                </HStack>
            </Stack>
           
        </div>
    )
}


export default PersonalPage
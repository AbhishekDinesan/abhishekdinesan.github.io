import { Card, HStack } from "@chakra-ui/react";
import {CustomCard, FaceCard} from "../components/Card"
import CustomIcon from "../components/icons";
import {CardTypes} from '../utils/enums'

const LandingPage = () => {
    return(
        <div>
            {/* <CustomCard cardTitle='yo' buttonText="Click Me" cardDescription="Description 1" /> */}
            <HStack>
            <FaceCard cardType={CardTypes.ace} />
            <FaceCard cardType={CardTypes.two} />
            <FaceCard cardType={CardTypes.three} />
            <FaceCard cardType={CardTypes.four} />
            </HStack>
        </div>
    )
}
    


export default LandingPage
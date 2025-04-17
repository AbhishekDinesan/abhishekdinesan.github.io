import {HStack } from "@chakra-ui/react";
import {FaceCard} from "../components/Card"
import {CardTypes} from '../utils/enums'

const LandingPage = () => {
    return(
        <div>
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
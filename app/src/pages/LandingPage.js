
import {FaceCard} from "../components/Card"
import {CardTypes} from '../utils/enums'
import { Center, HStack } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Center minH="80vh"  w="full">
      <HStack  spacing={20} maxWidth="100%">
        <div>
        <FaceCard cardType={CardTypes.ace} />
        </div>
        <div>
        <FaceCard cardType={CardTypes.two} />
        </div>
        <FaceCard cardType={CardTypes.three} />
        <FaceCard cardType={CardTypes.four} />
        <FaceCard cardType={CardTypes.five} />
        <FaceCard cardType={CardTypes.six} />
        <FaceCard cardType={CardTypes.seven} />
        <FaceCard cardType={CardTypes.eight} />
        <FaceCard cardType={CardTypes.nine} />
        <FaceCard cardType={CardTypes.ten} />
        <FaceCard cardType={CardTypes.jack} />
        <FaceCard cardType={CardTypes.queen} />
        <FaceCard cardType={CardTypes.king} />

      </HStack>
    </Center>
  );
};
    


export default LandingPage
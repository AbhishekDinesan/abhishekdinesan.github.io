
import {FaceCard} from "../components/Card"
import {CardTypes} from '../utils/enums'
import { Center, HStack, Text } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <div>
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
    <Text>my life; as told by a deck of cards</Text>
    </div>
  );
};
    


export default LandingPage
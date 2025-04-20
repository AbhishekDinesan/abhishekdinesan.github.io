import {Button, Card, Image } from "@chakra-ui/react"
import CustomIcon from './icons'



const CustomCard = ({cardTitle, buttonText, cardDescriptionOne, cardDescriptionTwo }) =>{
  return (
    <Card.Root width ='85%' height= 'auto' >
      <Card.Body gap="2">
        <Card.Title  mt="2">{cardTitle}</Card.Title>
        <Image src="/otpp.jpg" alt="Ontario Teachers" />
        <Card.Description>
          {cardDescriptionOne}
        </Card.Description>
        <Card.Description>
          {cardDescriptionTwo}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">{buttonText}</Button>
        <Button>{buttonText}</Button>
      </Card.Footer>
    </Card.Root>
  )
}


const FaceCard = ({ cardType }) => {
  return (
      <CustomIcon
        iconName={cardType}
      />
  );
};

export {CustomCard, FaceCard}
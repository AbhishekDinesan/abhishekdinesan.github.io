import {Button, Card } from "@chakra-ui/react"
import CustomIcon from './icons'



const CustomCard = ({cardTitle, buttonText, cardDescription }) =>{
  console.log({ cardTitle, buttonText, cardDescription })
  return (
    <Card.Root width="320px" height='500px'>
      <Card.Body gap="2">
        <Card.Title textAlign="right" mt="2">{cardTitle}</Card.Title>
        <Card.Description>
          {cardDescription}
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
        style={{
          position: 'absolute',
        }}
      />
  );
};

export {CustomCard, FaceCard}
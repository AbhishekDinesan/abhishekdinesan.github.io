import { Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom';

//https://www.chakra-ui.com/docs/components/button

const TextButton = ({size, variant, text, link}) => {
  return link ? (
    <Link to={link}>
    <Button size={size} variant={variant}>
      {text}
    </Button>
  </Link>
  ) : 
  (
  <Button size={size} variant={variant}>{text} </Button>
  );
}

export default TextButton
import { Button} from "@chakra-ui/react"

//https://www.chakra-ui.com/docs/components/button

const TextButton = ({size, variant, text}) => {
  return (
      <Button size={size} variant={variant}>{text}</Button>
  )
}

export default TextButton
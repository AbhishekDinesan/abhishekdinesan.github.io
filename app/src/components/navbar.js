import {HStack } from "@chakra-ui/react"
import TextButton from './Button'
import { ButtonSizes, ButtonVariant } from "../utils/enums"
import { ColorModeButton } from './ui/color-mode'

const Navbar = () => {
  return (
    <div style = {{margin: '20px'}}>
      <HStack justifyContent="space-between"  w="100%">
        <div>Abhi Dinesan</div>
        <HStack gap='6' align-items='flex-end'>
          <TextButton size={ButtonSizes.medium} variant={ButtonVariant.standard} text={'home'} link='/'/>
          <TextButton size={ButtonSizes.medium} variant={ButtonVariant.standard} text={'personal'} link="/personal"/>
          <TextButton size={ButtonSizes.medium} variant={ButtonVariant.standard} text={'career'} link="/career"/>
        </HStack>
        <ColorModeButton />
      </HStack>
    </div>
  )
}

export default Navbar
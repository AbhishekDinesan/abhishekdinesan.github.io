import { HStack, Box, IconButton, Drawer, VStack } from "@chakra-ui/react"
import TextButton from './Button'
import { ButtonSizes, ButtonVariant } from "../utils/enums"
import { ColorModeButton } from './ui/color-mode'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = ({ onClick }) => (
    <>
      <Box onClick={onClick}>
        <TextButton size={ButtonSizes.medium} variant={ButtonVariant.standard} text={'home'} link='/'/>
      </Box>
      <Box onClick={onClick}>
        <TextButton size={ButtonSizes.medium} variant={ButtonVariant.standard} text={'personal'} link="/personal"/>
      </Box>
      <Box onClick={onClick}>
        <TextButton size={ButtonSizes.medium} variant={ButtonVariant.standard} text={'career'} link="/career"/>
      </Box>
      <Box onClick={onClick}>
        <TextButton size={ButtonSizes.medium} variant={ButtonVariant.standard} text={'thoughts'} link="/thoughts"/>
      </Box>
    </>
  )

  return (
    <Box 
      style={{ 
        margin: 'clamp(10px, 2vw, 20px)',
        position: 'relative'
      }}
    >
      <HStack justifyContent="space-between" w="100%">
        <div>Abhi Dinesan</div>
        
        {/* Desktop Navigation Links */}
        <HStack 
          gap={{ base: '2', md: '4', lg: '6' }} 
          alignItems='center'
          display={{ base: 'none', md: 'flex' }}
        >
          <NavLinks />
        </HStack>

        {/* Right side - Color mode and menu */}
        <HStack gap="2">
          <ColorModeButton />
          <IconButton
            aria-label="Open menu"
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            size="md"
            display={{ base: 'flex', md: 'none' }}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </IconButton>
        </HStack>
      </HStack>

      {/* Mobile Menu Drawer */}
      <Drawer.Root open={isOpen} placement="end" onOpenChange={(e) => setIsOpen(e.open)}>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title fontWeight="normal">Navigation</Drawer.Title>
              <Drawer.CloseTrigger />
            </Drawer.Header>
            <Drawer.Body>
              <VStack align="stretch" gap={4}>
                <NavLinks onClick={() => setIsOpen(false)} />
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}

export default Navbar
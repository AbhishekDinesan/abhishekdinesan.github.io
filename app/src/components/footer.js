
import { HStack, Icon, Link, Stack, Box, Text } from '@chakra-ui/react'
import { SiGithub, SiGmail, SiLinkedin, SiSpotify, SiStrava } from 'react-icons/si'

const Block = () => (
  <Box style={{ margin: 'clamp(10px, 2vw, 20px)', paddingTop: '20px' }}>
    <Stack 
      direction={{ base: "column", md: "row" }} 
      justify="space-between" 
      w="100%" 
      align="center"
      gap={{ base: 4, md: 0 }}
    >
      <HStack gap={{ base: "3", md: "4" }} justify="center" flexWrap="wrap">
        {socialLinks.map(({ href, icon }, index) => (
          <Link key={index} href={href} colorPalette="gray">
            <Icon size={{ base: "sm", md: "md" }}>{icon}</Icon>
          </Link>
        ))}
      </HStack>
      <Text fontSize={{ base: "xs", md: "sm" }} textAlign="center">
        handcrafted by abhi © 2025
      </Text>
    </Stack>
  </Box>
)

const socialLinks = [
  { href: 'abhidines04@gmail.com', icon: <SiGmail /> },
  { href: 'https://github.com/AbhishekDinesan', icon: <SiGithub /> },
  { href: 'https://www.linkedin.com/AbhiDinesan', icon: <SiLinkedin /> },
  { href: 'https://open.spotify.com/user/2wkr4k7yq75hf7lgpifpy0gbv', icon: <SiSpotify /> },
  { href: 'https://www.strava.com/athletes/156513757', icon: <SiStrava /> }
]

export default Block

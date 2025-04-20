
import { Container, HStack, Icon, Link, Stack } from '@chakra-ui/react'
import { SiGithub, SiGmail, SiLinkedin, SiSpotify, SiStrava } from 'react-icons/si'

const Block = () => (
  <div style = {{margin: '20px'}}>
      <Stack direction="row" justify="space-between"  w="100%" align="center">
        <HStack gap="4">
          {socialLinks.map(({ href, icon }, index) => (
            <Link key={index} href={href} colorPalette="gray">
              <Icon size="md">{icon}</Icon>
            </Link>
          ))}
        </HStack>
        <div>handcrafted by abhi © 2025</div>
      </Stack>
      </div>
)

const socialLinks = [
  { href: 'abhidines04@gmail.com', icon: <SiGmail /> },
  { href: 'https://github.com/AbhishekDinesan', icon: <SiGithub /> },
  { href: 'https://www.linkedin.com/AbhiDinesan', icon: <SiLinkedin /> },
  { href: 'https://open.spotify.com/user/2wkr4k7yq75hf7lgpifpy0gbv', icon: <SiSpotify /> },
  { href: 'https://www.linkedin.com/AbhiDinesan', icon: <SiStrava /> }
]

export default Block

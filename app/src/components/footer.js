
import { Container, HStack, Icon, Link, Stack } from '@chakra-ui/react'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

const Block = () => (
  <Container as="footer" py={{ base: '5', md: '6' }} position='fixed' bottom='0' left='0'>
    <Stack gap="6">
      <Stack direction="row" justify="space-between" align="center">
        <HStack gap="4">
          {socialLinks.map(({ href, icon }, index) => (
            <Link key={index} href={href} colorPalette="gray">
              <Icon size="md">{icon}</Icon>
            </Link>
          ))}
        </HStack>
        <div>Handcrafted by Abhi</div>
      </Stack>
    </Stack>
  </Container>
)

const socialLinks = [
  { href: 'abhidines04@gmail.com', icon: <SiGmail /> },
  { href: 'https://github.com/AbhishekDinesan', icon: <SiGithub /> },
  { href: 'https://www.linkedin.com/AbhiDinesan', icon: <SiLinkedin /> },
]

export default Block

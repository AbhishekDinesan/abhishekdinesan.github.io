import { Box, Heading, Separator, Text } from "@chakra-ui/react";
import { WritingCard } from "../components/Card";
import { Typewriter } from 'react-simple-typewriter';

const IdeasPage = () => {
  return (
    <>
      <Box mb={8} paddingLeft={12}>
        <Heading size="xl" mb={4} textAlign="left">Non-Fiction</Heading>
        <WritingCard mb={4} title="Computing the Cost of Computing on Income Inequality" description ="an essay" />
        <Heading size="xl" mt={4} mb={4} textAlign="left" >Fiction</Heading>
        <WritingCard title="Rewritten - Chapter I" description ="a weird futuristic tragedy" />
      </Box>
      <Typewriter
            words={['thoughts? feedback? concerns....feel free to reach out!']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
        />
    </>
  );
};

export default IdeasPage;

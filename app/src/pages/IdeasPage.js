import { Box, Heading, Separator, Text } from "@chakra-ui/react";
import { WritingCard } from "../components/Card";
import { Typewriter } from 'react-simple-typewriter';

const IdeasPage = () => {
  return (
    <div style={{ padding: 'clamp(0.5rem, 2vw, 1rem)' }}>
      <Box 
        mb={{ base: 6, md: 8 }} 
        paddingLeft={{ base: 2, md: 6, lg: 12 }}
        paddingRight={{ base: 2, md: 4 }}
      >
        <Heading 
          size={{ base: "lg", md: "xl" }} 
          mb={{ base: 3, md: 4 }} 
          textAlign="left"
        >
          Non-Fiction
        </Heading>
        <WritingCard 
          mb={4} 
          title="Computing the Cost of Computing on Income Inequality" 
          description="an essay" 
        />
        <Heading 
          size={{ base: "lg", md: "xl" }} 
          mt={{ base: 3, md: 4 }} 
          mb={{ base: 3, md: 4 }} 
          textAlign="left"
        >
          Fiction
        </Heading>
        <WritingCard 
          title="Rewritten - Chapter I" 
          description="a weird futuristic tragedy" 
        />
      </Box>
      <Box 
        fontSize={{ base: "sm", md: "md" }} 
        paddingX={{ base: 2, md: 4 }}
      >
        <Typewriter
          words={['thoughts? feedback? concerns....feel free to reach out!']}
          loop={0}
          cursor
          cursorStyle='_'
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </Box>
    </div>
  );
};

export default IdeasPage;

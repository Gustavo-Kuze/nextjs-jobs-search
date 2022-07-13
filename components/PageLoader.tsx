import { Center, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const randomPhrases = ['Just a sec...', 'Be right back to you...', 'Searching for the right positions...'];

const PageLoader = ({
  text = '',
}) => {

  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    setPhrase(randomPhrases[Math.floor(Math.random() * randomPhrases.length)]);
  }, []);

  return <Center minH={'80vh'}>
    <VStack>
      <Spinner color='blue.500' size='xl' />
      <Text >{text || phrase}</Text>
    </VStack>
  </Center>;
};

export default PageLoader;

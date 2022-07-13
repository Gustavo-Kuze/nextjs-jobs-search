import { Box, Heading, Text, Button, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

function NotFound() {

  return (
    <Flex h="80vh" flexDirection={'column'} justifyContent="center" alignItems="center">
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, blue.400, blue.600)"
          backgroundClip="text">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={'gray.500'} mb={6}>
          {'We couldn\'t find the page you were looking for.'}
        </Text>

        <NextLink href="/" passHref>
          <Link _hover={{ textDecoration: 'none' }}>
            <Button
              colorScheme="blue"
              bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
              color="white"
              variant="solid">
              <Text fontWeight="bold">Go back to website</Text>
            </Button>
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
}

export default NotFound;

import { ReactNode } from 'react';

import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image as ChakraImage
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.800', 'gray.900')}
      color={useColorModeValue('gray.100', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '12', lg: '24' }}>
          <Stack >
            <Box>
              <Flex align="flex-start">
                <NextLink href="/" passHref>
                  <Link>
                    <HStack>
                      <ChakraImage
                        src="/logo.svg"
                      />
                    </HStack>
                  </Link>
                </NextLink>
              </Flex>
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Our Policy</ListHeader>
            <Link href="/privacy-policy" isExternal textAlign={'left'}>Privacy and Security</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Social Media</ListHeader>
            <NextLink href={'https://www.linkedin.com/company/zippia'} passHref>
              <Link _hover={{ textDecoration: 'none' }}>
                <Button colorScheme='linkedin' leftIcon={<FaLinkedin />} _hover={{ textDecoration: 'none' }}>
                  LinkedIn
                </Button>
              </Link>
            </NextLink>
          </Stack>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} pt="8" textAlign={'center'} w="full" alignItems="center" justifyContent="center">
          <Text fontSize={'sm'} fontWeight="medium" textAlign={'center'}>
            © 2022 Zippia - All Rights Reserved
          </Text>
          <Text fontSize={'sm'} fontWeight="medium" textAlign={'center'}>
            {'>'} Developed by <Link href="https://gustavokuze.com.br" isExternal colorScheme="brand" fontWeight={'bold'}>Gustavo Kuze</Link>
          </Text>
        </Stack>
      </Container>
    </Box >
  );
}

export default Footer;

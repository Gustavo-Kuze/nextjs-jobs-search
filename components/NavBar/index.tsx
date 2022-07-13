import React, { useState } from 'react';

import {
  chakra,
  Link,
  useColorModeValue,
  Button,
  Flex,
  HStack,
  Spacer,
  useOutsideClick,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const categoriesPopoverRef = React.useRef();

  useOutsideClick({
    // @ts-ignore
    ref: categoriesPopoverRef,
    handler: () => setIsOpen(false),
  });

  const cl = useColorModeValue("gray.800", "white");

  const MenuItems = (
    <>
      <NextLink href={'/'} passHref>
        <Link _hover={{ textDecoration: 'none' }}>
          <Button
            bg={bg}
            color="gray.500"
            display="inline-flex"
            alignItems="center"
            fontSize="md"
            _hover={{ color: cl }}
          >
            Zippia
          </Button>
        </Link>
      </NextLink>

      <NextLink href={'/about'} passHref>
        <Link _hover={{ textDecoration: 'none' }}>
          <Button
            bg={bg}
            color="gray.500"
            display="inline-flex"
            alignItems="center"
            fontSize="md"
            _hover={{ color: cl }}
          >
            About Us
          </Button>
        </Link>
      </NextLink>
    </>
  );

  return (
    <>
      <chakra.header
        // @ts-ignore
        ref={ref}
        shadow={'sm'}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop={"6px solid"}
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex>
              <HStack spacing="5" display={"flex"}>
                {MenuItems}
              </HStack>
            </Flex>
            <Spacer />
          </Flex>
        </chakra.div>
      </chakra.header>
    </>
  );

};

export default NavBar;


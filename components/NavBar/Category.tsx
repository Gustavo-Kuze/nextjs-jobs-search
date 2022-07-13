import React from 'react';

import {
  chakra,
  Box,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { genKeyStringFromLabel } from '../../helpers';

const Category = (props: any) => {
  const ic = useColorModeValue("brand.600", "brand.50");
  const hbg = useColorModeValue("gray.50", "brand.400");
  const tcl = useColorModeValue("gray.900", "gray.50");
  const dcl = useColorModeValue("gray.500", "gray.50");
  return (
    <NextLink href={`/categories/${genKeyStringFromLabel(props.title)}`} passHref>
      <Link
        my={-3}
        py={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
        onClick={() => props.onClick(props.id)}
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    </NextLink>
  );
};

export default Category;
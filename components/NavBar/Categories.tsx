import React from 'react';
import {
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import Category from './Category';
import { CategoryType } from '../../contexts/CategoriesContext';

const Categories = (props: any) => {
  const hbg = useColorModeValue("gray.50", "brand.400");
  const hbgh = useColorModeValue("gray.100", "brand.500");
  const tcl = useColorModeValue("gray.900", "gray.50");

  const { onClick = () => { } } = props;

  return (
    <>
      <SimpleGrid
        columns={props.h ? { base: 1, md: 3, lg: 5 } : 1}
        pos="relative"
        gap={{ base: 6, sm: 8 }}
        py={3}
      >
        {props.categories.map((category: CategoryType) => (
          <Category
            key={category.id}
            title={category.name}
            onClick={(categoryId: any) => onClick(categoryId)}
          >
            {category.description}
          </Category>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Categories;

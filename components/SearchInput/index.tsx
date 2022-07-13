/* eslint-disable react/no-unescaped-entities */

import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

type Props = {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<Props> = (props) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <HStack alignItems="center">
        <InputGroup ml={{ base: 'auto', lg: '32' }}>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch
              size="18"
              color="blue"
            />
          </InputLeftElement>
          <Input
            _focus={{
              borderColor: 'blue.400',
              borderWidth: '2px',
            }}
            type="search"
            placeholder="What are you looking for?"
            _placeholder={{ fontSize: '14' }}
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                props.onSearch(search);
              }
            }}
          />
          <Button
            ml="8"
            colorScheme={'blue'}
            rightIcon={<FaSearch />}
            onClick={() => props.onSearch(search)}
          >
            Search
          </Button>
        </InputGroup>
      </HStack>
    </>
  );
};

export default SearchInput;

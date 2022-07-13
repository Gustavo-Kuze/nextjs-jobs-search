import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';

const direction = 'ltr';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
};

export const theme = {
  direction,
  ...foundations,
  config,
  defaultProps: {
    focusBorderColor: 'red.500',
  },
  styles: {
    components: {
      Button: {
        _focus: { outline: 'none', boxShadow: 'none' },
        _active: { outline: 'none', boxShadow: 'none' },
      },
    },
    global: {
      button: {
        _focus: { outline: 'none', boxShadow: 'none' },
        _active: { outline: 'none', boxShadow: 'none' },
      },
      a: {
        _focus: { outline: 'none', boxShadow: 'none', textDecoration: 'none' },
        _active: { outline: 'none', boxShadow: 'none', textDecoration: 'none' },
        _hover: { outline: 'none', boxShadow: 'none', textDecoration: 'none' },
      },
    },
  },

};

export default extendTheme(theme);

import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#1f203a',
  primaryVariant: '#343657',
  onPrimary: '#ffffff',
  secondary: '#fceb21',
  onSecondary: '#1f203a',
  background: '#1f203a',
  onBackground: '#ffffff',
};

const styles = {
  global: {
    body: {
      backgroundColor: colors.background,
      color: colors.onBackground,
      fontWeight: '400',
      fontFamily: 'Space Grotesk, sans-serif',
    },
    li: {
      listStyleType: 'none',
    },
  },
};

export default extendTheme({ colors, styles });

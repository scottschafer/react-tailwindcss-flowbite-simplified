import { ThemeOptions, createTheme } from '@mui/material/styles';

const baseThemeOptions: ThemeOptions = {
};

export const lightTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'dark',
  },
});

import React from 'react';
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from '../mui/theme';
import { Stack } from '@mui/material';
import { Button } from 'flowbite-react';


function MUIPage({darkMode}: {darkMode: boolean}) {
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {['', 'sm', 'lg'].map(size => (
        <Stack direction="column" spacing={2} key={`size-${size}`}>
          <label>Buttons {size ? `(${size})` : ''}</label>

          <Stack direction="row" spacing={2}>
            <Button title="Primary Button!" data-tooltip-placement="left" className={`primary ${size}`}>primary</Button>
            <Button title="Secondary Button!" data-tooltip-placement="right" className={`secondary ${size}`}>secondary</Button>
            <Button className={`text ${size}`}>text</Button>
            <Button className={`warning icon-warning ${size}`}>warning</Button>
          </Stack>

        </Stack>))}
    </ThemeProvider>

  );
}

export default MUIPage; 
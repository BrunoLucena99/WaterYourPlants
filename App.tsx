import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import Routes from './src/routes';
import theme from './src/utils/theme';

const App = () => (
  <>
    <StatusBar translucent backgroundColor="transparent" />
    <ThemeProvider theme={theme.colors}>
      <Routes />
    </ThemeProvider>
  </>
);

export default App;

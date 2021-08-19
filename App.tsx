import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import Routes from './src/routes';
import theme from './src/utils/theme';

const App = () => (
  <ThemeProvider theme={theme.colors}>
    <Routes />
  </ThemeProvider>
);

export default App;

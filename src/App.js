import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './theme';
import Router from './Router';

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <Router />
    </React.Fragment>
  </ThemeProvider>
);

export default App;

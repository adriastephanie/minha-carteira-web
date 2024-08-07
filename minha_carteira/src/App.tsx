import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';
import Routes from './router';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes/>
    </ThemeProvider>
  </>
);

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';
import Dashboard from './pages/Dashboard';
import Lista from './pages/List';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Lista/>
      </Layout>
    </ThemeProvider>
  </>
);

export default App;

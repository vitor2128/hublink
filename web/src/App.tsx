import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';
import { useTheme } from './hooks/theme';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

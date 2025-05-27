// src/App.tsx
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { getTheme } from './theme.ts';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import { BrowserRouter } from 'react-router-dom';
import Router from './router.tsx';

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Router />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

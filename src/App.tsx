import React, { FC } from 'react';
import './globalStyles.scss';
import * as styleHeader from './components/header/styleHeader.module.scss';
import * as styleMain from './components/main/styleMain.module.scss';
import * as styleFooter from './components/footer/styleFooter.module.scss';
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { createTheme, ThemeProvider } from '@mui/material';
import { Footer } from '@/components/footer';

export const App: FC = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      text: { primary: '#ffffff' },
      primary: {
        main: '#C8A35F',
        light: '#C8A35F',
        dark: '#C8A35F',
      },
      secondary: {
        main: '#ffffff',
      },
      info: {
        main: '#ffffff',
      },
    },
  });
  return (
    <div style={{ width: '100%' }}>
      <ThemeProvider theme={theme}>
        <header className={styleHeader.header}>
          <Header />
        </header>
        <main className={styleMain.main}>
          <Main />
        </main>
        <footer className={styleFooter.footer}>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
};

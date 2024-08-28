import React, { FC } from 'react';
import './style.scss';
import { Header } from '@/components/header';
import { Main } from '@/components/main';

export const App: FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <header
        style={{
          height: '60px',
          width: '100%',
          backgroundColor: '#2f343a',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Header />
      </header>
      <main
        style={{
          width: '100%',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <Main />
      </main>
    </div>
  );
};

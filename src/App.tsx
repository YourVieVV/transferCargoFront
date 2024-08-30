import React, { FC } from 'react';
import './globalStyles.scss';
import * as styleHeader from './components/header/styleHeader.module.scss';
import * as styleMain from './components/main/styleMain.module.scss';
import { Header } from '@/components/header';
import { Main } from '@/components/main';

export const App: FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <header className={styleHeader.header}>
        <Header />
      </header>
      <main className={styleMain.main}>
        <Main />
      </main>
    </div>
  );
};

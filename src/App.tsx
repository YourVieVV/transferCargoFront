import React, { FC } from 'react';
import './style.scss';
import { Header } from '@/components/header';

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
      <main>
        <div
          style={{
            width: '1920px',
            height: '245px',
            backgroundSize: 'contain',
            backgroundImage: `url('../public/img.png')`,
          }}
        >
          ГРУЗОВЫЕ ПЕРЕВОЗКИ Перевозка крупногабаритных грузов по России и
          Европе. Полное экспедирование, страхование, упаковка и хранение грузов
        </div>
      </main>
    </div>
  );
};

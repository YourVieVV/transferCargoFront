import React from 'react';
import { Point } from '@/assets/point';

export const Header = () => {
  return (
    <div
      style={{
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100px',
            borderRight: 'solid 0.2px',
          }}
        >
          <img
            style={{ width: '40px', height: '40px' }}
            alt={''}
            src={'../public/logo.png'}
          />
          <span
            style={{
              fontSize: '10px',
              paddingLeft: '3px',
              fontFamily: 'sans-serif',
            }}
          >
            Project
            <br />
            Transfer
            <br />
            Company
          </span>
        </div>

        <div
          style={{
            width: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '3px' }}>
            <Point />
          </div>
          <span style={{ fontSize: '7px', fontFamily: 'sans-serif' }}>
            Наши офисы
          </span>
        </div>
      </div>

      <div
        style={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          fontSize: '8px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ width: '60px', textAlign: 'center' }}>УСЛУГИ</div>
        <div style={{ width: '60px', textAlign: 'center' }}>ТАРИФЫ</div>
        <div style={{ width: '60px', textAlign: 'center' }}>БИЗНЕСУ</div>
        <div style={{ width: '60px', textAlign: 'center' }}>ВАКАНСИИ</div>
        <div style={{ width: '60px', textAlign: 'center' }}>КОНТАКТЫ</div>
      </div>
    </div>
  );
};

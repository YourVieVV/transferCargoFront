import React from 'react';
import { Point } from '@/assets/point';
import * as styleHeader from './styleHeader.module.scss';

export const Header = () => {
  return (
    <div className={styleHeader.containerInHeader}>
      <div className={styleHeader.containerHeaderLeftSide}>
        <div className={styleHeader.containerLogo}>
          <img
            className={styleHeader.logo}
            alt={''}
            src={'../public/logo.png'}
          />
          <span className={styleHeader.logoText}>
            Project
            <br />
            Transfer
            <br />
            Company
          </span>
        </div>

        <div className={styleHeader.containerPoint}>
          <div className={styleHeader.point}>
            <Point />
          </div>
          <span className={styleHeader.textPointer}>Наши офисы</span>
        </div>
      </div>

      <div className={styleHeader.tabContainer}>
        <div className={styleHeader.tab}>УСЛУГИ</div>
        <div className={styleHeader.tab}>ТАРИФЫ</div>
        <div className={styleHeader.tab}>БИЗНЕСУ</div>
        <div className={styleHeader.tab}>ВАКАНСИИ</div>
        <div className={styleHeader.tab}>ВОЙТИ</div>
      </div>
    </div>
  );
};

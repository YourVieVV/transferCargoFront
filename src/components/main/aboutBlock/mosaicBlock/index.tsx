import React from 'react';
import * as styles from './styleMosaicBlock.module.scss';
import * as stylesMain from '@/components/main/styleMain.module.scss';

export const MosaicBlock = () => {
  return (
    <div className={styles.aboutCompanyMosaicContainer}>
      <div className={styles.aboutCompanyMosaicBlock}>
        <div className={styles.leftSideMosaic}>
          <div className={stylesMain.titleBlockContainer}>
            <div className={stylesMain.feature} />
            <span className={stylesMain.bigHText}>АВИАПЕРЕВОЗКИ</span>
          </div>
          <span className={stylesMain.defaultText}>
            Мы сотрудничаем с ведущими авиакомпаниями, что обеспечивает высокий
            уровень скорости доставки и безопасности вашего груза.
            <br />
            Наша сеть партнеров позволяет осуществлять перевозки в более чем 10
            стран по всему миру.
            <br />
            Мы предлагаем индивидуальные решения для любых типов грузов, включая
            скоропортящиеся и крупногабаритные товары
          </span>
        </div>
        <div className={styles.rightSideMosaic}>
          <div className={styles.mosaicContainer}>
            <div className={styles.mosaic}>
              <span className={styles.mosaicHText}>48 </span>
              <span className={styles.mosaicMiddleText}>офисов</span>
              <span className={styles.mosaicSmallText}> в Европе и СНГ</span>
            </div>
            <div className={styles.mosaic}>
              <span className={styles.mosaicHText}>6</span>
              <span className={styles.mosaicMiddleText}>самолётов</span>
              <span className={styles.mosaicSmallText}>Boeing</span>
            </div>
            <div className={styles.mosaic}>Image</div>
            <div className={styles.mosaic}>Image</div>
            <div className={styles.mosaic}>
              <span className={styles.mosaicHText}>1200</span>
              <span className={styles.mosaicMiddleText}>сотрудников</span>
              <span className={styles.mosaicSmallText}>профессионалов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

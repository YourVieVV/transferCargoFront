import { Button } from 'antd';
import React from 'react';
import * as styles from './styleMain.module.scss';
import { Arrow } from '@/assets/arrow';

export const Main = () => {
  const arrayTransferImages = [
    <img
      style={{ width: '180px' }}
      alt={''}
      src={'../../public/cargo.png'}
    />,
    // <img style={{width:'180px'}} alt={''} src={'../../public/air.png'}/>,
    // <img style={{width:'180px'}} alt={''} src={'../../public/Ship.png'}/>,
  ];

  return (
    <>
      <div className={styles.cargoImage}>
        <div className={styles.containerInMain}>
          <div className={styles.containerCargoText}>
            <span className={styles.containerCargoBigText}>
              ГРУЗОВЫЕ ПЕРЕВОЗКИ
            </span>
            <span className={styles.smallTextInContainerCargo}>
              Перевозка крупногабаритных грузов по России и Европе. Полное
              экспедирование, страхование, упаковка и хранение грузов
            </span>
          </div>
        </div>
      </div>

      <div className={styles.bgGradientMoreDetails}>
        <div className={styles.containerMoreDetails}>
          <div className={styles.leftSideBlockMoreDetails}>
            <div className={styles.featureMoreDetails} />
            <span className={styles.bigTextMoreDetails}>
              ГРУЗОПЕРЕВОЗКИ
              <br />
              ПО ЕВРОПЕ
            </span>
            <span className={styles.smallTextMoreDetails}>
              Страны Евросоюза, а также Ближнего востока,
              <br />
              Белоруссия со всеми документами.
            </span>
            <Button
              className={styles.buttonMoreDetails}
              size="small"
              type="primary"
            >
              ПОДРОБНЕЕ
            </Button>
          </div>
          <div className={styles.rightSideBlockMoreDetails}>
            <div className={styles.containerImagesMoreDetails}>
              {arrayTransferImages.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div className={styles.containerArrowMoreDetails}>
              <Button
                type="link"
                className={styles.buttonArrow}
                icon={<Arrow />}
                iconPosition={'end'}
              >
                След
              </Button>
              <Button
                type="link"
                className={styles.buttonArrow}
                icon={<Arrow turn={180} />}
                iconPosition={'end'}
              >
                Назад
              </Button>
            </div>
          </div>
        </div>
      </div>

        <div style={{height:'100px', backgroundColor:'#2f343a'}}>
            <div style={{width:'80%'}}>

            </div>
        </div>
    </>
  );
};

import React from 'react';
import * as styles from '@/components/main/styleMain.module.scss';
import { Button } from 'antd';
import { Arrow } from '@/assets/arrow';

const Main = () => {
  const arrayTransferImages = [
    <img
      style={{ width: '180px' }}
      alt={''}
      src={'../../public/cargo.png'}
    />,
    // <img style={{width:'180px'}} alt={''} src={'../../public/air.png'}/>,
    // <img style={{width:'180px'}} alt={''} src={'../../public/Ship.png'}/>,
  ];
  const test = () => {
    return (
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
                size="small"
              >
                След
              </Button>
              <Button
                type="link"
                className={styles.buttonArrow}
                icon={<Arrow turn={180} />}
                iconPosition={'end'}
                size="small"
              >
                Назад
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div></div>;
};

export default Main;

import { Button } from 'antd';
import React from 'react';
import * as styles from './style.module.scss';
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
        <div
          style={{ width: '80%', display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={{
              width: '380px',
              height: '100px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignContent: 'center',
              gap: '12px',
              border: 'solid 0.5px #C8A35F',
            }}
          >
            <span
              style={{
                height: '26px',
                fontSize: '24px',
                textAlign: 'center',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
              }}
            >
              ГРУЗОВЫЕ ПЕРЕВОЗКИ
            </span>
            <span
              style={{
                width: '72%',
                fontSize: '7px',
                fontFamily: 'sans-serif',
                textAlign: 'center',
              }}
            >
              Перевозка крупногабаритных грузов по России и Европе. Полное
              экспедирование, страхование, упаковка и хранение грузов
            </span>
          </div>
        </div>
      </div>
      <div
        className={styles.bgColorGradient}
        style={{ height: '180px', display: 'flex', justifyContent: 'center' }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            height: '100%',
            width: '80%',
          }}
        >
          <div
            style={{
              width: '50%',
              display: 'flex',
              placeContent: 'center',
              flexDirection: 'column',
              alignContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div
              style={{
                backgroundColor: '#C8A35F',
                width: '40px',
                height: '2px',
              }}
            />
            <span
              style={{
                fontSize: '18px',
                textAlign: 'left',
                fontFamily: 'sans-serif',
              }}
            >
              ГРУЗОПЕРЕВОЗКИ
              <br />
              ПО ЕВРОПЕ
            </span>
            <span style={{ fontSize: '7px', lineHeight: '10px' }}>
              Страны Евросоюза, а также Ближнего востока,
              <br />
              Белоруссия со всеми документами.
            </span>
            <Button
              style={{
                backgroundColor: '#C8A35F',
                boxShadow: 'none',
                borderRadius: '0px',
                width: '100px',
                fontFamily: 'sans-serif',
                fontSize: '10px',
              }}
              size={'small'}
              type="primary"
            >
              ПОДРОБНЕЕ
            </Button>
          </div>
          <div
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              color: '#C8A35F',
            }}
          >
            <div style={{ width: '50%' }}>
              {arrayTransferImages.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '60px',
                width: '50%',
              }}
            >
              <Button
                type="link"
                style={{ color: '#C8A35F', fontSize: '10px' }}
                icon={<Arrow />}
                iconPosition={'end'}
              >
                След
              </Button>
              <Button
                type="link"
                style={{ color: '#C8A35F', fontSize: '10px' }}
                icon={<Arrow turn={180} />}
                iconPosition={'end'}
              >
                Назад
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

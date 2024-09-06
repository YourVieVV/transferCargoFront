import React from 'react';
import * as styles from './styleMain.module.scss';
import { Airplane } from '@/assets/airplane';
import { CargoImgBlock } from '@/components/main/cargoImgBlock';
import { CalcAndTrackBlock } from '@/components/main/calcAndTrackBlock';

export const Main = () => {
  return (
    <>
      <CargoImgBlock />

      <CalcAndTrackBlock />

      <div
        style={{
          height: '200px',
          backgroundColor: '#2f343a',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: '50%',
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              flexDirection: 'column',
            }}
          >
            <div className={styles.featureMoreDetails} />
            <span className={styles.bigTextMoreDetails}>О КОМПАНИИ</span>
            <span className={styles.smallTextMoreDetails}>
              Мы — инновационная компания, специализирующаяся на грузоперевозках
              и логистике. Наша цель — сделать процесс перевозки грузов
              максимально простым и эффективным для наших клиентов. Мы
              используем современные технологии и опыт наших специалистов, чтобы
              обеспечить высокое качество услуг и удовлетворение всех ваших
              потребностей.
              <br />
              <br />
              Мы стремимся к тому, чтобы каждый клиент мог легко и быстро найти
              оптимальное решение для своих логистических задач, независимо от
              их сложности и масштаба.
            </span>
          </div>
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2px',
            }}
          >
            <div>
              <Airplane />
            </div>
            <div>ICON</div>
            <div>ICON</div>
            <div>ICON</div>
          </div>
        </div>
      </div>
    </>
  );
};

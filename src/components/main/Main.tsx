import React from 'react';
import * as styles from './styleMain.module.scss';
import { Arrow } from '@/assets/arrow';
import { Airplane } from '@/assets/airplane';
import { Input, InputNumber } from 'antd';
import { Button } from 'antd';

export const Main = () => {
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

      <div className={styles.bgGradientCalcBlock}>
        <div className={styles.calcContainer}>
          <div className={styles.leftSideCalcBlock}>
            <div className={styles.feature} />
            <span className={styles.bigTextHCalc}>КАЛЬКУЛЯТОР</span>
            <div className={styles.calcForm}>
              <div className={styles.citiesInputsContainer}>
                <div>
                  <span>Город отправления</span>
                  <Input
                    size="large"
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChange={() => {}}
                  />
                </div>
                <div className={styles.arrowBetweenInputs}>
                  <Arrow />
                  <Arrow turn={180} />
                </div>
                <div>
                  <span>Город прибытия</span>
                  <Input
                    size="large"
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChange={() => {}}
                  />
                </div>
              </div>

              <div className={styles.characteristicsCargoForm}>
                <div style={{ width: '100%' }}>
                  <span>Характеристики груза</span>
                </div>
                <div className={styles.inputsCargoDimensionsContainer}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      width: '30%',
                    }}
                  >
                    <span>Длина</span>
                    <InputNumber
                      size="large"
                      addonAfter={'см'}
                      min={1}
                      max={10}
                      defaultValue={3}
                      onChange={() => {}}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      width: '30%',
                    }}
                  >
                    <span>Ширина</span>
                    <InputNumber
                      size="large"
                      addonAfter={'см'}
                      min={1}
                      max={10}
                      defaultValue={3}
                      onChange={() => {}}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      width: '30%',
                    }}
                  >
                    <span>Высота</span>
                    <InputNumber
                      size="large"
                      addonAfter={'см'}
                      min={1}
                      max={10}
                      defaultValue={3}
                      onChange={() => {}}
                    />
                  </div>
                </div>

                <div className={styles.inputWeightAndButtonCalcContainer}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      width: '45%',
                    }}
                  >
                    <span>Вес</span>
                    <InputNumber
                      size="large"
                      addonAfter={'кг'}
                      min={1}
                      max={10}
                      defaultValue={3}
                      onChange={() => {}}
                    />
                  </div>

                  <Button
                    className={styles.buttonMoreDetails}
                    size="large"
                    type="primary"
                  >
                    ПОСЧИТАТЬ
                  </Button>
                  <div style={{ width: '100%' }}>
                    <span>Итого: </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightSideBlockMoreDetails}>
            <div className={styles.feature} />
            <span className={styles.bigTextHCalc}>ОТСЛЕЖИВАНИЕ</span>
          </div>
        </div>
      </div>

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

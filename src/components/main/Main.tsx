import React from 'react';
import * as styles from './styleMain.module.scss';
import { Arrow } from '@/assets/arrow';
import { Airplane } from '@/assets/airplane';
import { Button, InputAdornment, TextField } from '@mui/material';
import * as style from '@/components/dataEntry/styleDataEntry.module.scss';
import SearchIcon from '@mui/icons-material/Search';

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
            <div className={styles.titleBlockContainer}>
              <div className={styles.feature} />
              <span className={styles.bigTextHCalc}>КАЛЬКУЛЯТОР</span>
            </div>
            <div className={styles.calcForm}>
              <div className={styles.citiesInputsContainer}>
                <TextField
                  style={{ width: '40%' }}
                  label={<span>Город отправления</span>}
                  size="medium"
                  onChange={() => {}}
                />
                <div className={styles.arrowBetweenInputs}>
                  <Arrow />
                  <Arrow turn={180} />
                </div>
                <TextField
                  style={{ width: '40%' }}
                  label={<span>Город прибытия</span>}
                  size="medium"
                  onChange={() => {}}
                />
              </div>

              <div className={styles.characteristicsCargoForm}>
                <div>
                  <span className={styles.textH}>Характеристики груза</span>
                </div>
                <div className={styles.inputsCargoDimensionsContainer}>
                  <TextField
                    sx={{ width: '30%' }}
                    label={<span className={style.label}>Длина</span>}
                    color={'primary'}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={style.inputAddon}
                          >
                            см
                          </InputAdornment>
                        ),
                      },
                    }}
                    size="medium"
                    onChange={() => {}}
                  />
                  <TextField
                    label={<span className={style.label}>Ширина</span>}
                    sx={{ width: '30%' }}
                    color={'primary'}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={style.inputAddon}
                          >
                            см
                          </InputAdornment>
                        ),
                      },
                    }}
                    size="medium"
                    onChange={() => {}}
                  />
                  <TextField
                    label={<span className={style.label}>Высота</span>}
                    sx={{ width: '30%' }}
                    color={'primary'}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={style.inputAddon}
                          >
                            см
                          </InputAdornment>
                        ),
                      },
                    }}
                    size="medium"
                    onChange={() => {}}
                  />
                </div>

                <div className={styles.inputWeightAndButtonCalcContainer}>
                  <div className={styles.inputContainer}>
                    <TextField
                      style={{ width: '40%' }}
                      label={<span className={style.label}>Вес</span>}
                      color={'primary'}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={style.inputAddon}
                            >
                              кг
                            </InputAdornment>
                          ),
                        },
                      }}
                      size="medium"
                      onChange={() => {}}
                    />
                    <Button
                      className={styles.buttonMoreDetails}
                      size="medium"
                      variant="contained"
                    >
                      ПОСЧИТАТЬ
                    </Button>
                  </div>
                  <div>
                    <span className={styles.textH}>
                      <u>Итого:</u>{' '}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightSideBlockMoreDetails}>
            <div className={styles.titleBlockContainer}>
              <div className={styles.feature} />
              <span className={styles.bigTextHCalc}>ОТСЛЕЖИВАНИЕ</span>
            </div>
            <div>
              <TextField
                label={
                  <span className={style.label}>Введите номер заказа</span>
                }
                color={'primary'}
                size="medium"
                onChange={() => {}}
              />
              <Button
                className={styles.buttonMoreDetails}
                size="medium"
                variant="contained"
                startIcon={<SearchIcon />}
              >
                НАЙТИ
              </Button>
            </div>
            <div>TEXTASDASDSD</div>
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

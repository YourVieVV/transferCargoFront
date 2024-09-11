import React, { FC } from 'react';
import * as stylesMain from '@/components/main/styleMain.module.scss';
import * as styles from './styleCalcAndTrackBlock.module.scss';
import { Button, InputAdornment, TextField } from '@mui/material';
import { Arrow } from '@/assets/arrow';
import * as stylesEntry from '@/components/dataEntry/styleDataEntry.module.scss';
import SearchIcon from '@mui/icons-material/Search';

export const CalcAndTrackBlock: FC = ({}) => {
  return (
    <div className={styles.bgGradientCalcBlock}>
      <div className={styles.calcContainer}>
        <div className={styles.leftSideCalcBlock}>
          <div className={stylesMain.titleBlockContainer}>
            <div className={stylesMain.feature} />
            <span className={stylesMain.bigHText}>КАЛЬКУЛЯТОР</span>
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
              <span className={stylesMain.defaultText}>
                Характеристики груза
              </span>

              <div className={styles.inputsCargoDimensionsContainer}>
                <TextField
                  sx={{ width: '30%' }}
                  label={<span className={stylesEntry.label}>Длина</span>}
                  color={'primary'}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          className={stylesEntry.inputAddon}
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
                  label={<span className={stylesEntry.label}>Ширина</span>}
                  sx={{ width: '30%' }}
                  color={'primary'}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          className={stylesEntry.inputAddon}
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
                  label={<span className={stylesEntry.label}>Высота</span>}
                  sx={{ width: '30%' }}
                  color={'primary'}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          className={stylesEntry.inputAddon}
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
                    label={<span className={stylesEntry.label}>Вес</span>}
                    color={'primary'}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={stylesEntry.inputAddon}
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
                    sx={{ color: '#ffffff' }}
                    className={styles.buttonCounts}
                    size="medium"
                    variant="contained"
                  >
                    <span className={styles.buttonText}>ПОСЧИТАТЬ</span>
                  </Button>
                </div>

                <span className={stylesMain.defaultText}>
                  <u>Итого:</u>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightSideBlockMoreDetails}>
          <div className={stylesMain.titleBlockContainer}>
            <div className={stylesMain.feature} />
            <span className={stylesMain.bigHText}>ОТСЛЕЖИВАНИЕ</span>
          </div>
          <div
            style={{
              height: '56px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              label={
                <span className={stylesEntry.label}>Введите номер заказа</span>
              }
              color={'primary'}
              size="medium"
              onChange={() => {}}
            />
            <Button
              sx={{ color: '#ffffff' }}
              className={styles.buttonCounts}
              size="medium"
              variant="contained"
              startIcon={<SearchIcon sx={{ width: '28px', height: '28px' }} />}
            >
              <span className={styles.buttonText}>НАЙТИ</span>
            </Button>
          </div>
          <div style={{ width: '50%', height: '180px' }}>TEXTASDASDSD</div>
        </div>
      </div>
    </div>
  );
};

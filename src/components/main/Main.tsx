import React from 'react';
import * as styles from './styleMain.module.scss';
import { Airplane } from '@/assets/airplane';
import { CargoImgBlock } from '@/components/main/cargoImgBlock';
import { CalcAndTrackBlock } from '@/components/main/calcAndTrackBlock';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export const Main = () => {
  return (
    <>
      <CargoImgBlock />

      <CalcAndTrackBlock />

      <div className={styles.aboutCompanyContainer}>
        <div className={styles.aboutCompanyBlock}>
          <div className={styles.leftSideAboutCompany}>
            <div className={styles.titleBlockContainer}>
              <div className={styles.feature} />
              <span className={styles.bigTextHCalc}>О КОМПАНИИ</span>
            </div>
            <span className={styles.smallTextMoreDetails}>
              Мы — инновационная компания, специализирующаяся на грузоперевозках
              и логистике.
              <br />
              Наша цель — сделать процесс перевозки грузов максимально простым и
              эффективным для наших клиентов.
              <br />
              Мы используем современные технологии и опыт наших специалистов,
              чтобы обеспечить высокое качество услуг и удовлетворение всех
              ваших потребностей.
              <br />
              <br />
              Мы стремимся к тому, чтобы каждый клиент мог легко и быстро найти
              оптимальное решение для своих логистических задач, независимо от
              их сложности и масштаба.
            </span>
          </div>
          <div className={styles.rightSideAboutCompany}>
            <div className={styles.iconBlockContainer}>
              <div className={styles.squareBlock}>
                <div className={styles.iconContainerAbout}>
                  <div className={styles.iconBlockAbout}>
                    <AirplanemodeActiveIcon
                      sx={{ width: '40px', height: '40px' }}
                    />
                  </div>
                  <div>
                    <span className={styles.defaultText}>АВИАПЕРЕВОЗКИ</span>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.squareBlock}>
                  <div className={styles.iconContainerAbout}>
                    <div className={styles.iconBlockAbout}>
                      <DirectionsBusFilledIcon
                        sx={{ width: '40px', height: '40px' }}
                      />
                    </div>
                    <div>
                      <span className={styles.defaultText}>ГРУЗОПЕРЕВОЗКИ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iconBlockContainer}>
              <div
                style={{ display: 'flex', gap: '2px', flexDirection: 'column' }}
              >
                <div className={styles.squareBlock}>
                  <div className={styles.iconContainerAbout}>
                    <div className={styles.iconBlockAbout}>
                      <DirectionsBoatFilledIcon
                        sx={{ width: '40px', height: '40px' }}
                      />
                    </div>
                    <div>
                      <span className={styles.defaultText}>
                        МОРСКИЕ ПЕРЕВОЗКИ
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.squareBlock}>
                  <div className={styles.iconContainerAbout}>
                    <div className={styles.iconBlockAbout}>
                      <DirectionsRailwayIcon
                        sx={{ width: '40px', height: '40px' }}
                      />
                    </div>
                    <div>
                      <span className={styles.defaultText}>Ж/Д ПЕРЕВОЗКИ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutCompanySliderContainer}>
        <div className={styles.aboutCompanySliderBlock}>
          <div className={styles.leftSideSlider}>
            <div className={styles.titleBlockContainer}>
              <div className={styles.feature} />
              <span className={styles.bigTextHCalc}>АВИАПЕРЕВОЗКИ</span>
            </div>
            <div>
              <span className={styles.defaultText}>
                Мы сотрудничаем с ведущими авиакомпаниями, что обеспечивает
                высокий уровень скорости доставки и безопасности вашего груза.
                <br />
                Наша сеть партнеров позволяет осуществлять перевозки в более чем
                10 стран по всему миру.
                <br />
                Мы предлагаем индивидуальные решения для любых типов грузов,
                включая скоропортящиеся и крупногабаритные товары
              </span>
            </div>
          </div>
          <div className={styles.rightSideSlider}>
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
    </>
  );
};

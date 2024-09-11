import React, { FC } from 'react';
import * as stylesMain from '@/components/main/styleMain.module.scss';
import * as styles from './styleAboutBlock.module.scss';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import { MosaicBlock } from '@/components/main/aboutBlock/mosaicBlock';

export const AboutBlock: FC = ({}) => {
  return (
    <>
      <div className={styles.aboutCompanyContainer}>
        <div className={styles.aboutCompanyBlock}>
          <div className={styles.leftSideAboutCompany}>
            <div className={stylesMain.titleBlockContainer}>
              <div className={stylesMain.feature} />
              <span className={stylesMain.bigHText}>О КОМПАНИИ</span>
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

                  <span className={stylesMain.defaultText}>АВИАПЕРЕВОЗКИ</span>
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

                    <span className={styles.defaultText}>ГРУЗОПЕРЕВОЗКИ</span>
                  </div>
                </div>
              </div>

              <div className={styles.squareBlock}>
                <div className={styles.iconContainerAbout}>
                  <div className={styles.iconBlockAbout}>
                    <DirectionsBoatFilledIcon
                      sx={{ width: '40px', height: '40px' }}
                    />
                  </div>

                  <span className={stylesMain.defaultText}>
                    МОРСКИЕ ПЕРЕВОЗКИ
                  </span>
                </div>
              </div>

              <div className={styles.squareBlock}>
                <div className={styles.iconContainerAbout}>
                  <div className={styles.iconBlockAbout}>
                    <DirectionsRailwayIcon
                      sx={{ width: '40px', height: '40px' }}
                    />
                  </div>

                  <span className={stylesMain.defaultText}>Ж/Д ПЕРЕВОЗКИ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MosaicBlock />
    </>
  );
};

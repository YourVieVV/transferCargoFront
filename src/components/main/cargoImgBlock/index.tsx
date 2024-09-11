import React, { FC } from 'react';
import * as styles from './styleCargoImgBlock.module.scss';

export const CargoImgBlock: FC = ({}) => {
  return (
    <div className={styles.cargoImage}>
      <div className={styles.containerInMain}>
        <div className={styles.containerCargoText}>
          <span className={styles.cargoBigText}>ГРУЗОВЫЕ ПЕРЕВОЗКИ</span>
          <span className={styles.cargoSmallText}>
            Перевозка крупногабаритных грузов по России и Европе. Полное
            экспедирование, страхование, упаковка и хранение грузов
          </span>
        </div>
      </div>
    </div>
  );
};

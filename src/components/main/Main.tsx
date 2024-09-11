import React from 'react';
import { CargoImgBlock } from '@/components/main/cargoImgBlock';
import { CalcAndTrackBlock } from '@/components/main/calcAndTrackBlock';
import { AboutBlock } from '@/components/main/aboutBlock';

export const Main = () => {
  return (
    <>
      <CargoImgBlock />

      <CalcAndTrackBlock />

      <AboutBlock />
    </>
  );
};

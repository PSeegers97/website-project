import React, { FC } from 'react';
import styles from './BlaBlaBlaKat.module.scss';

interface BlaBlaBlaKatProps {}

const BlaBlaBlaKat: FC<BlaBlaBlaKatProps> = () => (
  <div className={styles.BlaBlaBlaKat} data-testid="BlaBlaBlaKat">
      <div className={styles.firstLine}>BLA</div>
      <div className={styles.secondLine}>BLA</div>
      <div className={styles.thirdLine}>BLA</div>
      <div className={styles.fourthLine}>KAT</div>
  </div>
);

export default BlaBlaBlaKat;

import React, { FC } from 'react';
import styles from './Tsp.module.scss';
import TAnimation from "./TAnimation/TAnimation";

interface TspProps {}

const Tsp: FC<TspProps> = () => (
  <div className={styles.Tsp} data-testid="Tsp">
      <div className={styles.headerSlim}>Tsp Component</div>
      <div className={styles.headerFat}>Tsp Component</div>
      <TAnimation></TAnimation>
  </div>
);

export default Tsp;

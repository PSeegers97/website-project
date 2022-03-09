import React, { FC } from 'react';
import styles from './SwimCity.module.scss';

interface SwimCityProps {}

const SwimCity: FC<SwimCityProps> = () => (
  <div className={styles.SwimCity} data-testid="SwimCity">
    <div className={styles.dateBlock}>
        <div className={styles.firstDateLine}>
            <div className={styles.startDate}>
                25.5.
            </div>
            <div className={styles.dateDash}>
                -
            </div>
        </div>
        <div className={styles.secondDateLine}>
            <div className={styles.endDateDay}>29.</div>
            <div className={styles.endDateMonth}>9.</div>
            <div className={styles.endDateYear}>2019</div>
        </div>
    </div>


      <div className={styles.swimLine}>SWIM</div>
      <div className={styles.cityLine}>CITY</div>
      <div className={styles.slamLine}>SLAM</div>

  </div>
);

export default SwimCity;

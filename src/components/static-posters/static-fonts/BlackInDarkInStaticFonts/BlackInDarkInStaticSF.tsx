import React from "react";
import styles from './BlackInDarkInStaticSF.module.scss';

function BlackInDarkInStaticSF() {
    return (
        <div className={styles.BlackInDarkIn}>
            <div className={styles.poster}>
                <div className={styles.upperWrapper}>
                    <div className={styles.blackLine}>
                        Black
                    </div>
                    <div className={styles.inLine}>
                        <div className={styles.firstIn}>
                            in
                        </div>

                        <div className={styles.generalInformation}>
                            <div className={styles.dateLine}>3.12.2010 - 27.2.2011</div>
                            <div className={styles.exhibitionName}>Die Neue Sammlung</div>
                            <div className={styles.museumName}>The International Design Museum</div>
                            <div className={styles.name}>Pinakothek der Moderne</div>
                        </div>
                    </div>
                </div>
                <div className={styles.lowerWrapper}>
                    <div className={styles.darkLine}>

                        Dark

                    </div>
                    <div className={`${styles.inLine} ${styles.authorLine}`}>
                        <div className={styles.hubertusHamm}>Hubertus Hamm</div>
                        <div className={styles.secondIn} id={'secondIn'}>
                            in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlackInDarkInStaticSF;

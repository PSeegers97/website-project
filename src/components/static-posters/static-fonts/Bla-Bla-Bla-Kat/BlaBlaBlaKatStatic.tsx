import React from 'react';
import styles from './BlaBlaBlaKatStatic.module.scss';

function BlaBlaBlaKatStatic() {
    return(
        <div className={styles.BlaBlaBlaKatStatic}>
            <div className={styles.firstLine}>BLA</div>
            <div className={styles.secondLine}>BLA</div>
            <div className={styles.thirdLine}>BLA</div>
            <div className={styles.fourthLine}>KAT</div>
        </div>
    );
}

export default BlaBlaBlaKatStatic;

import React, {FC} from 'react';
import styles from './SwimCity.module.scss';
import useFitText from "use-fit-text";

interface SwimCityProps {
}

const SwimCity: FC<SwimCityProps> = () => (

    <div className={styles.poster} data-testid="SwimCity">
        <div className={styles.SwimCity}>
            <div className={styles.topInfoLine}>
                <div className={styles.hostInfo}>
                    <div className={styles.leftBox}>
                        <div className={styles.firstLine}> SCHWEIZERISCHES</div>
                        <div className={styles.secondLine}>MUSEUM</div>
                        <div className={styles.thirdLine}>ARCHITECTURE</div>
                    </div>
                    <div className={styles.rightBox}>
                        <div className={styles.firstLine}>ARCHITEKTUR-</div>
                        <div className={styles.secondLine}>SWISS</div>
                        <div className={styles.thirdLine}>MUSEUM</div>
                    </div>
                </div>
                <div className={styles.locationInfo}>
                    <div className={styles.leftBox}>
                        <div className={styles.firstLine}>STEINBERG</div>
                        <div className={styles.secondLine}>CH-4051</div>
                        <div className={styles.thirdLine}>WWW . SAM-BASEL</div>
                    </div>
                    <div className={styles.rightBox}>
                        <div className={styles.firstLine}>7</div>
                        <div className={styles.secondLine}>BASEL</div>
                        <div className={styles.thirdLine}>ORG</div>
                    </div>
                </div>
                <div className={styles.openingHoursInfo}>
                    <div className={styles.leftBox}>
                        <div className={styles.firstLine}>DI:MI:FR:/</div>
                        <div className={styles.secondLine}>DO:/</div>
                        <div className={styles.thirdLine}>SA:SO:/</div>
                    </div>
                    <div className={styles.middleBox}>
                        <div className={styles.firstLine}>TUE:WED:FRI:</div>
                        <div className={styles.secondLine}>THU:</div>
                        <div className={styles.thirdLine}>SAT:SUN:</div>
                    </div>
                    <div className={styles.rightBox}>
                        <div className={styles.firstLine}>11-18</div>
                        <div className={styles.secondLine}>11-20:30</div>
                        <div className={styles.thirdLine}>11-17</div>
                    </div>
                </div>
                <div className={styles.lastLine}>
                    <div className={styles.firstLine}>H</div>
                    <div className={styles.secondLine}>H</div>
                    <div className={styles.thirdLine}>H</div>
                </div>
            </div>
            <div className={styles.dateBlock}>
                <div className={styles.dateBlockTop}>
                    <div className={`${styles.firstDateLine} ${styles.dateLine}`}>
                        <div className={styles.startDate}>
                            25.5.
                        </div>
                        <div className={styles.dateDash}>
                            -
                        </div>
                    </div>
                    <div className={`${styles.secondDateLine} ${styles.dateLine}`}>
                        <div className={styles.endDateDay}>29.</div>
                        <div className={styles.endDateMonth}>9.</div>
                        <div className={styles.endDateYear}>2019</div>
                    </div>
                </div>

                <div className={styles.dateBlockSpine}>
                    <div className={`${styles.firstDateLine} ${styles.dateLine}`}>
                        <div className={styles.startDate}>
                            25.5.
                        </div>
                        <div className={styles.dateDash}>
                            -
                        </div>
                    </div>
                    <div className={`${styles.secondDateLine} ${styles.dateLine}`}>
                        <div className={styles.endDateDay}>29.</div>
                        <div className={styles.endDateMonth}>9.</div>
                        <div className={styles.endDateYear}>2019</div>
                    </div>
                </div>

            </div>

            <div className={styles.eventName}>
                <div className={styles.eventNameTop}>
                    <div className={`${styles.swimLine} ${styles.event}`}>
                        <div className={`${styles.firstLetter} ${styles.letters}`}>S</div>
                        <div className={`${styles.secondLetter} ${styles.letters}`}>W</div>
                        <div className={`${styles.thirdLetter} ${styles.letters}`}>I</div>
                        <div className={`${styles.fourthLetter} ${styles.letters}`}>M</div>
                    </div>
                    <div className={`${styles.cityLine} ${styles.event}`}>
                        <div className={`${styles.firstLetter} ${styles.letters}`}>C</div>
                        <div className={`${styles.secondLetter} ${styles.letters}`}>I</div>
                        <div className={`${styles.thirdLetter} ${styles.letters}`}>T</div>
                        <div className={`${styles.fourthLetter} ${styles.letters}`}>Y</div>
                    </div>
                    <div className={`${styles.cityLine} ${styles.event}`}>
                        <div className={`${styles.firstLetter} ${styles.letters}`}>S</div>
                        <div className={`${styles.secondLetter} ${styles.letters}`}></div>
                        <div className={`${styles.thirdLetter} ${styles.letters}`}>A</div>
                        <div className={`${styles.fourthLetter} ${styles.letters}`}>M</div>
                    </div>
                </div>

                <div className={styles.eventNameSpine}>
                    <div className={`${styles.swimLineSpine} ${styles.event}`}>
                        <div className={`${styles.firstLetter} ${styles.letters}`}>S</div>
                        <div className={`${styles.secondLetter} ${styles.letters}`}>W</div>
                        <div className={`${styles.thirdLetter} ${styles.letters}`}>I</div>
                        <div className={`${styles.fourthLetter} ${styles.letters}`}>M</div>
                    </div>
                    <div className={`${styles.cityLineSpine} ${styles.event}`}>
                        <div className={`${styles.firstLetter} ${styles.letters}`}>C</div>
                        <div className={`${styles.secondLetter} ${styles.letters}`}>I</div>
                        <div className={`${styles.thirdLetter} ${styles.letters}`}>T</div>
                        <div className={`${styles.fourthLetter} ${styles.letters}`}>Y</div>
                    </div>
                    <div className={`${styles.slamLineSpine} ${styles.event}`}>
                        <div className={`${styles.firstLetter} ${styles.letters}`}>S</div>
                        <div className={`${styles.secondLetter} ${styles.letters}`}></div>
                        <div className={`${styles.thirdLetter} ${styles.letters}`}>A</div>
                        <div className={`${styles.fourthLetter} ${styles.letters}`}>M</div>
                    </div>
                </div>

            </div>
        </div>
    </div>

);

export default SwimCity;

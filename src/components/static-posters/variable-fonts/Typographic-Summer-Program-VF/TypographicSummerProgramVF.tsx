import React from "react";
import styles from './TypographicSummerProgramVF.module.scss';

function TypographicSummerProgramVF() {
    return (
        <div className={styles.poster} data-testid="Tsp">
            <div className={styles.tsp}>
                <div className={styles.tAnimation}>
                    T
                </div>
                <div className={styles.secondLine}>
                    <div className={styles.bigFont}>yp</div>
                    <div className={styles.smallFontBlock}>
                        <div className={styles.firstSmallFontBlockLine}>Session I</div>
                        <div className={styles.secondSmallFontBlockLine}>June 17-30</div>
                        <div className={styles.thirdSmallFontBlockLine}>2018</div>
                    </div>

                    <div className={styles.rotatedLineLeft}>I</div>
                </div>
                <div className={styles.thirdLine}>
                    <div className={styles.singleChar}>
                        o
                    </div>

                    <div className={styles.movingRightAnimation}>
                        <div>
                            gr
                        </div>

                        <div className={styles.thirdLineSmallFontBlock}>
                            <div className={styles.firstSmallFontBlockLine}>2 weeks</div>
                            <div className={styles.secondSmallFontBlockLine}>12 students</div>
                            <div className={styles.thirdSmallFontBlockLine}>20 tons of equipment</div>
                        </div>
                    </div>
                </div>

                <div className={styles.fourthLine}>
                    <div className={styles.singleChar}>
                        a
                    </div>
                    <div className={styles.movingRightAnimation}>
                        ph
                    </div>
                    <div className={styles.movingAndFadingAnimation}>
                        i
                    </div>
                </div>

                <div className={styles.fallingAnimation}>c</div>

                <div className={styles.sixthLine}>
                    <div className={styles.layingLine}> I</div>
                    <div className={styles.summerAnimation}>
                        <div className={styles.stayingChars}>Su</div>
                        <div className={styles.movingRightAnimation}>
                            <div className={styles.farMovingAnimation}>m</div>
                            <div className={styles.farMovingAnimation}>
                                <div className={styles.farMovingLettersAnimation}>me</div>
                                <div className={styles.movingFarRightAnimation}>r</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.seventhLine}>
                    <div className={styles.stayingChars}>Pr</div>
                    <div className={styles.movingRightAnimation}>
                        <div className={styles.singleChar}>o</div>
                        <div className={styles.seventhLineSmallFontBlock}>
                            <div className={styles.firstSmallFontBlockLine}>Session II</div>
                            <div className={styles.secondSmallFontBlockLine}>August 5-18</div>
                            <div className={styles.thirdSmallFontBlockLine}>2018</div>
                        </div>
                    </div>
                </div>

                <div className={styles.eighthLine}>
                    <div className={styles.pullingLeftAnimation}>g</div>
                    <div className={styles.singleChar}>r</div>
                    <div className={styles.movingRightAnimation}>
                        <div className={styles.movingSingleChar}>a</div>
                        <div className={styles.pullingRightAnimation}>m</div>
                    </div>
                    <div className={styles.rotatedLineLeft}>I</div>
                </div>

                <div className={styles.ninethLine}>
                    <div className={styles.stayingChars}>wi</div>
                    <div className={styles.movingRightMultipleCharsAnimation}>
                        <div className={styles.multipleChars}>th</div>
                        <div className={styles.smallFontBlock}>
                            <div className={styles.firstSmallFontBlockLine}>in</div>
                            <div className={styles.secondSmallFontBlockLine}>Näfels</div>
                            <div className={styles.thirdSmallFontBlockLine}>Switzerland</div>
                        </div>
                    </div>
                </div>
                <div className={styles.tenthLine}>
                    <div className={styles.singleChar}>D</div>
                    <div className={styles.movingRightMultipleCharsAnimation}>af</div>
                    <div className={styles.movingInFromRightToLeft}>
                        <div className={styles.pointDroppingAnimation}>
                            <div className={styles.dotDropAnimation}>.</div>
                            <div className={styles.singleSmallerChar}>l</div>
                        </div>
                        <div className={styles.pushingBlockAnimation}>
                            <div className={styles.firstSmallLine}>www.</div>
                            <div className={styles.secondSmallLine}>typographic-</div>
                            <div className={styles.thirdSmallLine}>summerprogram.ch</div>
                        </div>
                    </div>
                </div>
                <div className={styles.eleventhLineAnimation}>
                    <div className={styles.stayingChars}>
                        Kü
                    </div>
                    <div className={styles.movingRightAnimation}>h</div>
                </div>
                <div className={styles.twelvesLine}>
                    <div className={styles.rotatedLineRight}> I</div>
                    <div className={styles.stayingBlock}>
                        <div className={styles.stayingChars}>ne</div>
                        <div className={styles.smallFontBlock}>
                            <div className={styles.firstSmallFontBlockLine}>Apply</div>
                            <div className={styles.secondSmallFontBlockLine}>online</div>
                            <div className={styles.thirdSmallFontBlockLine}>now!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypographicSummerProgramVF;

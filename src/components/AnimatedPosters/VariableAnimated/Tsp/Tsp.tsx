import React, {useEffect, useState} from 'react';
import variableAnimated from './Tsp.module.scss';
import staticAnimated from '../../StaticAnimated/TypographicSummerProgramStaticAnimated.module.scss';
import staticStatic from '../../../static-posters/static-fonts/TypographicSummerProgramStatic.module.scss';
import variableStatic from '../../../static-posters/variable-fonts/TypographicSummerProgramVF.module.scss';
import {useLocation} from "react-router-dom";
import tBackground from '../../../../assets/graphic_elements/TMovement.svg'


function Tsp() {
    const pathname = useLocation().pathname;
    const [styles, setStyles] = useState(staticStatic);
    useEffect(() => {
        if (pathname.includes('variable')) {
            if (pathname.includes('variableAnimated')) {
                setStyles(variableAnimated);
            } else if (pathname.includes('variableInteractive')) {
                console.log('variableInteractive')
            } else {
                setStyles(variableStatic);
            }
        }
        if (pathname.includes('static')) {
            if (pathname.includes('staticAnimated')) {
                setStyles(staticAnimated);
            } else if (pathname.includes('staticInteractive')) {
                console.log('staticInteractive')
            } else {
                setStyles(staticStatic);
            }

        }
    });

    return (
        <div className={styles.Tsp} data-testid="Tsp">
            <div className={styles.firstLine}>
                <div className={styles.shortLine}></div>
                <div className={styles.tAnimation}>
                    T
                </div>
                <div className={styles.tBackground}>
                </div>
            </div>
            <div className={styles.secondLine}>
                <div className={styles.shortLine}></div>
                <div className={styles.bigFont}>
                    <div>y</div>
                    <div className={styles.shortLine}></div>
                    <div>p</div>
                </div>
                <div className={styles.shortLine}></div>
                <div className={styles.smallFontBlock}>
                    <div className={styles.firstSmallFontBlockLine}>Session I</div>
                    <div className={styles.secondSmallFontBlockLine}>June 17-30</div>
                    <div className={styles.thirdSmallFontBlockLine}>2018</div>
                </div>

                <div className={styles.rotatedLineLeft}>I</div>
            </div>
            <div className={styles.thirdLine}>
                <div className={styles.shortLine}></div>
                <div className={styles.singleChar}>
                    o
                </div>
                <div className={styles.shortLine}></div>


                <div className={styles.movingRightAnimation}>
                    <div className={styles.shortLine}></div>
                    <div>g</div>
                    <div className={styles.shortLine}></div>
                    <div>r</div>
                    <div className={styles.shortLine}></div>

                    <div className={styles.thirdLineSmallFontBlock}>
                        <div className={styles.firstSmallFontBlockLine}>2 weeks</div>
                        <div className={styles.secondSmallFontBlockLine}>12 students</div>
                        <div className={styles.thirdSmallFontBlockLine}>20 tons of equipment</div>
                    </div>
                </div>
            </div>

            <div className={styles.fourthLine}>
                <div className={styles.shortLine}></div>
                <div className={styles.singleChar}>
                    a
                </div>
                <div className={styles.shortLine}></div>

                <div className={styles.movingRightAnimation}>
                    <div className={styles.shortLine}></div>
                    <div>p</div>
                    <div className={styles.shortLine}></div>
                    <div>h</div>
                    <div className={styles.shortLine}></div>
                </div>

                <div className={styles.movingAndFadingAnimation}>
                    <div className={styles.shortLine}></div>
                    <div className={styles.fadingAnimation}>i</div>
                </div>
                <div className={styles.backgroundFadingI}></div>
            </div>

            <div className={styles.fallingAnimationWithHelperLines}>
                <div className={styles.upperHelperLine}></div>
                <div className={styles.fallingAnimation}>c</div>
                <div className={styles.lowerHelperLine}></div>
            </div>

            <div className={styles.sixthLine}>
                <div className={styles.layingLine}> I</div>
                <div className={styles.summerAnimation}>
                    <div className={styles.stayingChars}>
                        <div className={styles.shortLine}></div>
                        <div>S</div>
                        <div className={styles.shortLine}></div>
                        <div>u</div>
                        <div className={styles.shortLine}></div>
                    </div>
                    <div className={styles.diagonalLine}></div>
                    <div className={styles.movingRightAnimation}>
                        <div className={styles.farMovingAnimationFirstM}>
                            <div className={styles.shortLine}></div>
                            <div>m</div>
                            <div className={styles.shortLine}></div>
                        </div>

                        <div className={styles.farMovingAnimation}>

                            <div className={styles.farMovingLettersAnimation}>
                                <div className={styles.shortLine}></div>
                                <div>m</div>
                                <div className={styles.shortLine}></div>
                                <div>e</div>
                                <div className={styles.shortLine}></div>
                            </div>

                            <div className={styles.movingFarRightAnimation}>
                                <div className={styles.leftLongLine}></div>
                                <div>r</div>
                                <div className={styles.rightLongLine}></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.seventhLine}>
                <div className={styles.shortLine}></div>
                <div className={styles.stayingChars}>
                    <div>P</div>
                    <div className={styles.shortLine}></div>
                    <div>r</div>
                </div>
                <div className={styles.shortLine}></div>
                <div className={styles.movingRightAnimation}>
                    <div className={styles.shortLine}></div>
                    <div className={styles.singleChar}>o</div>
                    <div className={styles.shortLine}></div>
                    <div className={styles.seventhLineSmallFontBlock}>
                        <div className={styles.firstSmallFontBlockLine}>Session II</div>
                        <div className={styles.secondSmallFontBlockLine}>August 5-18</div>
                        <div className={styles.thirdSmallFontBlockLine}>2018</div>
                    </div>
                </div>
            </div>

            <div className={styles.eighthLine}>
                <div className={styles.pullingArrowLeft}></div>
                <div className={styles.pullingLeftAnimation}>g</div>
                <div className={styles.shortLine}></div>
                <div className={styles.singleChar}>r</div>
                <div className={styles.shortLine}></div>
                <div className={styles.movingRightAnimation}>
                    <div className={styles.shortLine}></div>
                    <div className={styles.movingSingleChar}>a</div>
                    <div className={styles.shortLine}></div>
                    <div className={styles.pullingRightAnim}>
                        <div className={styles.shortLine}></div>
                        <div className={styles.pullingRightAnimation}>m</div>
                        <div className={styles.pullingArrowRight}></div>
                    </div>
                </div>
                <div className={styles.rotatedLineLeft}>I</div>
            </div>

            <div className={styles.ninethLine}>
                <div className={styles.shortLine}></div>
                <div className={styles.stayingChars}>
                    <div>w</div>
                    <div className={styles.shortLine}></div>
                    <div>i</div>
                </div>
                <div className={styles.shortLine}></div>
                <div className={styles.movingRightMultipleCharsAnimation}>
                    <div className={styles.shortLine}></div>
                    <div className={styles.multipleChars}>
                        <div>t</div>
                        <div className={styles.shortLine}></div>
                        <div>h</div>
                    </div>
                    <div className={styles.shortLine}></div>
                    <div className={styles.smallFontBlock}>
                        <div className={styles.firstSmallFontBlockLine}>in</div>
                        <div className={styles.secondSmallFontBlockLine}>Näfels</div>
                        <div className={styles.thirdSmallFontBlockLine}>Switzerland</div>
                    </div>
                </div>
            </div>
            <div className={styles.tenthLine}>
                <div className={styles.shortLine}></div>
                <div className={styles.singleChar}>D</div>
                <div className={styles.shortLine}></div>

                <div className={styles.movingRightMultipleCharsAnimation}>
                    <div className={styles.shortLine}></div>
                    <div>a</div>
                    <div className={styles.shortLine}></div>
                    <div>f</div>
                    <div className={styles.shortLine}></div>
                </div>
                <div className={styles.movingInFromRightToLeft}>
                    {/*<div className={styles.pushingArrowDown}></div>*/}
                    <div className={styles.pointDroppingAnimation}>

                        <div className={styles.dotDropAnimation}>.</div>
                        <div className={styles.singleSmallerChar}>l</div>
                    </div>
                    <div className={styles.shortLine}></div>
                    <div className={styles.pushingBlockAnimation}>
                        <div className={styles.pushingText}>
                            <div className={styles.firstSmallLine}>www.</div>
                            <div className={styles.secondSmallLine}>typographic-</div>
                            <div className={styles.thirdSmallLine}>summerprogram.ch</div>
                        </div>
                        <div className={styles.pushingArrowLeft}></div>
                    </div>
                </div>
            </div>
            <div className={styles.eleventhLine}>
                {/*<div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>
                <div className={styles.shortLine}></div>*/}
            <div className={styles.eleventhLineAnimation}>
                <div className={styles.stayingChars}>
                    <div>K</div>
                    <div>ü</div>
                </div>
                <div className={styles.movingRightAnimation}>h</div>
            </div>
            </div>
            <div className={styles.twelvesLine}>
                <div className={styles.rotatedLineRight}> I</div>
                <div className={styles.stayingBlock}>
                    <div className={styles.shortLine}></div>
                    <div className={styles.stayingChars}>
                        <div>n</div>
                        <div className={styles.shortLine}></div>
                        <div>e</div>
                    </div>
                    <div className={styles.shortLine}></div>
                    <div className={styles.smallFontBlock}>
                        <div className={styles.firstSmallFontBlockLine}>Apply</div>
                        <div className={styles.secondSmallFontBlockLine}>online</div>
                        <div className={styles.thirdSmallFontBlockLine}>now!</div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Tsp;

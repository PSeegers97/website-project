import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import staticStatic from "../../../static-posters/static-fonts/BlackInDarkInStaticFonts/BlackInDarkInStaticSF.module.scss";
import variableAnimated from "../BlackInDarkIn/BlackInDarkInVariableAnimated.module.scss";
import variableStatic from "../../../static-posters/variable-fonts/BlackInDarkInVF/BlackInDarkInStaticVF.module.scss";
import staticAnimated from "../../StaticAnimated/BlackInDarkInStaticAnimated.module.scss";


function BlackInDarkInVariableAnimated(){
    const pathname = useLocation().pathname;
    const [styles, setStyles] = useState(staticStatic);
    useEffect(()=> {
        if (pathname.includes('variable')){
            if (pathname.includes('variableAnimated')){
                setStyles(variableAnimated);
            }
            else if (pathname.includes('variableInteractive')){
                console.log('variableInteractive')
            }
            else {
                setStyles(variableStatic);
            }
        }
        if (pathname.includes('static')){
            if (pathname.includes('staticAnimated')){
                setStyles(staticAnimated);
            }
            else if (pathname.includes('staticInteractive')){
                console.log('staticInteractive')
            }
            else {
                setStyles(staticStatic);
            }

        }
    });
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

                        <div className={`${styles.generalInformation} ${styles.smallBlock}`}>
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
                        <div className={`${styles.hubertusHamm} ${styles.smallBlock}`}>Hubertus Hamm</div>
                        <div className={styles.secondIn} id={'secondIn'}>
                            in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BlackInDarkInVariableAnimated;

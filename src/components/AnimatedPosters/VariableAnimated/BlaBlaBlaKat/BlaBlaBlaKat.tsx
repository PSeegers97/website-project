import React, {useEffect, useState} from 'react';
import variableAnimated from './BlaBlaBlaKat.module.scss';
import {useLocation} from "react-router-dom";
import staticStatic
    from "../../../static-posters/static-fonts/BlaBlaBlaKatStatic.module.scss";
import variableStatic
    from "../../../static-posters/variable-fonts/BlaBlaBlaKatStaticVF.module.scss";
import staticAnimated
    from "../../StaticAnimated/BlaBlaBlaKatStaticAnimated.module.scss";

interface BlaBlaBlaKatProps {}

function BlaBlaBlaKat(){
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
    return(
      <div className={styles.BlaBlaBlaKat} data-testid="BlaBlaBlaKat">
          <div className={styles.firstLine}>BLA</div>
          <div className={styles.secondLine}>BLA</div>
          <div className={styles.thirdLine}>BLA</div>
          <div className={styles.fourthLine}>KAT</div>
      </div>
    );
}

export default BlaBlaBlaKat;

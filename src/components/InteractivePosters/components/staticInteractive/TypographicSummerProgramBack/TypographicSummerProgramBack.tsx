import React, {useEffect, useState} from "react";
import staticInteractive from './TypographicSummerProgramBack.module.scss'
import variableInteractive from '../../variableInteractive/TypographicSummerProgramVariableBack.module.scss';
import {useLocation} from "react-router-dom";


function TypographicSummerProgramBack() {
    const pathname = useLocation().pathname;
    const [styles, setStyles] = useState(staticInteractive);
    useEffect(() =>{
        if (pathname.includes('variable')){
            setStyles(variableInteractive);
        }
        else {
            setStyles(staticInteractive);
        }
    })
    return(
        <div className={styles.posterWrapper}>
            <div className={styles.firstTextBlock}>
                Poster design is the prestigious discipline of reducing content
                and layout ideas to transmit fast and simple messages. Working
                with typography asks for the most simplified approaches.
                Concepts are reduced to be represented only by the shapes
                of the letters.
            </div>
            <div className={styles.secondTextBlock}>
                Here at www.typographic-summerprogram.ch our focus is on
                analog typography and how to create conceptual poster designs.
                We celebrate modern poster design in combination with new
                explorations in letterpress printing.
            </div>
            <div className={styles.thirdTextBlock}>
                We offer an intense 2 week summer program in Switzerland
                for motivated students and professionals to learn new approaches
                to Swiss typography. Swiss designer and letterpress printer
                Dafi Kühne and his team will work closely with a group of up to
                12 participants per session exploring analog experimental
                typography in every detail.
            </div>
            <div className={styles.fourthTextBlock}>
                Daily studio time, typographic layout exercises, introduction
                to letterpress printing, excursions, talks, presentations, 20 tons
                of letterpress equipment and much more! During the 2 weeks,
                each student will develop a concept for a typographic poster that
                will be letterpress printed towards the end of the workshop.
            </div>
            <div className={styles.generalInformation}>
                <div className={styles.firstSession}>
                    Session I
                    June 17-30, 2018, Näfels, Switzerland
                </div>
                <div className={styles.secondSession}>
                    Session II
                    August 5-18, 2018, Näfels, Switzerland
                </div>
                <div className={styles.registrationInformation}>
                    Fee: CHF 1750.-
                    Apply online now!
                    (Application deadline for both sessions: March 30, 2018)
                </div>
                <div className={styles.link}>typographic-summerprogram.ch</div>
            </div>
        </div>
    );
}

export default TypographicSummerProgramBack;

import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import styles from './CallOnMouseChanges.module.scss';
import {MouseHover} from "../MouseHover/MouseHover";
import BlackInDarkIn from "../BlackInDarkIn/BlackInDarkIn";

interface CallOnMouseChangesProps {}

const CallOnMouseChanges: FC<CallOnMouseChangesProps> = () => {
    //const [position, setPosition] = useState(MouseHover);
    //

    const [position, setPosition] = useState({x: 0, y: 0});

    useLayoutEffect(() => {
        const setFromEvent = (e: { clientX: number; clientY: number; }) => setPosition({x: e.clientX, y: e.clientY});
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };

    }, [position]);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    console.log('CALL ON MOUSE CHANGES X: ', position.x, ' Y: ', position.y);
    return (
        <div className={styles.CallOnMouseChanges} data-testid="CallOnMouseChanges">
            <BlackInDarkIn x={position.x} y={position.y} vwidth={vw} vheight={vh} lightRadius={100}></BlackInDarkIn>
        </div>
    );
};

export default CallOnMouseChanges;

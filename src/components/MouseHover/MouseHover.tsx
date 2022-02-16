import React, {FC, useEffect, useState} from 'react';
import styles from './MouseHover.module.scss';

interface MouseHoverProps {}

export const MouseHover = () => {

    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const setFromEvent = (e: { clientX: number; clientY: number; }) => setPosition({x: e.clientX, y: e.clientY});
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };

    }, []);

    console.log('MOUSE HOVER: ', position.x, ' Y: ', position.y);
    return position;

}
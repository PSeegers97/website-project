import React, {Component, FC} from 'react';
import styles from './Demo.module.scss';
import useVariableFont from "react-variable-fonts";

interface DemoProps {}

const initialSettings = {
    wght: 250
}

//@ts-ignore
const Demo = (props) => {
    const [style, updateStyle] = useVariableFont('AvenirNext-Vf', initialSettings)
    const flashlight = () => {

    }
    return (
        <div className={styles.firstLine} style={{...style}}>
            Black
        </div>
    )
}

export default Demo;

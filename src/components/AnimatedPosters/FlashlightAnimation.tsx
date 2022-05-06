import React, {useLayoutEffect, useState} from "react";
import styles from './FlashlightAnimation.module.scss';
import BlackInDarkInVariableAnimated from "./VariableAnimated/BlackInDarkIn/BlackInDarkInVariableAnimated";

function FlashlightAnimation(){
    const [position, setPosition] = useState({x: 0, y: 0});
    let id = setInterval(frame, 10000);


    function frame() {
        if (position.x == 756 && position.y == 1080){
            clearInterval(id);
        } else{

        }

    }

    useLayoutEffect(() => {

    })


    return(
        // Use the interactive version instead of variable animated -> reusable
        <div className={styles.FlashlightAnimation}>
            <BlackInDarkInVariableAnimated></BlackInDarkInVariableAnimated>
        </div>
    );
}

export default FlashlightAnimation;

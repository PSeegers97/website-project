import React, {FC, useState} from 'react';
import './TAnimation.scss';
import useVariableFont from "react-variable-fonts";

const initialSettings = {

    wght:400
}

function consoleLog() {
    console.log('Hallo')
}



/*
function tAnimation(custStyles: string) {
    //let elem = document.getElementById("tAnimate");
    //let pos = 0;

    let number = parseInt(custStyles.split(' ')[1])

    console.log(number)
    clearInterval(id)
    id = setInterval(() => frame, 1000)
    function frame() {
        if (number != 700) {
            number += 30;
            //console.log('IF SCHLEIFE: ',number)

            return number
        }
        else {
            //number -= 30;
            //console.log(number)
            clearInterval(id)
            //return number;
        }
        /!*if (pos == 350) {
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }*!/
            }
            console.log('T ANIMATION: ',number)
            return number;
}*/

class TAnimation extends React.Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = { animationStarted: false}
    }
    //const [normalStyles] = useVariableFont("Arimo-VF", "400")
    //animationStarted = useState(false)
  /*  toggleAnimation = () => {
        this.setState(prevState => ({
            animationStarted: !prevState.animationStarted
        }))
    }*/
    //const [customStyles, updateStyles] = useVariableFont("Arimo-VF", initialSettings);

    /*const fat = 700;
    const randomSetting = () => Math.floor(Math.random()*1000);*/
    render() {
        return (
            <div>
                <div className='Tsp' id='tAnimate'>Typographic Summer Program</div>
                {/*<button onClick={() => updateStyles({wght: tAnimation(customStyles.fontVariationSettings)})}>Drück mich!</button>*/}
                {/*<button onClick={() => this.toggleAnimation()}>PRESS ME</button>*/}
            </div>

        );

    };
};




export default TAnimation;

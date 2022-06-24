import React from 'react';
import styles from './CallOnMouseChanges.module.scss';
import BlackInDarkIn from "../BlackInDarkIn/BlackInDarkIn";

interface CallOnMouseChangesProps {
    animation: boolean,
    variable: boolean
}

class CallOnMouseChanges extends React.Component<CallOnMouseChangesProps, any>{
    constructor(props: CallOnMouseChangesProps) {
        super(props);
        this.state ={
            xCoord: 0,
            yCoord: 150,
            vw: 0,
            vh:0
        }
    }

    private myRef = React.createRef<HTMLDivElement>();

    setFromEvent = (e: { clientX: number; clientY: number; }) => this.setState({xCoord: e.clientX, yCoord: e.clientY});

    componentDidMount() {
        this.setState({vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)})
        if (!this.props.animation){
            console.log('Keine Animation: ', this.props.animation);
            // @ts-ignore
            this.myRef.current.addEventListener("mousemove", this.setFromEvent);
        }
        else{
            setTimeout(this.animateMouseMovementRight.bind(this), 2000);
        }
    }


    /*componentDidUpdate(prevProps: Readonly<CallOnMouseChangesProps>, prevState: Readonly<any>, snapshot?: any) {
        if (!this.props.animation) {
            // @ts-ignore
            this.myRef.current.addEventListener("mousemove", this.setFromEvent)
        }
    }*/


    animateMouseMovementRight() {
        let start = Date.now();
        let timer = setInterval(() => {
            let timePassed = Date.now() - start;
            //console.log('Position: ', position.x)
            // Must be completed with time instead of state
            // -> don't know how to get current state as useEffect uses the initial state
            /*if (position.x >= clientWidth) {
                clearInterval(timer);
            }*/
            if (timePassed >= 2000 && timePassed <= 4000 || timePassed >= 10000 && timePassed <= 12000) {
                this.flareAnimationFromTopRightToLeftBottom();
            }
            if (timePassed >= 0 && timePassed <= 2000 || timePassed >= 4000 && timePassed <= 6000|| timePassed >= 8000 && timePassed <= 10000|| timePassed >= 12000) {
                this.flareAnimationRight();
            }
            if(timePassed >= 6000 && timePassed <= 8000){
                this.flareAnimationFromFirstTextBlockToSecond();
            }
            if (timePassed >= 15000) {
                clearInterval(timer)
            }

        }, 15)

    }

    flareAnimationFromTopRightToLeftBottom(){
        this.setState((prevState: any) => ({xCoord: prevState.xCoord -5, yCoord: prevState.yCoord +1.5}))
    }


    flareAnimationRight(){
        this.setState((prevState: any) => ({xCoord: prevState.xCoord +5}))
    }

    flareAnimationFromFirstTextBlockToSecond() {
        this.setState((prevState: any) => ({xCoord: prevState.xCoord -5, yCoord: prevState.yCoord +2.4}))
    }

    render(){
    return (
        <div ref={this.myRef} className={styles.CallOnMouseChanges} data-testid="CallOnMouseChanges">
            <BlackInDarkIn x={this.state.xCoord} y={this.state.yCoord} vwidth={this.state.vw} vheight={this.state.vh} lightRadius={100} variable={this.props.variable}></BlackInDarkIn>
        </div>
    );
    }
};

export default CallOnMouseChanges;

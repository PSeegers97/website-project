import React from "react";
import styles from './AnimatedText.module.scss';

function sqr(x: number) {
    return x * x;
}

function dist2(v: number[], w: number[]) {
    return sqr(v[0] - w[0]) + sqr(v[1] - w[1]);
}

// p - point (circle Point)
// v - start point of segment (
// w - end point of segment
function distToSegmentSquared(p: number[], v: number[], w: number[]) {
    let l2 = dist2(v, w);
    if (l2 === 0) return dist2(p, v);
    let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
    t = Math.max(0, Math.min(1, t));
    return dist2(p, [v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1])]);
}

// p - point
// v - start point of segment
// w - end point of segment
function distToSegment(p: number[], v: number[], w: number[]) {
    return Math.sqrt(distToSegmentSquared(p, v, w));
}



export interface Props {
    x: number,
    y: number,
    text: string
}

class AnimatedText extends React.Component<Props, any>{
    constructor(props: Props) {
        super(props);

        // @ts-ignore

        this.state = {
            leftTop: [],
            leftBottom: [],
            rightTop:[],
            rightBottom: [],
            centerPoint: [],
            weight: 100
        }
    }
    private myRef = React.createRef<HTMLDivElement>();

    componentDidMount() {
        this.getComponentSize();
        this.checkDistance();
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.x !== prevProps.x || this.props.y !== prevProps.y || this.props.text !== prevProps.text) {
            this.getComponentSize();
            this.checkDistance();
        }

        //console.log('DEBUG Text: ', this.props.text , 'Now: ', this.state.weight, ' Before: ', prevState.weight );
    }

    getComponentSize() {
        // Er bekommt immer wieder nur das erste element
        const element = this.myRef.current;
        //const el2 = document.getElementById(styles.test);
        // @ts-ignore
        let leftTop = [element.offsetLeft, element.offsetTop];
        // @ts-ignore
        let leftBottom = [element.offsetLeft, element.offsetTop + element.offsetHeight];
        // @ts-ignore
        let rightTop = [element.offsetLeft + element.offsetWidth, element.offsetTop];
        // @ts-ignore
        let rightBottom = [element.offsetLeft+ element.offsetWidth, element.offsetTop + element.offsetHeight];
        // @ts-ignore
        let centerPoint = [element.offsetLeft + element.offsetWidth /2, element.offsetTop + element.offsetHeight/2];

        this.setState({leftTop: leftTop, leftBottom: leftBottom, rightTop: rightTop, rightBottom: rightBottom, centerPoint: centerPoint })
    }

    checkDistance(){
        let distanceMouseToLeftVerticalLine = distToSegment([this.props.x, this.props.y], this.state.leftTop, this.state.leftBottom);
        let distanceMouseToLeftHorizontalLine = distToSegment([this.props.x, this.props.y], this.state.leftTop, this.state.rightTop);
        let distanceMouseToRightVerticalLine = distToSegment([this.props.x, this.props.y], this.state.rightTop, this.state.rightBottom);
        let distanceMouseToBottomHorizontalLine = distToSegment([this.props.x, this.props.y], this.state.rightBottom, this.state.leftBottom);
        let distanceMouseToCenter = Math.sqrt((this.state.centerPoint[1] - this.props.y) ** 2 + (this.state.centerPoint[0] - this.props.x) ** 2)

        if (distanceMouseToCenter <= 50) {
            this.setState({weight: 850});
            console.log('Distance cp 50 ', this.props.text);
        }
        else if (distanceMouseToLeftVerticalLine <= 75 || distanceMouseToLeftHorizontalLine <= 75 || distanceMouseToRightVerticalLine <= 75 || distanceMouseToBottomHorizontalLine <= 75 || distanceMouseToCenter <= 75){
            console.log('Distance 75 ', this.props.text)
            this.setState({weight: 780});
        }
        else if (distanceMouseToLeftVerticalLine <= 100 || distanceMouseToLeftHorizontalLine <= 100 || distanceMouseToRightVerticalLine <= 100 || distanceMouseToBottomHorizontalLine <= 100 || distanceMouseToCenter <= 100) {
            console.log('Distance 100 ', this.props.text)
            this.setState({weight: 712});
        }
        else if (distanceMouseToLeftVerticalLine <= 125 || distanceMouseToLeftHorizontalLine <= 125 || distanceMouseToRightVerticalLine <= 125 || distanceMouseToBottomHorizontalLine <= 125 || distanceMouseToCenter <= 125) {
            console.log('Distance 125 ', this.props.text)
            this.setState({weight: 644});
        }
        else if (distanceMouseToLeftVerticalLine <= 150 || distanceMouseToLeftHorizontalLine <= 150 || distanceMouseToRightVerticalLine <= 150 || distanceMouseToBottomHorizontalLine <= 150 || distanceMouseToCenter <= 150) {
            console.log('Distance 150 ', this.props.text)
            this.setState({weight: 576});
        }
        else if (distanceMouseToLeftVerticalLine <= 175 || distanceMouseToLeftHorizontalLine <= 175 || distanceMouseToRightVerticalLine <= 175 || distanceMouseToBottomHorizontalLine <= 175 || distanceMouseToCenter <= 175) {
            console.log('Distance 175 ', this.props.text)
            this.setState({weight: 508});
        }
        else if (distanceMouseToLeftVerticalLine <= 200 || distanceMouseToLeftHorizontalLine <= 200 || distanceMouseToRightVerticalLine <= 200 || distanceMouseToBottomHorizontalLine <= 200 || distanceMouseToCenter <= 200) {
            console.log('Distance 200 ', this.props.text)
            this.setState({weight: 440});
        }
        else if (distanceMouseToLeftVerticalLine <= 225 || distanceMouseToLeftHorizontalLine <= 225 || distanceMouseToRightVerticalLine <= 225 || distanceMouseToBottomHorizontalLine <= 225 || distanceMouseToCenter <= 225) {
            console.log('Distance 225 ', this.props.text)
            this.setState({weight: 372});
        }
        else if (distanceMouseToLeftVerticalLine <= 250 || distanceMouseToLeftHorizontalLine <= 250 || distanceMouseToRightVerticalLine <= 250 || distanceMouseToBottomHorizontalLine <= 250 || distanceMouseToCenter <= 250) {
            console.log('Distance 250 ', this.props.text)
            this.setState({weight: 304});
        }
        else if (distanceMouseToLeftVerticalLine <= 275 || distanceMouseToLeftHorizontalLine <= 275 || distanceMouseToRightVerticalLine <= 275 || distanceMouseToBottomHorizontalLine <= 275 || distanceMouseToCenter <= 275) {
            console.log('Distance 275 ', this.props.text)
            this.setState({weight: 236});
        }
        else if (distanceMouseToLeftVerticalLine <= 300 || distanceMouseToLeftHorizontalLine <= 300 || distanceMouseToRightVerticalLine <= 300 || distanceMouseToBottomHorizontalLine <= 300 || distanceMouseToCenter <= 300) {
            console.log('Distance 300 ', this.props.text)
            this.setState({weight: 168});
        }
       /* else if (distanceMouseToLeftVerticalLine <= 100 || distanceMouseToLeftHorizontalLine <= 100 || distanceMouseToRightVerticalLine <= 100 || distanceMouseToBottomHorizontalLine <= 100 || distanceMouseToCenter <= 100) {
            this.setState({weight: 720});
        }
        else if (distanceMouseToLeftVerticalLine <= 100 || distanceMouseToLeftHorizontalLine <= 100 || distanceMouseToRightVerticalLine <= 100 || distanceMouseToBottomHorizontalLine <= 100 || distanceMouseToCenter <= 100) {
            this.setState({weight: 720});
        }
        else if (distanceMouseToLeftVerticalLine <= 100 || distanceMouseToLeftHorizontalLine <= 100 || distanceMouseToRightVerticalLine <= 100 || distanceMouseToBottomHorizontalLine <= 100 || distanceMouseToCenter <= 100) {
            this.setState({weight: 720});
        }*/
        else{
            this.setState({weight: 100});
        }

    }



    render() {
        return (
            <div id={styles.test}>
                <div ref={this.myRef} className={styles.text} id={styles.text} style={{fontWeight: this.state.weight}}>{this.props.text} </div>
            </div>
        )
    }
}

export default AnimatedText;

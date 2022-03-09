import React, { FC } from 'react';
import styles from './BlackInDarkIn.module.scss';
import {Logger} from "sass";


interface BlackInDarkInProps {}

export interface Props {
    x: number,
    y: number,
    vwidth: number,
    vheight: number,
    lightRadius: number
}


// Taken From:
// https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment

function sqr (x: number) {
    return x * x;
}

function dist2 (v: number[], w: number[]) {
    return sqr(v[0] - w[0]) + sqr(v[1] - w[1]);
}

// p - point (circle Point)
// v - start point of segment (
// w - end point of segment
function distToSegmentSquared (p: number[], v: number[], w: number[]) {
    let l2 = dist2(v, w);
    if (l2 === 0) return dist2(p, v);
    let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
    t = Math.max(0, Math.min(1, t));
    return dist2(p, [ v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1]) ]);
}

// p - point
// v - start point of segment
// w - end point of segment
function distToSegment (p: number[], v: number[], w: number[]) {
    return Math.sqrt(distToSegmentSquared(p, v, w));
}

class BlackInDarkIn extends React.Component<Props, any>{
    constructor(props: Props) {
        super(props);
        this.state = {
            mouseX: 0,
            mouseY: 0,
            weightFirstLine: 250,
            weightSecondLine: 250,
            weightThirdLine: 250,
            weightFourthLine: 250
        }

    }

    onHover(e: any) {
       /* console.log('Target: ',e.target);
        console.log('Childnode: ', e.target.childNodes);
        console.log('ChildNode[0]: ', e.target.childNodes[0]);
        console.log('Type ChildNode[0]: ', typeof e.target.childNodes[0]);
        console.log('Text Childnode: ', e.target.childNodes[0].textContent)
        console.log('Type Childnode: ', typeof e.target.childNodes[0].textContent)*/
            if (e.target.childNodes[0].nodeName == '#text') {
                let leftTop =  [e.target.offsetLeft, e.target.offsetTop];
                let leftBottom = [ e.target.offsetLeft, e.target.getBoundingClientRect().bottom];
                let rightTop = [(e.target.offsetLeft+e.target.offsetWidth) - (1322/100*7) , e.target.offsetTop];
                let rightBottom = [(e.target.offsetLeft+e.target.offsetWidth) - (1322/100*7), e.target.getBoundingClientRect().bottom];
                let centerPoint = [e.target.offsetLeft + e.target.offsetWidth/2, e.target.offsetTop + e.target.offsetHeight /2]


                let distanceMouseToLeftVerticalLine = distToSegment([this.state.mouseX, this.state.mouseY], leftTop, leftBottom);
                let distanceMouseToLeftHorizontalLine = distToSegment([this.state.mouseX, this.state.mouseY], leftTop, rightTop);
                let distanceMouseToRightVerticalLine = distToSegment([this.state.mouseX, this.state.mouseY], rightTop, rightBottom);
                let distanceMouseToBottomHorizontallLine = distToSegment([this.state.mouseX, this.state.mouseY], rightBottom, leftBottom);
                let distanceMouseToCenter = Math.sqrt((centerPoint[1]- this.state.mouseY)**2 + (centerPoint[0]- this.state.mouseX)**2)

              /*  console.log('-------------------------------------')
                console.log('Mauspunkt AUS PROPS X: ', this.props.x, ' Y: ', this.props.y);
                console.log('Mauspunkt aus State X: ', this.state.mouseX, ' Y: ', this.state.mouseY);
                console.log('Mittelpunkt des Blocks: ', centerPoint)
                console.log('Left Top Point: ', leftTop);
                console.log('Left Bottom Point: ', leftBottom);
                console.log('Right Top Point: ', rightTop);
                console.log('Right Bottom Point: ', rightBottom);
                console.log('Margin: ', 1322/100*42);
                console.log('-------------------------------------')
                console.log('DISTANCES')
                console.log('Distance from Mouse to left top to left bottom: ', distanceMouseToLeftVerticalLine);
                console.log('Distance from Mouse to left top to right top: ', distanceMouseToLeftHorizontalLine);
                console.log('Distance from Mouse to right top to right bottom: ', distanceMouseToRightVerticalLine);
                console.log('Distance from Mouse to left bottom to right bottom: ', distanceMouseToBottomHorizontallLine);
                console.log('Distance from Mouse to center: ', distanceMouseToCenter);*/


                // Equal operator variables have to be configured -> font-weight gets smaller sometimes in the block itself

                if (distanceMouseToLeftVerticalLine <= 100 || distanceMouseToLeftHorizontalLine <= 100 || distanceMouseToRightVerticalLine <= 100 || distanceMouseToBottomHorizontallLine <= 100 || distanceMouseToCenter <= 100){
                    if (e.target.childNodes[0].textContent === 'Black'){
                        this.setState({
                            weightFirstLine: 410,
                            weightSecondLine: 250,
                            weightFourthLine: 250,
                            weightThirdLine: 250
                        })
                    }
                    if (e.target.childNodes[0].textContent === 'in'){

                        if (e.target.id == 'firstIn'){
                            this.setState({
                                weightFirstLine: 250,
                                weightSecondLine: 410,
                                weightFourthLine: 250,
                                weightThirdLine: 250
                            })
                        }
                        if (e.target.id == 'secondIn'){
                            this.setState({
                                weightFirstLine: 250,
                                weightSecondLine: 250,
                                weightFourthLine: 410,
                                weightThirdLine: 250
                            })
                        }
                    }

                    if (e.target.childNodes[0].textContent === 'Dark'){
                        this.setState({
                            weightFirstLine: 250,
                            weightSecondLine: 250,
                            weightFourthLine: 250,
                            weightThirdLine: 410
                        })
                    }
                }
                if (distanceMouseToLeftVerticalLine <= 75 || distanceMouseToLeftHorizontalLine <= 75 || distanceMouseToRightVerticalLine <= 75 || distanceMouseToBottomHorizontallLine <= 75 || distanceMouseToCenter <= 75) {
                    if (e.target.childNodes[0].textContent === 'Black'){
                        this.setState({
                            weightFirstLine: 570,
                            weightSecondLine: 250,
                            weightFourthLine: 250,
                            weightThirdLine: 250
                        })
                    }
                    if (e.target.childNodes[0].textContent === 'in'){

                        if (e.target.id == 'firstIn'){
                            this.setState({
                                weightFirstLine: 250,
                                weightSecondLine: 570,
                                weightFourthLine: 250,
                                weightThirdLine: 250
                            })
                            this.setState({weightSecondLine:570})
                        }
                        if (e.target.id == 'secondIn'){
                            this.setState({
                                weightFirstLine: 250,
                                weightSecondLine: 250,
                                weightFourthLine: 570,
                                weightThirdLine: 250
                            })
                        }
                    }

                    if (e.target.childNodes[0].textContent === 'Dark'){
                        this.setState({
                            weightFirstLine: 250,
                            weightSecondLine: 250,
                            weightFourthLine: 250,
                            weightThirdLine: 570
                        })
                    }
                }
                if (distanceMouseToLeftVerticalLine <= 50 || distanceMouseToLeftHorizontalLine <= 50 || distanceMouseToRightVerticalLine <= 50 || distanceMouseToBottomHorizontallLine <= 50 || distanceMouseToCenter <= 50) {
                    if (e.target.childNodes[0].textContent === 'Black'){
                        this.setState({
                            weightFirstLine: 720,
                            weightSecondLine: 250,
                            weightFourthLine: 250,
                            weightThirdLine: 250
                        })
                    }
                    if (e.target.childNodes[0].textContent === 'in'){

                        if (e.target.id == 'firstIn'){
                            this.setState({
                                weightFirstLine: 250,
                                weightSecondLine: 730,
                                weightFourthLine: 250,
                                weightThirdLine: 250
                            })
                        }
                        if (e.target.id == 'secondIn'){
                            this.setState({
                                weightFirstLine: 250,
                                weightSecondLine: 250,
                                weightFourthLine: 730,
                                weightThirdLine: 250
                            })
                        }
                    }

                    if (e.target.childNodes[0].textContent === 'Dark'){
                        this.setState({
                            weightFirstLine: 250,
                            weightSecondLine: 250,
                            weightFourthLine: 250,
                            weightThirdLine: 730
                        })
                    }
                }
                if ( distanceMouseToCenter <= 50) {
                    if (e.target.childNodes[0].textContent === 'Black'){
                        this.setState({
                            weightFirstLine: 900,
                            weightSecondLine: 250,
                            weightFourthLine: 250,
                            weightThirdLine: 250
                        })
                    }
                    if (e.target.childNodes[0].textContent === 'in'){

                        if (e.target.id == 'firstIn'){
                            this.setState({
                                weightFirstLine: 250,
                                weightSecondLine: 900,
                                weightFourthLine: 250,
                                weightThirdLine: 250
                            })
                        }
                        if (e.target.id == 'secondIn'){
                            this.setState({
                                weightFirstLine: 250,
                                weightSecondLine: 250,
                                weightFourthLine: 900,
                                weightThirdLine: 250
                            })
                        }
                    }

                    if (e.target.childNodes[0].textContent === 'Dark'){
                        this.setState({
                            weightFirstLine: 250,
                            weightSecondLine: 250,
                            weightFourthLine: 250,
                            weightThirdLine: 900
                        })
                    }
                }
            } else if (e.target.childNodes[0].nodeName != '#text') {
                this.setState({
                    weightFirstLine: 250,
                    weightSecondLine: 250,
                    weightThirdLine: 250,
                    weightFourthLine: 250})
            }

    }




    isClickInRects(rects: any, x: number, y: number) {
        for (var i = 0; i < rects.length; ++i) {
            var r = rects[i]
            if (r.left<x && r.right>x && r.top<y && r.bottom>y) {
                return r;
            }
        }
        return false;
    }

    setFromEvent = (e: { clientX: number; clientY: number; }) => {this.setState({mouseX: e.clientX, mouseY: e.clientY}
        ); this.onHover(e)};

    componentDidMount() {
        window.addEventListener("mousemove", this.setFromEvent);
        //document.addEventListener('mouseover', this.onHover.bind(this));

        //document.addEventListener('mouseout', )

    }


    render() {
        //document.addEventListener('mouseover', this.onHover);
        //document.addEventListener('mouseover', this.findClickedWord);

        document.documentElement.style.setProperty('--cursorX', this.props.x + 'px')
        document.documentElement.style.setProperty('--cursorY', this.props.y + 'px')
        // @ts-ignore
        return (
            <div className={styles.BlackInDarkIn} data-testid="BlackInDarkIn">
                <div className={styles.poster} id={styles.black}>
                    <div className={styles.firstLine} style={{fontWeight: this.state.weightFirstLine}}>
                        Black
                    </div>
                    <div className={styles.secondLine}>
                        <div className={styles.firstIn} id={'firstIn'} style={{fontWeight: this.state.weightSecondLine}}>
                            in
                        </div>

                        <div className={styles.generalInformation}>
                            <div className={styles.dateLine}>3.12.2010 - 27.2.2011</div>
                            <div className={styles.exhibitionName}>Die Neue Sammlung</div>
                            <div className={styles.museumName}>The International Design Museum</div>
                            <div className={styles.name}>Pinakothek der Moderne</div>
                        </div>
                    </div>
                    <div className={styles.thirdLine} style={{fontWeight: this.state.weightThirdLine}}>

                        Dark

                    </div>
                    <div className={styles.fourthLine}>
                        <div className={styles.hubertusHamm}>Hubertus Hamm</div>
                        <div className={styles.secondIn} id={'secondIn'} style={{fontWeight: this.state.weightFourthLine}}>
                            in
                        </div>
                    </div>
                </div>
            </div>
        )
    }


};

export default BlackInDarkIn;

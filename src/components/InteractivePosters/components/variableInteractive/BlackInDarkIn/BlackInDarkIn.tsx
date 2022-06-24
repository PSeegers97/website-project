import React from 'react';
import styles from './BlackInDarkIn.module.scss';
import AnimatedText from "../../../../AnimatedPosters/VariableAnimated/AnimatedText/AnimatedText";
import staticStyles from './BlackInDarkInStatic.module.scss';


interface BlackInDarkInProps {
    x: number,
    y: number,
    vwidth: number,
    vheight: number,
    lightRadius: number,
    variable: boolean
}



class BlackInDarkIn extends React.Component<BlackInDarkInProps, any> {
    constructor(props: BlackInDarkInProps) {
        super(props);
        this.state = {
            styles: styles
        }
    }


    componentDidMount() {
        this.setStyles();
    }

    componentDidUpdate(prevProps: Readonly<BlackInDarkInProps>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.variable !== prevProps.variable) {
            this.setStyles();
        }
    }

    setStyles(){
        if(!this.props.variable) {
            console.log('Nicht Variable ', this.props.variable);
            this.setState({styles: staticStyles })
        }
        else {
            console.log('Variable: ', this.props.variable);
            this.setState({styles: styles})
        }
    }


    render() {

        document.documentElement.style.setProperty('--cursorX', this.props.x + 'px')
        document.documentElement.style.setProperty('--cursorY', this.props.y + 'px')
        // @ts-ignore
        return (
            <div className={styles.BlackInDarkIn} data-testid="BlackInDarkIn">
                <div className={styles.poster} id={styles.black}>
                    <div className={styles.upperWrapper}>
                        <div className={styles.firstLine} id={styles.firstLine}>
                            <AnimatedText x={this.props.x} y={this.props.y} text={'Black'} />
                        </div>

                        <div className={styles.secondLine}>
                            <div className={styles.firstIn} id={'firstIn'}>
                                <AnimatedText x={this.props.x} y={this.props.y} text={'in'} />
                            </div>
                            <div className={styles.generalInformation}>
                                <div className={styles.dateLine}>3.12.2010 - 27.2.2011</div>
                                <div className={styles.exhibitionName}>Die Neue Sammlung</div>
                                <div className={styles.museumName}>The International Design Museum</div>
                                <div className={styles.name}>Pinakothek der Moderne</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lowerWrapper}>
                        <div className={styles.thirdLine} id={styles.thirdLine}>
                            <AnimatedText x={this.props.x} y={this.props.y} text={'Dark'} />
                        </div>
                        <div className={styles.fourthLine}>
                            <div className={styles.hubertusHamm}>Hubertus Hamm</div>
                            <div className={styles.secondIn} id={'secondIn'}>
                                <AnimatedText x={this.props.x} y={this.props.y} text={'in'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default BlackInDarkIn;

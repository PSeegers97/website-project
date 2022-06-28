import React from 'react';
import style from './BlackInDarkIn.module.scss';
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
            styles: style
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
            console.log('state: ', this.state)
        }
        else {
            console.log('Variable: ', this.props.variable);
            this.setState({styles: style})
            console.log('state: ', this.state.styles)
        }
    }


    render() {
        document.documentElement.style.setProperty('--cursorX', this.props.x + 'px')
        document.documentElement.style.setProperty('--cursorY', this.props.y + 'px')
        // @ts-ignore
        return (
            <div className={this.state.styles.BlackInDarkIn} data-testid="BlackInDarkIn">
                <div className={this.state.styles.poster} id={this.state.styles.black}>
                    <div className={this.state.styles.upperWrapper}>
                        <div className={this.state.styles.firstLine} id={this.state.styles.firstLine}>
                            <AnimatedText x={this.props.x} y={this.props.y} text={'Black'} />
                        </div>

                        <div className={this.state.styles.secondLine}>
                            <div className={this.state.styles.firstIn} id={'firstIn'}>
                                <AnimatedText x={this.props.x} y={this.props.y} text={'in'} />
                            </div>
                            <div className={this.state.styles.generalInformation}>
                                <div className={this.state.styles.dateLine}>3.12.2010 - 27.2.2011</div>
                                <div className={this.state.styles.exhibitionName}>Die Neue Sammlung</div>
                                <div className={this.state.styles.museumName}>The International Design Museum</div>
                                <div className={this.state.styles.name}>Pinakothek der Moderne</div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.styles.lowerWrapper}>
                        <div className={this.state.styles.thirdLine} id={this.state.styles.thirdLine}>
                            <AnimatedText x={this.props.x} y={this.props.y} text={'Dark'} />
                        </div>
                        <div className={this.state.styles.fourthLine}>
                            <div className={this.state.styles.hubertusHamm}>Hubertus Hamm</div>
                            <div className={this.state.styles.secondIn} id={'secondIn'}>
                                <AnimatedText x={this.props.x} y={this.props.y} text={'in'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default BlackInDarkIn;

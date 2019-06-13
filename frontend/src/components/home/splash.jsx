import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props){
        super(props)
        this.state={
            loaded: false, 
            images: [
                "/images/splash1.jpg",
                "/images/splash2.jpg"
            ],
            selectedImage: "/images/splash1.jpg"
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => {
                if (prevState.selectedImage === this.state.images[0]) {
                    return {
                        selectedImage: this.state.images[1]
                    };
                } 
            });
        }, 10000);

        setTimeout(() => {
            this.setState({ loaded: true });
        }, 1000);

        window.scrollTo(0, 0)
    }

    render() {
    
        const splashRightContent = (this.state.loaded) ?
            (<div>
            <div className="splash-text-container">
                <p className="splash-text">Social Q's is an application that gauges your degree of social conformity through a series of 
                'Would You Rather?' and 'Redflag-Dealbreaker?' type questions. Join for free, play a couple rounds, and see how you stack up against the
                    Social Q's population as a whole or against the Social Q's population within your specific demographic.
                </p>
            </div>
            <div className="splash-buttons">
                <Link to={'/signup'} className="splash-sign-up">Create an Account</Link>
                <Link to={'/login'} className="splash-log-in">Log In</Link>
            </div> 
            </div>) : 
            null;
        

        return (
            <div className="splash-container">
                <div className="splash-left">
                    <img className={(this.state.selectedImage === this.state.images[0]) ? "splash-img" : "splash-img-2"}src={this.state.selectedImage} alt="" />
                </div>
                <div className="splash-right">
                    <h1 className="splash-header">How Well Do You Fit In?</h1>
                    {splashRightContent}
                </div>
            </div>
        )
        }
}

export default Splash;


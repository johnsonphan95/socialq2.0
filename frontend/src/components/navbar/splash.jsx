import React from 'react';
import {withRouter, Link} from 'react-router-dom'

class Splash extends React.Component {
  requestQ(type) {
    // this.props.history.push(`/questions/type/${type}`)
  }

  render() {

    const sessionPage = () => {
      return null 
    };

    const notSessionPage = () => {
    return (
      <>
      <div className="question-button-background">
          <div className={(this.props.location.pathname === "/") ? "question-button-container-two" : "question-button-container"}>
            <div className={(this.props.location.pathname === "/") ? "button-container-two" : "button-container"}>
              <div className={(this.props.location.pathname === "/") ? "left-button-two" : "left-button"}> 
              <Link to="/questions/type/wyr">
                <div className={(this.props.location.pathname === "/") ? "wyr-button-two" : "wyr-button"}>
                  Would You <br/> Rather?
                </div>
              </Link>
            </div>
              
              <div className={(this.props.location.pathname === "/") ? "right-button-two" : "right-button"}>

                <Link to="/questions/type/rfdb">
                  <div className={(this.props.location.pathname === "/") ? "rfdb-button-two" : "rfdb-button"}>
                    Red Flag or <br/> Dealbreaker?
                  </div>
                </Link>

            </div>
          </div>
        </div>
      </div> 
      </>
    )
    };

    return(
      (this.props.location.pathname === "/login" || this.props.location.pathname === "/signup") ?
      sessionPage() : notSessionPage()
    )
  }
};

export default withRouter(Splash);
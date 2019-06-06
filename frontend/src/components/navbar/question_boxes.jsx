import React from 'react';
import {withRouter, Link} from 'react-router-dom'

class QuestionBoxes extends React.Component {
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
          <div className={(this.props.location.pathname === "/play") ? "question-button-container-two" : "question-button-container"}>
            <div className={(this.props.location.pathname === "/play") ? "button-container-two" : "button-container"}>
              <div className={(this.props.location.pathname === "/play") ? "left-button-two" : "left-button"}> 
              <Link to="/questions/type/wyr">
                <div className={(this.props.location.pathname === "/play") ? "wyr-button-two" : "wyr-button"}>
                  Would You <br/> Rather?
                </div>
              </Link>
            </div>
              
              <div className={(this.props.location.pathname === "/play") ? "right-button-two" : "right-button"}>

                <Link to="/questions/type/rfdb">
                  <div className={(this.props.location.pathname === "/play") ? "rfdb-button-two" : "rfdb-button"}>
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
      (this.props.location.pathname === "/login" || this.props.location.pathname === "/signup") || (this.props.location.pathname === "/") ?
      sessionPage() : notSessionPage()
    )
  }
};

export default withRouter(QuestionBoxes);
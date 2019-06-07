import React from 'react';
// import {Link} from 'react-router-dom';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayQuestion = this.displayQuestion.bind(this);
  }

  displayQuestion() {
    if (this.props.question.questionType === "wyr") {
      return (
        <div className="question-container-index">
          <div className="question-index">
            <div className="questionComponent">
              Would you rather: {this.props.question.option1} or {this.props.question.option2}
            </div>
          </div>
          <div className="upvoteDownvoteOnIndex">
            <div className="upvoteIndex">
              <i className="likeEmoteIndex far fa-grin-hearts"></i>:  {this.props.question.upvote}
              
            </div>
            <div className="downvoteIndex">
              <i className="dislikeEmoteIndex far fa-flushed"></i>:   {this.props.question.downvote}
               
            </div>
          </div>
        </div>
      )
    } else if (this.props.question.questionType==="rfdb") {
      return (
        <div className="question-container-index">
        <div className="question-index">
          <div className="questionComponent">
              {this.props.question.body} : Red Flag? Deal Breaker? 
          </div>
        </div>
          <div className="upvoteDownvoteOnIndex">
            <div className="upvoteIndex">
              <i className="likeEmoteIndex far fa-grin-hearts"></i>:  {this.props.question.upvote}

            </div>
            <div className="downvoteIndex">
              <i className="dislikeEmoteIndex far fa-flushed"></i>:   {this.props.question.downvote}

            </div>
          </div>
        </div>
          // <div className="rfdb-button">Red Flag</div>
          // <div className="rfdb-button">Deal Breaker</div>
      )
    }
  }

  render() { 
    return (
      <div>
        { this.displayQuestion() }
      </div>
    );
  }
}

export default QuestionDetail;
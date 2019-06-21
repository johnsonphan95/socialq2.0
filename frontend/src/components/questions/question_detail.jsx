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
          {/* <div className="upvoteDownvoteOnIndex">
            <div className="upvoteIndex">
              <i className="far fa-thumbs-up"></i>:  {this.props.question.upvote}
              
            </div>
            <div className="downvoteIndex">
              
              <i className="far fa-thumbs-down"></i>:   {this.props.question.downvote}

            </div>
          </div> */}
        </div>
      )
    } else if (this.props.question.questionType==="rfdb") {
      return (
        <div className="question-container-index">
        <div className="question-index">
          <div className="questionComponent">
              Redflag or Dealbreaker?: {this.props.question.body} 
          </div>
        </div>
          {/* <div className="upvoteDownvoteOnIndex">
            <div className="upvoteIndex">
              <i className="far fa-thumbs-up" id="thumbs-up"></i>:  {this.props.question.upvote}

            </div>
            <div className="downvoteIndex">
              <i className="far fa-thumbs-down"></i>:   {this.props.question.downvote}

            </div>
          </div> */}
        </div>
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
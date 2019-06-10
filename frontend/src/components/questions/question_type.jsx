import React from 'react';
import { stat } from 'fs';


class QuestionTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      type: this.props.match.params.type
    };
    this.handleDownvote = this.handleDownvote.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleOption1 = this.handleOption1.bind(this);
    this.handleOption2 = this.handleOption2.bind(this);
  }

  componentWillMount() {
    this.props.fetchQuestions();
    let qList;
    qList = this.props.questions.filter(
      question => question.questionType === this.props.match.params.type
    );
    let randomQ = qList[Math.floor(Math.random() * qList.length)];
    this.setState({ question: randomQ });
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.match.params.type !== state.type){
  //     return {
  //       question: state.question,
  //       questions: state.questions,
  //       type: props.match.params.type
  //     }
  //   }
  //   return null 
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.type !== this.state.type) {
      debugger
      let qList;
      qList = this.props.questions.filter(
        question => question.questionType === nextProps.match.params.type
      );
      let randomQ = qList[Math.floor(Math.random() * qList.length)];
      this.setState({ question: randomQ });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    debugger
    if (!this.state.question) {
      this.props.fetchQuestions();
      debugger
      let qList;
      qList = this.props.questions.filter(
        question => question.questionType === this.props.match.params.type
      );
      let randomQ = qList[Math.floor(Math.random() * qList.length)];
      this.setState({ question: randomQ });
    } 

    else if(this.state.type !== prevProps.match.params.type) {
      let qList;
      qList = this.props.questions.filter(
        question => question.questionType === this.props.match.params.type
      );
      let randomQ = qList[Math.floor(Math.random() * qList.length)];
      this.setState({ question: randomQ });
    }

  
    // if (
    //   this.props.question.upvote !== this.state.question.upvote ||
    //   this.props.question.downvote !== this.state.question.downvote
    // ) {
    //   this.props.fetchQuestion(this.props.match.params.qid)
    //     .then(({ question }) => {
    //       this.setState({
    //         upvote: question.data.upvote,
    //         downvote: question.data.downvote,
    //       })
    //     })
    // }
    
  }
  handleUpvote(e) {
    e.preventDefault(); 
    let new_data = {
      id: this.state.question._id, 
      upvote: this.state.question.upvote, 
      downvote: this.state.question.downvote
    }
    
    new_data.upvote += 1;
    this.props.updateQuestionField(new_data);
  }

  handleDownvote(e) {
    e.preventDefault();
    let new_data = {
      id: this.state.question._id,
      upvote: this.state.question.upvote,
      downvote: this.state.question.downvote
    }
    new_data.downvote += 1;
    this.props.updateQuestionField(new_data);

  }

  handleOption1(e) {
    e.preventDefault();
    let answer = {
      answer: "a", 
      question: this.state.question._id
    };
    this.props.createAnswer(answer)
      .then(() => this.props.history.push(`/questions/results/${this.state.question._id}`))
    
  }

  handleOption2(e) {
    
    e.preventDefault();
    let answer = {
      answer: "b",
      question: this.state.question._id
    };
    
    this.props.createAnswer(answer)
      .then(() => this.props.history.push(`/questions/results/${this.state.question._id}`))
  }

  displayQuestion() {
    if (this.state.question.questionType === "wyr") {
      return (
        <div className="showbackground">
          <div className="question-container">
            <div className="container-header-parent">
              <div className="container-header">
                <div className="wyr-head">Would You Rather ? </div>
                <div className="upvoteDownvote">
                  <div className="upvote-button" onClick={this.handleUpvote}>
                    <i className="likeEmote far fa-grin-hearts" />{" "}
                    {this.state.question.upvote} <br /> 
                  </div>
                  <div
                    className="downvote-button"
                    onClick={this.handleDownvote}
                  >
                    <i className="dislikeEmote far fa-flushed" />{" "}
                    {this.state.question.downvote}
                  </div>
                </div>
              </div>
              <div>
                <div className="answers">
                  <div className="answer-button" onClick={this.handleOption1}>
                    A: {this.state.question.option1}
                  </div>
                  <div className="answer-button" onClick={this.handleOption2}>
                    B: {this.state.question.option2}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <h4>{this.props.question.option1}: {this.props.question.answer_a}</h4>
                        <h4>{this.props.question.option2}: {this.props.question.answer_b}</h4> */}
          </div>
        </div>
      );
    } else if (this.state.question.questionType === "rfdb") {
      return (
        <div>
          <div>
            <h2>{this.state.question.option1}</h2>
          </div>
          <div>
            <h4 className="rfdb-button" onClick={this.handleOption1}>Red Flag</h4>
          </div>
          <div>
            <h4 className="rfdb-button" onClick={this.handleOption2}>Deal Breaker</h4>
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.state.question === undefined) return null;
    return <>{this.displayQuestion()}</>;
  }
}

export default QuestionTypes;
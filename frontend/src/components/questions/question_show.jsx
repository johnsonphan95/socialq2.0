import React from 'react';

class QuestionShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            upvote: this.props.question.upvote,
            downvote: this.props.question.downvote, 
            answer_a: this.props.question.answer_a,
            answer_b: this.props.question.answer_b,
            id: this.props.match.params.qid
        };
        this.handleDownvote = this.handleDownvote.bind(this);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleOption1 = this.handleOption1.bind(this);
        this.handleOption2 = this.handleOption2.bind(this);
    }   

    componentDidMount(){
        this.props.fetchQuestion(this.props.match.params.qid)
          .then(({question}) => {
              this.setState({
              upvote: question.data.upvote,
              downvote: question.data.downvote, 
              answer_a: question.data.answer_a, 
              answer_b: question.data.answer_b
          })})
    }

    componentDidUpdate() {
      if (
          this.props.question.answer_a !== this.state.answer_a ||
          this.props.question.answer_b !== this.state.answer_b ||
          this.props.question.upvote !== this.state.upvote ||
          this.props.question.downvote !== this.state.downvote 
        ) {
        this.props.fetchQuestion(this.props.match.params.qid)
            .then(({ question }) => {
                this.setState({
                    upvote: question.data.upvote,
                    downvote: question.data.downvote,
                    answer_a: question.data.answer_a,
                    answer_b: question.data.answer_b
                })
            })
          }
    }


    handleUpvote(e){
        e.preventDefault();
        let new_question = Object.assign({}, this.state)
        new_question.upvote += 1
        this.props.updateQuestion(new_question)
    }

    handleDownvote(e){
        e.preventDefault();
        let new_question = Object.assign({}, this.state)
        new_question.downvote += 1
        this.props.updateQuestion(new_question)
    }

    handleOption1(e){
        e.preventDefault();
        let new_question = Object.assign({}, this.state)
        new_question.answer_a += 1
        this.props.updateQuestion(new_question)
            .then(() => this.props.history.push(`/questions/results/${this.props.question._id}`))
    }

    handleOption2(e){
        e.preventDefault();
        let new_question = Object.assign({}, this.state)
        new_question.answer_b += 1
        this.props.updateQuestion(new_question)
            .then(() => this.props.history.push(`/questions/results/${this.props.question._id}`))
    }


    displayQuestion() {
        if (this.props.question.questionType === "wyr") {
            return (
                <div className="showbackground">
                <div className="question-container">
                    <div className="container-header-parent">
                        <div className="container-header">
                            <div className="wyr-head">Would You Rather ? </div>
                            <div className="upvoteDownvote">
                                <div className="upvote-button" onClick={this.handleUpvote}>
                                    <i className="likeEmote far fa-grin-hearts"></i> {this.props.question.upvote} <br/>
                                </div>
                                <div className="downvote-button" onClick={this.handleDownvote}>
                                    <i className="dislikeEmote far fa-flushed"></i> {this.props.question.downvote}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="answers">
                                <div className="answer-button" onClick={this.handleOption1}>
                                    A: {this.props.question.option1}
                                </div>
                                <div className="answer-button" onClick={this.handleOption2}>
                                    B: {this.props.question.option2}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
        } else if (this.props.question.questionType === "RFDB") {
            return (
                <div>
                    <div>
                        <h2>{this.props.question.option1}</h2>
                    </div>
                    <div>
                        <h4 className="rfdb-button">Red Flag</h4>
                    </div>
                    <div>
                        <h4 className="rfdb-button">Deal Breaker</h4>
                    </div>
                </div>
            )
        }
    }

    render(){
        return (
            <div>
                {this.displayQuestion()}
            </div>
        );
    }
}

export default QuestionShow;
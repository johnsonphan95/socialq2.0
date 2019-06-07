import React from 'react';

class QuestionShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            upvote: this.props.question.upvote,
            downvote: this.props.question.downvote, 
            id: this.props.match.params.qid, 
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
          })})
    }

    componentDidUpdate() {
      if (
          this.props.question.upvote !== this.state.upvote ||
          this.props.question.downvote !== this.state.downvote 
        ) {
        this.props.fetchQuestion(this.props.match.params.qid)
            .then(({ question }) => {
                this.setState({
                    upvote: question.data.upvote,
                    downvote: question.data.downvote,
                })
            })
          }
    }


    handleUpvote(e){
        e.preventDefault();
        let new_data = {
            id: this.state.id, 
            upvote: this.state.upvote,
            downvote: this.state.downvote
        }
        new_data.upvote += 1
        this.props.updateQuestionField(new_data)
    }

    handleDownvote(e){
        e.preventDefault();
        
        let new_data = {
            id: this.state.id, 
            upvote: this.state.upvote, 
            downvote: this.state.downvote
        }
        new_data.downvote += 1
        this.props.updateQuestionField(new_data)
    }

    handleOption1(e){
        e.preventDefault();
        let answer = {
            answer: "a",
            question: this.state.id
        };
        this.props.createAnswer(answer)
            .then(() => this.props.history.push(`/questions/results/${this.state.id}`))
    }

    handleOption2(e){
        e.preventDefault();
        let answer = {
            answer: "b",
            question: this.state.id
        };
        this.props.createAnswer(answer)
            .then(() => this.props.history.push(`/questions/results/${this.state.id}`))
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
        } else if (this.props.question.questionType === "rfdb") {
            return (
                // <div>
                //     <div>
                //         <h2>{this.props.question.body}</h2>
                //     </div>
                //     <div>
                //         <h4 className="rfdb-button" onClick={this.handleOption1}>Red Flag</h4>
                //     </div>
                //     <div>
                //         <h4 className="rfdb-button" onClick={this.handleOption2}>Deal Breaker</h4>
                //     </div>
                // </div> 
                // 
                <div className="showbackground">
                    <div className="question-container">
                        <div className="container-header-parent">
                            <div className="container-header">
                                <div className="wyr-head">{this.props.question.body} </div>
                                <div className="upvoteDownvote">
                                    <div className="upvote-button" onClick={this.handleUpvote}>
                                        <i className="likeEmote far fa-grin-hearts"></i> {this.props.question.upvote} <br />
                                    </div>
                                    <div className="downvote-button" onClick={this.handleDownvote}>
                                        <i className="dislikeEmote far fa-flushed"></i> {this.props.question.downvote}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="answers">
                                    <div className="answer-button" onClick={this.handleOption1}>
                                        Red Flag
                                    </div>
                                    <div className="answer-button" onClick={this.handleOption2}>
                                        Dealbreaker
                                    </div>
                                </div>
                            </div>
                        </div>
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
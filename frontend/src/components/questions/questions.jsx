import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import QuestionDetail from './question_detail';

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      questions: []
    }
  }

  componentWillMount() {
    this.props.fetchQuestions();
  }

  componentWillReceiveProps(newState) {
    this.setState({questions: newState.questions});
  }

  render(){
    if (this.state.questions.length === 0) {
      return (<div>There are no questions</div>)
    } else {
      return (
        <div className="questionContainer">
          <div className="allQuestions"> All Questions </div>
          {this.state.questions.map(question => (
            <Link className="questionLink" to={`/questions/${question._id}`}>
            <QuestionDetail 
              question = {question}
              />
            </Link>
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Questions);
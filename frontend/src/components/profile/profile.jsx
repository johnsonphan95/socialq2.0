import React from 'react';
import QuestionDetail from '../questions/question_detail';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }
  componentWillMount() {
    this.props.fetchUserQuestions(this.props.currentUser.id);
  }
  componentWillReceiveProps(newState) {
    this.setState({
      questions: newState.questions
    });
  }
  
  render() {
    if (this.state.questions.length === 0) {
      return (<div>This user has no questions</div>)
    } else {
      return (
        <div>
          <h2>All of Users Questions</h2>
          {this.state.questions.map(question => (
            <QuestionDetail 
              key={question._id} 
              option1={question.option1}
              option2={question.option2}
            />
          ))}
        </div>
      );
    }
  }
}

export default Profile;
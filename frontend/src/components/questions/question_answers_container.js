import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';
import { fetchQuestionAnswers } from '../../actions/answer_actions';
import { fetchAnswerUsers } from '../../actions/user_actions';
import QuestionAnswer from './question_answer';

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questions.question
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (id) => dispatch(fetchQuestion(id)), 
    fetchQuestionAnswers: (data) => dispatch(fetchQuestionAnswers(data)), 
    fetchAnswerUsers: (data) => dispatch(fetchAnswerUsers(data))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionAnswer);
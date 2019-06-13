import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';
import { fetchQuestionAnswers } from '../../actions/answer_actions';
import { fetchUsers } from '../../actions/user_actions';
import QuestionAnswer from './question_answer';

const mapStateToProps = (state, ownProps) => {
  debugger 
  return {
    question: state.questions.question, 
    qId: ownProps.match.params.qid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (id) => dispatch(fetchQuestion(id)), 
    fetchQuestionAnswers: (id) => dispatch(fetchQuestionAnswers(id)), 
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionAnswer);
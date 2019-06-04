import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';
import QuestionAnswer from './question_answer';

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questions.question
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (id) => dispatch(fetchQuestion(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionAnswer);
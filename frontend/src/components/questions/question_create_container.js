import { connect } from 'react-redux';
import { composeQuestion } from '../../actions/question_actions';
import QuestionCreate from './question_create';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newQuestion: state.questions.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeQuestion: data => dispatch(composeQuestion(data))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionCreate);

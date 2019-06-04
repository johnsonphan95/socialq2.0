import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import Questions from './questions';

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.questions.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Questions);

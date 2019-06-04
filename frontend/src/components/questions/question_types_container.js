import { connect } from 'react-redux';
import {
  fetchQuestions,
  updateQuestionField
} from "../../actions/question_actions";
import QuestionTypes from './question_type';

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.questions.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    updateQuestion: data => dispatch(updateQuestionField(data))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionTypes);
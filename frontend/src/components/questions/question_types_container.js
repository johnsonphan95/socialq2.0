import { connect } from 'react-redux';
import {
  fetchQuestions,
  updateQuestionField
} from "../../actions/question_actions";
import {createAnswer} from '../../actions/answer_actions';
import QuestionTypes from './question_type';

const mapStateToProps = (state) => {
  debugger 
  return {
    questions: Object.values(state.questions.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    updateQuestionField: data => dispatch(updateQuestionField(data)), 
    createAnswer: data => dispatch(createAnswer(data))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionTypes);
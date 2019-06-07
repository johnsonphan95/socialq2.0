import { connect } from 'react-redux';
import { fetchQuestion, updateQuestionField } from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';
import QuestionShow from './question_show';

const mapStateToProps = (state, ownProps) => {
    return {
        question: state.questions.question
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: (id) => dispatch(fetchQuestion(id)), 
        updateQuestionField: (data) => dispatch(updateQuestionField(data)), 
        createAnswer: (data) => dispatch(createAnswer(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
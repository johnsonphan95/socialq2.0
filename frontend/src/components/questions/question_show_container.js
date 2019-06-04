import { connect } from 'react-redux';
import { fetchQuestion, updateQuestionField } from '../../actions/question_actions';
import QuestionShow from './question_show';

const mapStateToProps = (state, ownProps) => {
    return {
        question: state.questions.question
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: (id) => dispatch(fetchQuestion(id)), 
        updateQuestion: (data) => dispatch(updateQuestionField(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
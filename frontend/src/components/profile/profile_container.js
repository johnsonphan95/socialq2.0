import { connect } from 'react-redux';
import Profile from './profile';
import { FetchUserQuestions } from '../../actions/question_actions';

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.questions.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserQuestions: id => dispatch(fetchUserQuestions(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);

import React from 'react';
import { connect } from 'react-redux'

import { closeModal } from '../actions/modal_actions';
import QuestionAnswerContainer from './questions/question_answers_container';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'answer':
      component = <QuestionAnswerContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className = "modal-background" onClick={closeModal}>
      <div className = "modal-child" onClick={e => e.stopPropogation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Modal);
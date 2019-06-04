import React from 'react';
import { Switch } from 'react-router-dom';
// always exist on page
import NavBarContainer from './navbar/navbar_container';

// individual pages
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import QuestionCreateContainer from './questions/question_create_container';
import QuestionsContainer from './questions/questions_container';
import QuestionAnswerContainer from './questions/question_answers_container';
import QuestionShowContainer from './questions/question_show_container';
import QuestionTypesContainer from './questions/question_types_container';

import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="app-page">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path = "/signup" component = {SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path = "/questions" component={QuestionsContainer} />
      <Route exact path = "/new_question" component={QuestionCreateContainer} />
      <Route exact path = "/questions/:qid" component={QuestionShowContainer} />
      <Route exact path = "/questions/type/:type" component={QuestionTypesContainer} />
      <Route exact path = "/questions/results/:qid" component={QuestionAnswerContainer} />
    </Switch>
  </div>
)



export default App;

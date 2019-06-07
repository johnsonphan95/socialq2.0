import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import QuestionBoxes from './question_boxes';

class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
     
    this.props.history.replace('/login')
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
          <div className="link-buttons-logged-in">
              <div className="greeting-logged-in">Hello, {this.props.currentUser.username}</div>
            <div>
              <Link to={'/new_question'} className="sign-up">Submit A Question</Link>
              <button onClick={this.logoutUser} className="log-out">Logout</button>
            </div>
          </div>
      );
    } else {
      return (
          <div className="link-buttons">
            <Link to={'/signup'} className="sign-up">Sign Up</Link>
            <Link to={'/login'} className="log-in">Log In</Link>
          </div>
      );
    }
  }

  render() {
    return (
      <>
        <div className="navbar-container">
          <div className="navbar-container-2">
              <div className="navbar-left"></div>
              <Link to={'/questions'} className="app-name">Social Q's</Link>
              {this.getLinks()}
          </div> 
        </div>
        <QuestionBoxes />
      </>
    )
  }
}

export default withRouter(NavBar);
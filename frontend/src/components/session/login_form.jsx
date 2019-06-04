import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/questions');
    }
    this.setState({errors: nextProps.errors})
  }

  componentWillUpdate() {
    this.redirectToIndex();
  } 

  redirectToIndex() {
    if (this.props.signedIn) {
      this.props.history.push('/')
    }
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(user);

  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error,i) => (
          <li key={`error-${i}`} className="errors">
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
      <div className="signup-form">
          <h2 className="signup-header">Sign In</h2>
        <form onSubmit={this.handleSubmit} className="session-form">
          <input type="text"
            value = {this.state.username}
            onChange = {this.update("username")}
            placeholder="Username"
            id="login-username"
          />
          <br />
          <input type="password"
            value = {this.state.password}
            onChange = {this.update("password")}
            placeholder = "Password"
            id="login-password"
          />
          <br />
          <input type = "submit" value = "Log In" className="signup-button"/>
          {this.renderErrors()}
        </form>
        <p className="signup-text">New to Social Q's? <a href="/#/signup" className="signup-link">Create an Account</a></p>
      </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {},
      age: '',
      gender: 'male'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let user ={
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      age: this.state.age,
      gender: this.state.gender
    };
    this.props.signup(user);
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
        <h2 className="signup-header">Create an Account</h2>
        <form onSubmit={this.handleSubmit} className="session-form">
            <br />
            <input type="text"
              value = {this.state.username}
              onChange = {this.update('username')}
              placeholder = "Username"
              id="username"
            />
            <br />
            <input type="number"
              value = {this.state.age}
              onChange = {this.update('age')}
              placeholder = "Age"
              id="age"
            />
            <br />
            <select onChange={this.update('gender')}
            id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
            <input type="password"
              value = {this.state.password}
              onChange = {this.update('password')}
              placeholder = "Password"
              id="password"
            />
            <br />
            <input type ="password"
              value = {this.state.password2}
              onChange = {this.update('password2')}
              placeholder = "Confirm Password"
              id="password-two"
            />
            <br />
            <input type="submit" value = "Sign Up" className="signup-button"/>
            {this.renderErrors()}
            <p className="signup-text">Already have an account? <a href="/#/login" className="signup-link">Sign In</a></p>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
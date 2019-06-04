import React from 'react';

class QuestionCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: "",
      option2: "",
      questionType: "wyr"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let question = {};
    if (this.state.questionType === "rfdb") {
      question = {
        option1: this.state.option1,
        option2: "na",
        questionType: this.state.questionType
      }
    } else {
      question = {
        option1: this.state.option1,
        option2: this.state.option2,
        questionType: this.state.questionType
      };
    }
   
    this.props.composeQuestion(question);
    this.setState({
      option1: "",
      option2: "",
      questionType: ""
    });
    this.props.history.push('/');
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  renderInputs() {
    if (this.state.questionType === "wyr") {
      return (
        <div className="question-create-field">
          <input className="question-create-form-input" type="textarea"
            value={this.state.option1}
            onChange={this.update("option1")}
            placeholder="Answer Choice 1"
          />
          <br />
          <input className="question-create-form-input" type="textarea"
            value={this.state.option2}
            onChange={this.update("option2")}
            placeholder="Answer Choice 2"
          />
        </div>
      )
    } else {
      return (
        <div className="question-create-field">
          <input className="question-create-form-input" type="textarea"
            value={this.state.option1}
            onChange={this.update("option1")}
            placeholder="Question Prompt"
          />
          <br />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="question-create-container">
        <form className="question-create-form" onSubmit={this.handleSubmit}>
          <div className="question-create-field">
            
              <select className="question-create-dropdown" onChange={this.update("questionType")}>
                <option value="wyr">Would You Rather</option>
                <option value="rfdb">Red Flag or Deal Breaker</option>
              </select>
           
            <br />
            {this.renderInputs()}
            <br />
            <input className="question-create-submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default QuestionCreate;
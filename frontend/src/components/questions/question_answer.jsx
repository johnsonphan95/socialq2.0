import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question, 
      users: [], 
      answers: []
    }
    this.filterAnswers = this.filterAnswers.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.qid)
      .then(({question}) => {
        this.setState({
          question: question.data
        })
      })
    this.props.fetchUsers().then(({users}) => {
      this.setState({ 
        users: users.data
      })
    });
    this.props.fetchQuestionAnswers(this.props.qId).then(({answers}) => {
      this.setState({
        answers: answers.data
      })
    });
  }

  componentDidUpdate() {
    if (this.state.question === undefined) {
      this.props
        .fetchQuestion(this.props.match.params.qid)
        .then(({ question }) => {
          this.setState({
            question: question.data
          });
        });
    }
  }

  filterAnswers(){
    let answers = {};
    answers["a"] = this.state.answers.filter((answer) => answer.answer === 'a');
    answers["b"] = this.state.answers.filter((answer) => answer.answer === 'b');
    return answers;
  }

  filterGender(){ 
    let genderAnswers = {};
    genderAnswers["a_male"] = this.state.answers.filter((answer) => answer.answer === 'a' && answer.user.gender === 'male');
    genderAnswers["a_female"] = this.state.answers.filter((answer) => answer.answer === 'a' && answer.user.gender === 'female');
    genderAnswers["b_male"] = this.state.answers.filter((answer) => answer.answer === 'b' && answer.user.gender === 'male');
    genderAnswers["b_female"] = this.state.answers.filter((answer) => answer.answer === 'b' && answer.user.gender === 'female');
    return genderAnswers;
  }

  filterAge(){
    let ageAnswers = {}
    ageAnswers["a_sub18"] = this.state.answers.filter((answer) => answer.answer === "a" &&
      answer.user.age <= 18);
    ageAnswers["a_19_25"] = this.state.answers.filter((answer) => answer.answer === "a" &&
      answer.user.age >= 19 && answer.user.age <= 25);
    ageAnswers["a_26_30"] = this.state.answers.filter((answer) => answer.answer === "a" &&
      answer.user.age >= 26 && answer.user.age <= 30);
    ageAnswers["a_31"] = this.state.answers.filter((answer) => answer.answer === "a" && answer.user.age > 30);
    ageAnswers["b_sub18"] = this.state.answers.filter((answer) => answer.answer === "b" &&
      answer.user.age <= 18);
    ageAnswers["b_19_25"] = this.state.answers.filter((answer) => answer.answer === "b" &&
      answer.user.age >= 19 && answer.user.age <= 25);
    ageAnswers["b_26_30"] = this.state.answers.filter((answer) => answer.answer === "b" &&
      answer.user.age >= 26 && answer.user.age <= 30);
    ageAnswers["b_31"] = this.state.answers.filter((answer) => answer.answer === "b" && answer.user.age > 30);
    return ageAnswers;
  }

  render() {
    if (this.state.question === undefined ) return null;
    if (this.state.answers.length === 0) return null; 
    if (this.state.users.length === 0) return null;

    let answers = this.filterAnswers();
    let genderAnswers = this.filterGender();
    let ageAnswers = this.filterAge();
    // console.log(answers);
    console.log(ageAnswers);
    const data = {
      labels: [
        `${this.props.question.option1}`,
        `${this.props.question.option2}`
      ],
      datasets: [{
        data: [answers["a"].length, answers["b"].length],
        backgroundColor: [
          '#80d4f5',
          '#f05c79'
        ],
        hoverBackgroundColor: [
          '#66AAC4',
          '#C04A61'
        ]
      }]
    };

    const genderData = {
      labels: [
        `${this.props.question.option1} Male`,
        `${this.props.question.option1} Female`,
        `${this.props.question.option2} Male`,
        `${this.props.question.option2} Female`,
      ],
      datasets: [{
        data: [
          genderAnswers["a_male"].length,
          genderAnswers["a_female"].length,
          genderAnswers["b_male"].length,
          genderAnswers["b_female"].length
        ],
        backgroundColor: [
          '#80d4f5',
          '#99DDF7',
          '#f05c79',
          '#F597A9'
        ],
        hoverBackgroundColor: [
          '#66AAC4',
          '#66AAC4',
          '#C04A61',
          '#C04A61'
        ]
      }]
    };


    const ageData = {
      labels: [
        `${this.props.question.option1} <= 18`,
        `${this.props.question.option1} 18 - 25`,
        `${this.props.question.option1} 26 - 30`,
        `${this.props.question.option1} > 30`,
        `${this.props.question.option2} <= 18`,
        `${this.props.question.option2} 18 - 25`,
        `${this.props.question.option2} 26 - 30`,
        `${this.props.question.option2} > 30`
      ],
      datasets: [{
        data: [
          ageAnswers["a_sub18"].length,
          ageAnswers["a_19_25"].length,
          ageAnswers["a_26_30"].length,
          ageAnswers["a_31"].length,
          ageAnswers["b_sub18"].length,
          ageAnswers["b_19_25"].length,
          ageAnswers["b_26_30"].length,
          ageAnswers["b_31"].length,
        ],
        backgroundColor: [
          '#CAEDFB',
          '#ADE4F9',
          '#80D4F5',
          '#52889D',
          '#F9BDC8',
          '#F597A9',
          '#F37D94',
          '#F05C79'
        ],
        hoverBackgroundColor: [
          '#66AAC4',
          '#66AAC4',
          '#66AAC4',
          '#66AAC4',
          '#C04A61',
          '#C04A61',
          '#C04A61',
          '#C04A61'
        ]
      }]
    };

    const header = (this.state.question.questionType==="wyr") ?
    (<div className="wyr-header"> 
      <p>Would You Rather: {this.state.question.option1} or {this.state.question.option2}?</p>
    </div>) :
    (
    <div className="rfdb-header">
      <p>{this.state.question.body}</p>
    </div>
    )

    return (
    <div className="question-answer-container">
      {header} 
      <div className="graph-buisness">
      <div className="total-population-graph">
        <p id="total-population-text">Here's How Everyone Voted:</p>
          <Pie data={data}
              width={100}
              height={100}
              legend={{ display: true, position: 'bottom', labels: { fontColor: "black", fontSize: 18, padding: 20}}}
              options={{ maintainAspectRatio: false }}
              class="pie-graph"
          />
      </div>

      <div className="question-answer-right">
        <div className="age-graph">
          <p id="total-population-text">Age Distribution:</p>
          <Pie 
            data = {ageData}
            width = {100}
            height = {100}
                legend={{ display: true, position: 'right', b: 20, itemWrap: true, labels: { fontColor: "black",  padding: 10} }}
            options={{ maintainAspectRatio: false}}
          />
        </div>
        <div className="gender-graph">
              <p id="total-population-text">Gender Distribution:</p>
              <Pie
                data={genderData}
                width={100}
                height={100}
                legend={{ display: true, position: 'right', labels: { fontColor: "black", fontSize: 12, padding: 10} }}
                options={{ maintainAspectRatio: false }}
              />
        </div>

      </div>
      </div>
    </div>
  )
}
}

export default QuestionAnswer;
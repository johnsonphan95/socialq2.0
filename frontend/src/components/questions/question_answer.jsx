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

  render() {
    if (this.state.question === undefined ) return null;
    if (this.state.answers.length === 0) return null; 
    if (this.state.users.length === 0) return null;

    let answers = this.filterAnswers();
    let genderAnswers = this.filterGender();
    // console.log(answers);
    console.log(genderAnswers);
    const data = {
      labels: [
        `${this.props.question.option1}`,
        `${this.props.question.option2}`
      ],
      datasets: [{
        data: [answers["a"].length, answers["b"].length],
        backgroundColor: [
          '#EF6C33',
          '#AAAAAA'
        ],
        hoverBackgroundColor: [
          '#EF6C33',
          '#AAAAAA'
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
          '#EF6C33',
          '#AAAAAA',
          '#0066ff',
          '#ff66cc'
        ],
        hoverBackgroundColor: [
          '#EF6C33',
          '#AAAAAA',
          '#0066ff',
          '#ff66cc'
        ]
      }]
    };

    const header = (this.state.question.questionType="wyr") ?
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
              legend = {{display: true, labels: {fontSize: 18}}}
              options={{ maintainAspectRatio: false }}
              class="pie-graph"
          />
      </div>

      <div className="question-answer-right">
        <div className="age-graph">
        </div>
        <div className="gender-graph">
              <Doughnut
                data={genderData}
                width={100}
                height={100}
                legend={{ display: true, labels: { fontSize: 18 } }}
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
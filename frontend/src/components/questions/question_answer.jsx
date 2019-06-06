import React from 'react';
import {Pie} from 'react-chartjs-2';

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

  render() {
    if (this.state.question === undefined ) return null;
    if (this.state.answers.length === 0) return null; 
    if (this.state.users.length === 0) return null;

    let answers = this.filterAnswers();
    console.log(answers);
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

    return (
    <> 
      <Pie data={data}
        width={100}
        height={100}
        legend = {{display: true, labels: {fontSize: 18}}}
        options={{ maintainAspectRatio: false }}
      />
      <div>

      </div>
    </>
  )
}
}

export default QuestionAnswer;
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
    // debugger
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

  filterData(){
    let answer1 = []; 
    let answer2 = []; 
    let results = {};

    answer1 = this.state.answers.filter(answer => answer.answer === "a");
    answer2 = this.state.answers.filter(answer => answer.answer === "b");

    
  }

  render() {
    if (this.state.question === undefined ) return null;


    const data = {
      labels: [
        `${this.props.question.option1}`,
        `${this.props.question.option2}`
      ],
      datasets: [{
        data: [`24`, `33`],
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
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.qid)
      .then(({question}) => {
        this.setState({
          question: question.data
        })
      })
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

  render() {
    const data = {
      labels: [
        `${this.props.question.option1}`,
        `${this.props.question.option2}`
      ],
      datasets: [{
        data: [`${this.props.question.answer_a}`, `${this.props.question.answer_b}`],
        backgroundColor: [
          '#EF6C33',
          '#ABDFF1'
        ],
        hoverBackgroundColor: [
          '#EF6C33',
          '#ABDFF1'
        ]
      }]
    };

    if (this.state.question === undefined ) return null;
    return (
    <> 
      <Doughnut data={data}
        width={100}
        height={100}
        legend = {{display: true, labels: {fontSize: 18}}}
        options={{ maintainAspectRatio: false }}
      />
    </>
  )
}
}

export default QuestionAnswer;
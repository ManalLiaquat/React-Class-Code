import React, { Component } from "react";
// import QuizInfo from "./../QuizInfo/QuizInfo";

class QuizList extends Component {
  constructor(props) {
    super(props);
  }

  showInfo(index) {
    console.log(index);
  }

  render() {
    const { allQuiz } = this.props;
    return (
      <ul>
        {allQuiz.map((value, index) => {
          return (
            <li key={`${value}_${index}`}>
              {value.name}
              <button onClick={() => this.props.quiz(index)}>Show Quiz Info</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default QuizList;

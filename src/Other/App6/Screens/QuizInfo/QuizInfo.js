import React, { Component } from "react";

class QuizInfo extends Component {
  constructor(props) {
    super(props);
  }

  /* Body functions */

  render() {
    const { info, back } = this.props;
    return (
      <div>
        <p>Quiz test of: {info.name}</p>
        <p>Total Questions: {info.questions}</p>
        <button onClick={back} >Back to List</button>
      </div>
    );
  }
}

export default QuizInfo;

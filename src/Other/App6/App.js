import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuizList from "./Screens/QuizList/QuizList";
import QuizInfo from "./Screens/QuizInfo/QuizInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [
        { name: "MongoDB", questions: 20 },
        { name: "Express JS", questions: 40 },
        { name: "React JS", questions: 50 },
        { name: "Node JS", questions: 60 }
      ],
      quizInfoObj: null,
      infoBody: false
    };
    this.quizInfo = this.quizInfo.bind(this);
    this.back = this.back.bind(this);
  }

  quizInfo(index) {
    const { quizzes } = this.state;
    this.setState({ quizInfoObj: quizzes[index], infoBody: true });
  }

  back() {
    this.setState({ infoBody: false });
  }
  /* Body functions */

  renderBody() {
    const { quizzes, infoBody, quizInfoObj } = this.state;
    return <div>
        {!infoBody && <QuizList allQuiz={quizzes} info={this.quizInfo} />}
        {infoBody && <QuizInfo info={quizInfoObj} back={this.back} />}
      </div>;
  }

  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">quiz app</h1>
      </header>
    );
  }

  renderFooter() {
    const footer_style = {
      position: "fixed",
      bottom: 0,
      width: "100%",
      backgroundColor: "#222",
      color: "white",
      padding: "10px 0",
      margin: 0
    };
    return <footer style={footer_style}>This is a footer</footer>;
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default App;

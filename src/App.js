import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Container from "./Screens/Container/Container";

class App extends Component {
  constructor() {
    super();
    this.state = { text: "Saylani" };
  }

  /*  */
  static getDerivedStateFromProps(props, state) {
    console.log("======================");
    console.log(props, state);
    console.log("======================");
    return { text: state.text };
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }
  // jab bhi state change hogi child ka event zaroor chalega

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    // recommended
    console.log("componentDidMount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  /* Body functions */

  renderBody() {
    const { text } = this.state;
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
        />
      </div>
    );
  }

  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello World</h1>
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
    // const { text } = this.state;
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

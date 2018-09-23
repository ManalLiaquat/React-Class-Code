import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Container from "./Screens/Container/Container";

class App extends Component {
  constructor() {
    super();
    this.state = { text: "Saylani" };
  }

  /* new life cycle hooks */
  static getDerivedStateFromProps(props, state) {
    // alternate componentWillReceiveProps
    console.log("======================");
    console.log("getDerivedStateFromProps");
    console.log(props, state);
    console.log("======================");
    return { text: state.text };
  }

  componentDidMount() {
    // recommended
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextState.text == "manal") {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return { text: prevState.text };
  }
  componentDidUpdate(prevProps, prevState, snapshop) {
    console.log("componentDidUpdate");
    console.log(snapshop);
  }

  /* new life cycle hooks */

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  // jab bhi state change hogi child ka event zaroor chalega

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  /* Body functions */

  renderBody() {
    const { text } = this.state;
    console.log("render ===> ", text);

    return (
      <div>
        {text}
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

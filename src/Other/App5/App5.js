import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./Screens/button/button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage(bool) {
    this.setState({
      show: bool
    });
  }

  /* Body functions */

  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">switch</h1>
      </header>
    );
  }

  renderBody() {
    const { show } = this.state;

    return (
      <div style={{ marginBottom: "50px" }}>
        <MyButton text="Switch On" jabClickHo={() => this.toggleImage(true)} />
        <MyButton text="Switch Off" jabClickHo={() => this.toggleImage(false)}/>
        
        {show && <img src={logo} alt="img" />}
      </div>
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

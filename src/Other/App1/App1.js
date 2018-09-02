import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App1 extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        "Tikka Boti",
        "Hunter Beef",
        "Gola Kabab",
        "Reshmi Kabab",
        "Kaleji",
        "Beef Pulao",
        "Shaami Kabab",
        "Seekh Kabab",
        "ChatPati Raan",
        "Paye"
      ],
      result: []
    };
  }

  search(param, e) {
    // console.log(param);
    // console.log("this", e.target.value);
    const { list } = this.state;
    const text = e.target.value;
    const result = list.filter(item => {
      let lowerText = text.toLowerCase();
      let lowerItem = item.toLowerCase();
      // return lowerItem.substring(0, lowerText.length).indexOf(lowerText) !== -1;
      // return lowerItem.substring(0, lowerText.length).includes(lowerText);
      // return lowerItem.substring(0, lowerText.length) === lowerText
      // return !lowerItem.indexOf(lowerText);
      return lowerItem.indexOf(lowerText);
    });
    console.log(result);
    this.setState({ result, text });
  }

  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <input
          type="text"
          onChange={this.search.bind(this, "param")}
          placeholder="Search any food"
        />
      </header>
    );
  }

  renderBody() {
    const { list, result, text } = this.state;
    const items = text ? result : list;
    return (
      <div>
        {text && <h3>You are searching for "{text}"</h3>}
        <h1>Khao peo aesh kro</h1>
        <ol>
          {items.map((item, index) => {
            return <li key={`${item}_${index}`}>{item}</li>;
          })}
        </ol>
      </div>
    );
  }

  renderFooter() {
    const footer_style = {
      position: "absolute",
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

export default App1;

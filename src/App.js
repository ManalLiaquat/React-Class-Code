import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: ""
    };
    this.add = this.add.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  /* Functional functions */

  updateText(e) {
    this.setState({
      text: e.target.value
    });
  }

  add() {
    const { text, todos } = this.state;
    todos.push(text);
    this.setState({ todos, text: "" });

    console.log(this.state.todos);
  }

  edit() {
    const { todos } = this.state;

  }

  delete(index) {
    const { todos } = this.state;

  }

  renderTodos() {
    const { todos } = this.state;
    return (
      <ol>
        {todos.map((item, index) => {
          return (
            <li key={`${item}_${index}`}>
              {item}
              <button onClick={this.edit.bind(this, index)}>Edit</button>
              <button onClick={this.delete.bind(this, index)}>Delete</button>
            </li>
          );
        })}
      </ol>
    );
  }

  /* Body functions */


  renderBody() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter something"
          onChange={this.updateText}
          value={this.state.text}
        />
        <button onClick={this.add}>Add</button>
        <hr />
        {this.renderTodos()}
      </div>
    );
  }sd
  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
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

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: "",
      currentIndex: null
    };
    this.add = this.add.bind(this);
    this.updateText = this.updateText.bind(this);
    this.cancel = this.cancel.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
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

  updateTodo() {
    const { todos, text, currentIndex } = this.state;
    todos[currentIndex] = text;
    this.setState({ text: todos[currentIndex], currentIndex: null });
  }

  edit(index) {
    const { todos } = this.state;
    this.setState({ text: todos[index], currentIndex: index });
  }

  delete(index) {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState({ todos, currentIndex: null });
  }

  cancel() {
    this.setState({ text: "", currentIndex: null });
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
    const { currentIndex } = this.state;

    return (
      <div>
        <hr/>
        <input
          type="text"
          placeholder="Enter something"
          onChange={this.updateText}
          value={this.state.text}
        />
        {currentIndex == null ? (
          <button onClick={this.add}>Add</button>
        ) : (
          <span>
            <button onClick={this.updateTodo}>Update</button>
            <button onClick={this.cancel}>Cancel</button>
          </span>
        )}
        <hr />
        {currentIndex != null && (
          <p>You are editing item # {currentIndex + 1} currently</p>
        )}
        {this.renderTodos()}
      </div>
    );
  }
  sd;
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

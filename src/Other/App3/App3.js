import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: "",
      date: new Date().toString(),
      currentIndex: null
    };
    this.updateText = this.updateText.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const { text, list } = this.state;
    const obj = { text, date: new Date().toLocaleString() };
    // console.log(obj);
    list.push(obj);
    this.setState({ list, text: "" });
  }

  updateText(e) {
    this.setState({ text: e.target.value });
  }

  hide(index) {
    const { list } = this.state;
    list[index].hide = true;
    this.setState({ list });
  }

  show(index) {
    const { list } = this.state;
    list[index].hide = false;
    this.setState({ list });
  }

  /* Body functions */

  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Todo List App</h1>
      </header>
    );
  }

  renderBody() {
    const { text, list } = this.state;

    return (
      <div style={{ marginBottom: "50px" }}>
        <input type="text" onChange={this.updateText} value={text} />
        <br />
        {text.split("").reverse()}
        <br />
        <button onClick={this.addItem}>Add</button>

        <ul>
          {list.map((item, index) => {
            return (
              <li>
                {!item.hide && (
                  <p>
                    {item.text.split("").reverse()} | {item.date}
                  </p>
                )}
                {!item.hide ? (
                  <button onClick={this.hide.bind(this, index)}>Hide</button>
                ) : (
                  <button onClick={this.show.bind(this, index)}>Show</button>
                )}
              </li>
            );
          })}
        </ul>
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

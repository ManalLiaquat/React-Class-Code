import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const AbortController = window.AbortController;
const controller = new AbortController();
const signal = controller.signal;

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

class App extends Component {
  constructor() {
    super();
    this.state = { searchTerm: "", result: null };
  }

  search(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}=${searchTerm}`, {
      method: "get",
      signal: signal
    })
      .then(res => res.json())
      .then(result => {
        console.log("Getting data***");
        this.setState({ result });
      })
      .catch(e => alert(e.message));
  }

  abortFetching() {
    console.log("revoking fetch function");
    controller.abort();
  }

  renderBody() {
    const { searchTerm, result } = this.state;
    // console.losg("render ===> ", searchTerm);
    return (
      <div>
        <center>
          <input
            type="text"
            value={searchTerm}
            onChange={e => {
              this.search(e.target.value);
              this.setState({ searchTerm: e.target.value });
            }}
          />
          <button
            onClick={() => {
              this.search(searchTerm);
            }}
          >
            Search
          </button>
          <button onClick={this.abortFetching}>Cancel fetching</button>
        </center>
        <ul>
          {result
            ? result.hits.map((v, i) => {
                return <li key={v.title + "_" + i}>{v.title}</li>;
              })
            : null}
        </ul>
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
      <div>
        <div className="App">{this.renderHeader()}</div>
        {this.renderBody()}
        <div className="App">{this.renderFooter()}</div>
      </div>
    );
  }
}

export default App;

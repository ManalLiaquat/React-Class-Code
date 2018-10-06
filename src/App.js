import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const AbortController = window.AbortController;
const controller = new AbortController();
const signal = controller.signal;

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "React",
      result: null,
      i: 0
    };
  }

  search(searchTerm) {
    let { i, result } = this.state;
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&&${PARAM_PAGE}${i}`,
      {
        method: "get",
        signal: signal
      }
    )
      .then(res => res.json())
      .then(newResult => {
        console.log("Getting data***");
        this.setState({ result: newResult.hits });
        if (i > 0) {
          this.setState({
            result: result.concat(newResult.hits)
          });
        }
      })
      .catch(e => alert(e.message));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = () => {
    if (this.state.result) {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        this.state.result.length
      ) {
        // this.search();
      }
    }
  };

  abortFetching() {
    console.log("revoking fetch function");
    controller.abort();
  }

  renderBody() {
    let { searchTerm, result } = this.state;
    // console.losg("render ===> ", searchTerm);
    return (
      <div>
        <center>
          <input
            type="text"
            value={searchTerm}
            onChange={e => {
              // this.search(e.target.value);
              this.setState({ searchTerm: e.target.value, result: [] });
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
            ? result.map((v, i) => {
                return (
                  <li key={v.title + "_" + i}>
                    {i + 1}. {v.title}
                  </li>
                );
              })
            : null}
          {result && (
            <button
              onClick={() => {
                this.setState({ i: ++this.state.i });
                this.search();
              }}
            >
              Load More
            </button>
          )}
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
        {/* <div className="App">{this.renderFooter()}</div> */}
      </div>
    );
  }
}

export default App;

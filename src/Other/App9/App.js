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
      i: 0,
      pagination: 0
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
          document.body.offsetHeight + 10 &&
        this.state.result.length
      ) {
        // this.setState({ i: ++this.state.i });
        // this.search();
      }
    }
    console.log(
      `${window.innerHeight + window.scrollY} >= ${document.body.offsetHeight +
        10}`
    );
  };

  pagination(i = 0) {
    let { searchTerm } = this.state;
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&&${PARAM_PAGE}${i}`,
      {
        method: "get",
        signal: signal
      }
    )
      .then(res => res.json())
      .then(result => {
        console.log("Getting data***");
        this.setState({ result: result.hits, pagination: result.nbPages });
      })
      .catch(e => alert(e.message));
  }

  componentDidMount() {
    this.pagination();
  }

  abortFetching() {
    console.log("revoking fetch function");
    controller.abort();
  }

  renderBody() {
    let { searchTerm, result, pagination } = this.state;
    // console.losg("render ===> ", searchTerm);
    let pages = [];
    for (let i = 0; i < pagination; i++) pages.push(i);
    const renderPagination = pages.map(v => {
      return (
        <li
          key={v}
          onClick={() => {
            this.pagination(v);
          }}
          style={{
            display: "inline",
            margin: "auto 1px",
            cursor: "pointer",
            padding: "1px",
            border: "thin solid grey"
          }}
        >
          {v + 1}
        </li>
      );
    });
    return (
      <div>
        <center>
          <ul>{renderPagination}</ul>
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
        <ol>
          {result
            ? result.map(v => {
                return (
                  <li key={v.objectID}>
                    <p>{v.title}</p>
                  </li>
                );
              })
            : null}
          {/* {result && (
            <button
              onClick={() => {
                this.setState({ i: ++this.state.i });
                this.search();
              }}
            >
              Load More
            </button>
          )} */}
        </ol>
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

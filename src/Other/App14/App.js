import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleClick = () => {
    const user = {
      name: 'afzal', age: 21
    }
    this.props.history.push('/home', { user })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>App.js</h1>

        <Link to='/home'><button>Home</button></Link>
        <Link to='/about'><button>About</button></Link>

        <hr />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
} 
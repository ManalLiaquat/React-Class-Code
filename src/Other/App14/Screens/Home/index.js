import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Home.js</h1>

        <Link to='/'><button>App</button></Link>
        <Link to='/about'><button>About</button></Link>

      </div>
    )
  }
} 
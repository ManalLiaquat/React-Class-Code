import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>About.js</h1>

        <Link to='/'><button>App</button></Link>
        <Link to='/home'><button>Home</button></Link>

      </div>
    )
  }
} 
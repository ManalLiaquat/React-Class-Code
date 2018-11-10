import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import Home from "../Screens/Home";
import About from "../Screens/About";

const Routes = (props) => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}

export default Routes
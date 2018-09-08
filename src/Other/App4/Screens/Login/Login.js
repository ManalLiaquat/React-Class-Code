import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
    console.log(props);
    this.login = this.login.bind(this);
  }

  login() {
    const { email, pass } = this.state;
    if (email === "admin@domain.com" && pass === "admin") {
      this.props.onLogin(email, pass);
    }
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="email"
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="*******"
          onChange={e => {
            this.setState({ pass: e.target.value });
          }}
        />

        <button onClick={this.login}>Login Krdun?</button>
      </div>
    );
  }
}

export default Login;

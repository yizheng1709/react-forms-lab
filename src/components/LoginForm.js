import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  updatePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password){
    this.props.handleLogin(this.state.username, this.state.password)}
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input onChange={this.updateUsername} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.updatePassword} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

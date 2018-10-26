import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="아이디"
        />
        <input
          type="password"
          name="password"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="비밀번호"
        />
        <button type="submit">로그인</button>
      </form>
    );
  }
}

export default LoginForm;

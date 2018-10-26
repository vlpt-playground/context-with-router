import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose, fromRenderProps } from 'recompose';
import { UserConsumer } from '../contexts/UserContext';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    error: false,
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const result = this.props.onLogin({
      username: this.state.username,
      password: this.state.password,
    });

    // 로그인 실패
    if (!result) {
      this.setState({
        error: true,
      });
      return;
    }
    // 홈으로 이동
    this.props.history.push('/');
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
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="비밀번호"
        />
        <button type="submit">로그인</button>
        {this.state.error && <div>로그인 에러!</div>}
      </form>
    );
  }
}

const enhance = compose(
  withRouter,
  fromRenderProps(UserConsumer, ({ state, actions }) => ({
    onLogin: actions.login,
  })),
);
export default enhance(LoginForm);

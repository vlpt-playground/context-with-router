import React, { Component, createContext } from 'react';

const UserContext = createContext();

const { Provider, Consumer: UserConsumer } = UserContext;

const users = [
  {
    id: 1,
    username: 'react',
    password: 'good',
  },
  {
    id: 2,
    username: 'context',
    password: 'fun',
  },
];

class UserProvider extends Component {
  state = {
    logged: false,
    username: null,
  };

  actions = {
    login: form => {
      const { username, password } = form;
      const user = users.find(u => u.username === username);

      // 유저가 존재하지 않거나 비밀번호가 틀리면
      if (!user || user.password !== password) {
        return false;
      }

      this.setState({
        logged: true,
        username,
      });

      return true;
    },
    logout: () => {
      this.setState({
        logged: false,
        username: null,
      });
    },
  };

  render() {
    const value = {
      state: this.state,
      actions: this.actions,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserConsumer, UserProvider };

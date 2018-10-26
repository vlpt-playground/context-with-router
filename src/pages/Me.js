import React from 'react';
import { UserConsumer } from '../contexts/UserContext';
import { fromRenderProps } from 'recompose';
import { Redirect } from 'react-router-dom';

const Me = ({ logged, username }) => {
  if (!logged) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>내 정보</h1>
      <p>로그인한 계정: {username}</p>
      <p>
        로그인을 하면 어떤 계정인지 보일거고, 안하면 로그인 페이지로 이동돼요.
      </p>
    </div>
  );
};

export default fromRenderProps(UserConsumer, ({ state }) => ({
  logged: state.logged,
  username: state.username,
}))(Me);

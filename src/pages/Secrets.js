import React from 'react';
import { UserConsumer } from '../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import { fromRenderProps } from 'recompose';

const Secrets = ({ logged }) => {
  return (
    <div>
      {!logged && <Redirect to="/login" />}
      <h1>비밀</h1>
      <p>이 페이지는 비밀스러운 페이지여서, 로그인 안하면 튕겨 나가요!</p>
    </div>
  );
};

export default fromRenderProps(UserConsumer, ({ state }) => ({
  logged: state.logged,
}))(Secrets);

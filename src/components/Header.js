import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserConsumer } from '../contexts/UserContext';
import { fromRenderProps } from 'recompose';

const Header = ({ username, logged, onLogout }) => {
  return (
    <div className="Header">
      <div>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/secrets">비밀</Link>
      </div>
      <div>
        {logged ? (
          <>
            <span>
              안녕하세요 <b>{username}</b>!
            </span>
            <span className="logout" onClick={onLogout}>
              로그아웃
            </span>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </div>
  );
};

export default fromRenderProps(UserConsumer, ({ state, actions }) => ({
  username: state.username,
  logged: state.logged,
  onLogout: actions.logout,
}))(Header);

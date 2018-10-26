import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserConsumer } from '../contexts/UserContext';

const Header = () => {
  return (
    <div className="Header">
      <div>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/secrets">비밀</Link>
      </div>
      <div>
        <UserConsumer>
          {({ state, actions }) => {
            if (state.logged) {
              return (
                <>
                  <span>
                    안녕하세요 <b>{state.username}</b>!
                  </span>
                  <span className="logout" onClick={actions.logout}>
                    로그아웃
                  </span>
                </>
              );
            }
            return <Link to="/login">로그인</Link>;
          }}
        </UserConsumer>
      </div>
    </div>
  );
};

export default Header;

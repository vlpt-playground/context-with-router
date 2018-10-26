import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/secrets">비밀</Link>
      </div>
      <div>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default Header;

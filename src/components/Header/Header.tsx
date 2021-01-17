import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="header main__header">
    <Link className="header__title" to="/">
      <h1 className="header__title">Realworld Blog</h1>
    </Link>
    <div className="header__btn-container">
      <button type="button" className="button button__sign-in">
        <Link to="/sign-in">Sign In</Link>
      </button>
      <button type="button" className="button button__sign-up">
        <Link to="/sign-up">Sign Up</Link>
      </button>
    </div>
  </header>
);

export default Header;

import React from 'react';

const Header: React.FC = () => (
  <header className="header main__header">
    <h1 className="header__title">Realworld Blog</h1>
    <div className="header__btn-container">
      <button type="button" className="button button__sign-in">
        <a href="#">Sign In</a>
      </button>
      <button type="button" className="button button__sign-up">
        <a href="#">Sign Up</a>
      </button>
    </div>
  </header>
);

export default Header;

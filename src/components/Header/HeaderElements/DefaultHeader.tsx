import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const DefaultHeader: FC = () => (
  <>
    <div className="header__btn-container">
      <button type="button" className="button button__sign-in">
        <Link to="/sign-in">Sign In</Link>
      </button>
      <button type="button" className="button button__main button_sign-up">
        <Link to="/sign-up">Sign Up</Link>
      </button>
    </div>
  </>
);

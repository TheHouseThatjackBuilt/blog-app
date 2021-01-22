import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IResponseUser } from '../../types/redux/index.d';

type IUserHeader = { user: Pick<IResponseUser, 'image' | 'username'> };

export const UserHeader: FC<IUserHeader> = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className="header__btn-container">
        <button type="button" className="button button__sign-in">
          <Link to="/sign-in">Sign In</Link>
        </button>
        <button type="button" className="button button__sign-up">
          <Link to="/sign-up">Sign Up</Link>
        </button>
      </div>
    </>
  );
};

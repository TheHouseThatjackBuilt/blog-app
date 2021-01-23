import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IUserHeader } from '../../types/components/index.d';
import defaultPic from './defaultPic.png';

export const UserHeader: FC<IUserHeader> = ({ user, logOut }) => {
  const { image, username } = user;
  return (
    <div className="header__userbar">
      <button type="button" className="button button__create-article">
        <Link to="/sign-in">Create article</Link>
      </button>
      <div className="userbar">
        <h2 className="userbar__name">{username}</h2>
        <div className="userbar__pic">
          <img src={image ? `${image}` : defaultPic} alt="userpic" />
        </div>
      </div>
      <button onClick={logOut} type="button" className="button button__main button_log-out">
        <Link to="/">Log Out</Link>
      </button>
    </div>
  );
};

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { DefaultHeader } from './HeaderElements/DefaultHeader';
import { UserHeader } from './HeaderElements/UserHeader';
import { IHeader } from '../../types/components/index.d';

export const Header: FC<IHeader> = ({ user, load, logOut }) => (
  <header className="header main__header">
    <Link className="header__title" to="/">
      <h1 className="header__title">Realworld Blog</h1>
    </Link>
    {load && null}
    {user && <UserHeader user={user} logOut={logOut} />}
    {!user && !load && <DefaultHeader />}
  </header>
);

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { DefaultHeader } from './DefaultHeader';
import { UserHeader } from './UserHeader';
import { IUserState } from '../../types/redux/index.d';

type IHeader = IUserState | null;

const Header: FC<IHeader> = ({ user }) => (
  <header className="header main__header">
    <Link className="header__title" to="/">
      <h1 className="header__title">Realworld Blog</h1>
    </Link>
    {!user && <DefaultHeader />}
    {user && <UserHeader user={user} />}
  </header>
);

export default Header;

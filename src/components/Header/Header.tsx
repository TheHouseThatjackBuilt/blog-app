import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { DefaultHeader } from './DefaultHeader';
import { UserHeader } from './UserHeader';
import { IHeader } from '../../types/components/index.d';

const Header: FC<IHeader> = ({ user, load }) => (
  <header className="header main__header">
    <Link className="header__title" to="/">
      <h1 className="header__title">Realworld Blog</h1>
    </Link>
    {load && null}
    {!user && !load && <DefaultHeader />}
    {user && <UserHeader user={user} />}
  </header>
);

export default Header;

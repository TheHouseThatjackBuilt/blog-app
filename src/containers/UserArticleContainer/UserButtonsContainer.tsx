import React, { FC } from 'react';
import { useCookies } from 'react-cookie';

import { deleteArticle } from '../../service';
import { UserButtons } from '../../components/Articles/ArticleElements';

export const UserButtonsContainer: FC<{ articleID: string }> = ({ articleID }) => {
  const [userCookie] = useCookies();

  return <UserButtons deleteArticle={deleteArticle} token={userCookie.token} id={articleID} />;
};

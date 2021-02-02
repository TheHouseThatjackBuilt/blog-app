/* eslint-disable */
import React, { FC } from 'react';
import { useCookies } from 'react-cookie';

import { deleteArticle } from '../../service/api';
import { OwnerPanel } from '../../components/Articles/ArticleHeader/OwnerPanel';

export const OwnerPanelContainer: FC<{ articleID: string }> = ({ articleID }) => {
  const [userCookie] = useCookies();

  return <OwnerPanel deleteArticle={deleteArticle} token={userCookie.token} id={articleID} />;
};

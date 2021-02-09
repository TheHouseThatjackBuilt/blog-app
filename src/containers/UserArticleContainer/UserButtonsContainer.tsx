import React, { FC } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { deleteArticleThunk } from '../../redux/middlewareThunk/articleListThunk';
import { UserButtons } from '../../components/Articles/ArticleElements';

const UserButtonsContainer: FC<PropsFromRedux> = ({ articleID, deleteArticleThunk }) => {
  const [userCookie] = useCookies();
  const history = useHistory();

  const deleteArticle = () => {
    if (!userCookie.token) history.push('./');
    deleteArticleThunk(articleID, userCookie.token);
  };

  return <UserButtons deleteArticle={deleteArticle} id={articleID} />;
};

const mapDispatch = { deleteArticleThunk };
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector> & { articleID: string };

export default connector(UserButtonsContainer);

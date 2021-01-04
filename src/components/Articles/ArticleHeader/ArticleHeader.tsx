/*eslint-disable*/
import React from 'react';

import { IArticleHeader } from '../../../types/components/index.d';
import ArticleTags from '../ArticleTags/ArticleTags';

const ArticleHeader: React.FC<IArticleHeader> = ({
  author: { image, username },
  date,
  favoritesCount,
  slug,
  tagList,
  title,
}) => {
  const tags =
    tagList.length > 0
      ? tagList.map((el) => <ArticleTags key={el} tag={el} />)
      : null;

  return (
    <header className="article__header">
      <div className="article__header-container">
        <h2 className="article__title">{title}</h2>
        <div className="article__like-counter">{favoritesCount}</div>
        <div className="article__tag-list">{tags}</div>
      </div>
      <div className="user article__user-container">
        <h3 className="user__info article__username">{username}</h3>
        <div className="user__pic">
          <img src={image} alt="userpic" />
        </div>
        <time className="article__date-create">{date}</time>
      </div>
    </header>
  );
};

export default ArticleHeader;

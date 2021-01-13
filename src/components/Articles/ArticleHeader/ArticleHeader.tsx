/*eslint-disable*/
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { IArticleHeader } from '../../../types/components/index.d';
import ArticleTags from '../ArticleTags/ArticleTags';

const ArticleHeader: FC<IArticleHeader> = ({
  author: { image, username },
  date,
  favoritesCount,
  slug,
  tagList,
  title,
}) => {
  const [like, setLike] = useState(false);
  const tags =
    tagList.length > 0
      ? tagList.map((el: string) => <ArticleTags key={el} tag={el} />)
      : null;

  const setLikesHandler = () => setLike(!like);
  return (
    <header className="article__header">
      <div className="article__title-container">
        <div className="article__title-wrapper">
          <Link to={`/articles/${slug}`}>
            <h2 className="article__title">{title}</h2>
          </Link>
          <div className="article__like-container">
            <button
              onClick={setLikesHandler}
              type="button"
              className={cn('article__like', {
                article__like_active: like,
              })}
            />
            <div className="article__like-counter">
              {favoritesCount === 0 ? null : favoritesCount}
            </div>
          </div>
        </div>
        <div className="article__tag-list">{tags}</div>
      </div>
      <div className="user article__user-container">
        <h3 className="user__info article__username">{username}</h3>
        <div className="user__pic article__userpic">
          <img src={image} alt="userpic" />
        </div>
        <time className="article__date-create">{date}</time>
      </div>
    </header>
  );
};

export default ArticleHeader;

/* eslint-disable */ // do not turn on that insolent bitch here;
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tag, Tooltip } from 'antd';

import SetFavoriteButtonContainer from '../../../containers/ElementsContainer/SetFavoriteButtonContainer';

interface IArticleTitle {
  slug: string;
  title: string;
  favorited: boolean;
  favoritesCount: number;
  date: string;
  image: string;
  username: string;
  tagList: string[];
}

export const ArticleTitle: FC<IArticleTitle> = ({ slug, title, favorited, favoritesCount, username, tagList, date, image }) => {
  const tags =
    tagList.length > 0 &&
    tagList.map((tag: string) => {
      const isLongTag = tag.length > 20;
      const tagElem = (
        <Tag className="article__tag" key={tag}>
          <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
        </Tag>
      );
      return isLongTag ? (
        <Tooltip title={tag} key={tag}>
          {tagElem}
        </Tooltip>
      ) : (
        tagElem
      );
    });

  return (
    <div className="article__header-container">
      <div className="article__title-container">
        <div className="article__title-wrapper">
          <Link to={`/articles/${slug}`}>
            <h2 className="article__title">{title}</h2>
          </Link>
          <SetFavoriteButtonContainer favorited={favorited} favoritesCount={favoritesCount} id={slug} />
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
    </div>
  );
};

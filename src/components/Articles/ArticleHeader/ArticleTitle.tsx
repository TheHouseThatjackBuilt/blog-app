/*eslint-disable*/
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag, Tooltip } from 'antd';
import cn from 'classnames';

interface IArticleTitle {
  slug: string;
  title: string;
  favoritesCount: number;
  date: string;
  image: string;
  username: string;
  tagList: string[];
}

export const ArticleTitle: FC<IArticleTitle> = ({ slug, title, favoritesCount, username, tagList, date, image }) => {
  const [like, setLike] = useState(false);
  const setLikesHandler = () => setLike(!like);

  const tags =
    tagList.length > 0 &&
    tagList.map((tag: string, index: number) => {
      const isLongTag = tag.length > 20;
      const tagElem = (
        <Tag className="article__tag" key={`${tag}${index}`}>
          <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
        </Tag>
      );
      return isLongTag ? (
        <Tooltip title={tag} key={`${tag}${index}`}>
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
          <div className="article__like-container">
            <button onClick={setLikesHandler} type="button" className={cn('article__like', { article__like_active: like })} />
            <div className="article__like-counter">{favoritesCount === 0 ? null : favoritesCount}</div>
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
    </div>
  );
};

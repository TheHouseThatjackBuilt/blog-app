import React, { FC } from 'react';

import { IArticleHeader } from '../../../types/components/index.d';
import { ArticleHeaderPreview } from './ArticleHeaderPreview';
import { ArticleTitle } from './ArticleTitle';

export const ArticleHeader: FC<IArticleHeader> = ({
  author: { image, username },
  date,
  favoritesCount,
  favorited,
  slug,
  tagList,
  title,
  description,
  owner,
}) => (
  <header className="article__header">
    <ArticleTitle
      favorited={favorited}
      slug={slug}
      title={title}
      favoritesCount={favoritesCount}
      username={username}
      tagList={tagList}
      date={date}
      image={image}
    />
    <ArticleHeaderPreview description={description} owner={owner} slug={slug} />
  </header>
);

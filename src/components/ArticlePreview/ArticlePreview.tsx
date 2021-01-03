import React from 'react';

import { IArticlePreview } from '../../types/components/index.d';
import ArticleHeader from '../ArticleHeader/ArticleHeader';

const ArticlePreview: React.FC<IArticlePreview> = (props) => {
  const {
    author,
    body,
    createdAt,
    description,
    favorited,
    favoritesCount,
    slug,
    tagList,
    updatedAt,
    title,
  } = props;
  return (
    <article className="article content__article article__preview">
      <ArticleHeader />
    </article>
  );
};

export default ArticlePreview;

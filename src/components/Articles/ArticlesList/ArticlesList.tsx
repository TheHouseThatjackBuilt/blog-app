import React from 'react';

import { IArticleList } from '../../../types/components/index.d';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const ArticleList: React.FC<IArticleList> = ({ articles }) => {
  const content = articles.map((article) => (
    <ArticlePreview key={article.slug} {...article} />
  ));
  return <div className="content__container">{content}</div>;
};

export default ArticleList;

import React from 'react';

import { IArticleList } from '../../../types/components/index.d';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const ArticleList: React.FC<IArticleList> = ({ articles }) => {
  const content = articles.map((article) => (
    <li key={article.slug} className="content__itemContainer">
      <ArticlePreview {...article} />
    </li>
  ));
  return <ul className="content__container">{content}</ul>;
};

export default ArticleList;

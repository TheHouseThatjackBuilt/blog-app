import React from 'react';

import { IArticleList } from '../../../types/components/index.d';
import ArticleConstructor from '../ArticleConstructor/ArticleConstructor';

const ArticleList: React.FC<IArticleList> = ({ articles }) => {
  const content = articles.map((article) => (
    <li key={article.slug} className="content__itemContainer">
      <ArticleConstructor article={article} />
    </li>
  ));
  return <ul className="content__container-preview">{content}</ul>;
};

export default ArticleList;

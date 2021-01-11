import React from 'react';

import articlePreviewDataFabric from '../../../tools/dataFabric';
import { IArticleConstructor } from '../../../types/components/index.d';

import ArticleHeader from '../ArticleHeader/ArticleHeader';
import ArticleBody from '../ArticleBody/ArticleBody';

const ArticleConstructor: React.FC<IArticleConstructor> = ({ article }) => {
  const { header, body } = articlePreviewDataFabric(article);
  return (
    <article className="article article__preview">
      <ArticleHeader {...header} />
      <ArticleBody {...body} />
    </article>
  );
};

export default ArticleConstructor;

import React from 'react';

import articlePreviewDataFabric from '../../../tools/dataFabric';
import { IArticlePreview } from '../../../types/components/index.d';

import ArticleHeader from '../ArticleHeader/ArticleHeader';
import ArticleBody from '../ArticleBody/ArticleBody';

const ArticlePreview: React.FC<IArticlePreview> = (props) => {
  const { header, body } = articlePreviewDataFabric(props);
  return (
    <article className="article article__preview">
      <ArticleHeader {...header} />
      <ArticleBody {...body} />
    </article>
  );
};

export default ArticlePreview;

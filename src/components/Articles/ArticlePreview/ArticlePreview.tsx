import React from 'react';

import articlePreviewDataFabric from '../../../tools/dataFabric';

import { IArticlePreview } from '../../../types/components/index.d';
import ArticleHeader from '../ArticleHeader/ArticleHeader';

const ArticlePreview: React.FC<IArticlePreview> = (props) => {
  const { header, body } = articlePreviewDataFabric(props);
  console.log(header);
  console.log(body);
  return (
    <article className="article content__article article__preview">
      <ArticleHeader />
    </article>
  );
};

export default ArticlePreview;

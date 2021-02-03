import React from 'react';

import { IArticleConstructor } from '../../../types/components/index.d';
import { ArticleHeader, ArticleBody } from '.';

export const ArticleConstructor: React.FC<IArticleConstructor> = ({ article, flag }) => (
  <>
    <ArticleHeader {...article.header} />
    {flag && <ArticleBody articleBody={article.body} />}
  </>
);

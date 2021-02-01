import React from 'react';

import { IArticleConstructor } from '../../../types/components/index.d';

import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import ArticleBody from '../ArticleBody/ArticleBody';

const ArticleConstructor: React.FC<IArticleConstructor> = ({ article, flag }) => (
  <>
    <ArticleHeader {...article.header} />
    {flag && <ArticleBody articleBody={article.body} />}
  </>
);
export default ArticleConstructor;

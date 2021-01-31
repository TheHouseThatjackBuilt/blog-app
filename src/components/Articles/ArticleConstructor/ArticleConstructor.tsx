import React from 'react';

import { IArticleConstructor } from '../../../types/components/index.d';

import ArticleHeader from '../ArticleHeader/ArticleHeader';
import ArticleBody from '../ArticleBody/ArticleBody';

const ArticleConstructor: React.FC<IArticleConstructor> = ({ article, flag }) => (
  <article className="article article__preview">
    <ArticleHeader {...article.header} />
    {flag && <ArticleBody articleBody={article.body} />}
  </article>
);
export default ArticleConstructor;

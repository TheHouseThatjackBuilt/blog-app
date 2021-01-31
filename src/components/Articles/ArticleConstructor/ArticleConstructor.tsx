import React from 'react';

import { IArticleConstructor } from '../../../types/components/index.d';

import ArticleHeader from '../ArticleHeader/ArticleHeader';
import ArticleBody from '../ArticleBody/ArticleBody';

const ArticleConstructor: React.FC<IArticleConstructor> = ({ article, flag }) => (
  <article className="article article__preview">
    <ArticleHeader {...article.header} />
    <ArticleBody article={article.body} flag={flag} />
  </article>
);
export default ArticleConstructor;

import React from 'react';
import ReactMarkdown from 'react-markdown';

import { IArticleBodyContainer } from '../../../types/components/index.d';

const ArticleBody: React.FC<IArticleBodyContainer> = ({ articleBody }) => (
  <section className="article__body">
    <ReactMarkdown source={articleBody} />
  </section>
);

export default ArticleBody;

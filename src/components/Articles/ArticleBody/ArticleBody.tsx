import React from 'react';
import ReactMarkdown from 'react-markdown';

import { IArticleBodyContainer } from '../../../types/components/index.d';

const ArticleBody: React.FC<IArticleBodyContainer> = (props) => {
  const {
    article: { description, body },
    flag,
  } = props;
  return (
    <section className="article__body">
      <h2>{description}</h2>
      {flag && <ReactMarkdown source={body} />}
    </section>
  );
};

export default ArticleBody;

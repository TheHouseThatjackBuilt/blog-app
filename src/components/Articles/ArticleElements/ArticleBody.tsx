import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

export const ArticleBody: FC<{ articleBody: string }> = ({ articleBody }) => (
  <section className="article__body">
    <ReactMarkdown source={articleBody} />
  </section>
);

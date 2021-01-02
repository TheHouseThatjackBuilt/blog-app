import React from 'react';
import { IArticleList } from '../../types/components/index.d';

const ArticleList: React.FC<IArticleList> = ({ articles }) => {
  console.log(articles);
  return (
    <div className="content__container">
      <article className="content__item">Some article</article>
    </div>
  );
};

export default ArticleList;

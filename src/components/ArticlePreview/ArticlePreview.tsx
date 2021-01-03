import React from 'react';
import { IArticle } from '../../types/redux/index.d';

const ArticlePreview: React.FC<IArticle> = (props) => {
  console.log(props);
  return <article className="article content__article" />;
};

export default ArticlePreview;

/* eslint-disable*/
import React from 'react';

import { Spinner } from '../../decoreElements/index';
import { notEmpty } from '../../../tools/utils';
import ArticleConstructor from '../ArticleConstructor/ArticleConstructor';
import { ISingleArticle } from '../../../types/components/index.d';
import { IArticle } from '../../../types/redux/index.d';

const SingleArticle: React.FC<ISingleArticle> = ({ article, load }) => {
  console.log(article);
  return (
    <div className="content__full">
      {load && !article && <Spinner />}
      {article && <ArticleConstructor article={article} />}
    </div>
  );
};

export default SingleArticle;

// {
//   load && !article && <Spinner />;
// }
// {
//   article && <ArticleConstructor article={article} />;
// }

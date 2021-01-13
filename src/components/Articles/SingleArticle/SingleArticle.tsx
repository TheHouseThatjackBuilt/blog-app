import React from 'react';

import { Spinner } from '../../decoreElements/index';
import ArticleConstructor from '../ArticleConstructor/ArticleConstructor';
import { ISingleArticle } from '../../../types/components/index.d';

const SingleArticle: React.FC<ISingleArticle> = ({ data, load }) => (
  <main className="content main__content">
    {(load || !data) && <Spinner />}
    {data && (
      <div className="content__full">
        <ArticleConstructor article={data.article} flag />
      </div>
    )}
  </main>
);

export default SingleArticle;

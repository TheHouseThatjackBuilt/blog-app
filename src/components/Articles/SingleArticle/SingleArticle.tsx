import React, { FC } from 'react';

import { MainContainer, Spinner } from '../../AppElements/index';
import ArticleConstructor from '../ArticleConstructor/ArticleConstructor';
import { ISingleArticle } from '../../../types/components/index.d';

export const SingleArticle: FC<ISingleArticle> = ({ data, load }) => (
  <MainContainer>
    {load && <Spinner />}
    {data && !load && (
      <div className="content__article-preview article__full">
        <ArticleConstructor article={data} flag />
      </div>
    )}
  </MainContainer>
);

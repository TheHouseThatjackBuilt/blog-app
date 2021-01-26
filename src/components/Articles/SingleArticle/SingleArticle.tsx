import React, { FC } from 'react';

import { MainContainer, Spinner } from '../../AppElements/index';
import ArticleConstructor from '../ArticleConstructor/ArticleConstructor';
import { ISingleArticle } from '../../../types/components/index.d';

export const SingleArticle: FC<ISingleArticle> = ({ data, load }) => (
  <MainContainer>
    {(load || !data) && <Spinner />}
    {data && (
      <div className="content__full">
        <ArticleConstructor article={data.article} flag />
      </div>
    )}
  </MainContainer>
);

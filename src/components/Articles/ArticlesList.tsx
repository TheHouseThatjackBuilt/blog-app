/* eslint-disable */ // and here too
import React, { FC } from 'react';

import { IArticleList } from '../../types/components/index.d';
import { Spinner, Pagination, MainContainer } from '../AppElements/index';
import { ArticleConstructor } from './ArticleElements';

export const ArticlesList: FC<IArticleList> = ({ articles, pageHandler, totalPages, load, page }) => {
  const content =
    articles &&
    articles?.map((article) => (
      <li key={article.header.slug} className="content__itemContainer">
        <article className="content__article-preview">
          <ArticleConstructor article={article} flag={false} />
        </article>
      </li>
    ));

  return (
    <MainContainer>
      <div className="content">
        {load && <Spinner />}
        {!load && articles && <ul className="content__container-preview">{content}</ul>}
        <Pagination totalPages={totalPages} handler={pageHandler} currentPage={page} />
      </div>
    </MainContainer>
  );
};

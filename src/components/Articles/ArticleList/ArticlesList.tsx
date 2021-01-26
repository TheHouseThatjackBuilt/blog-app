/* eslint-disable */
import React from 'react';
import { IArticleList } from '../../../types/components/index.d';
import ArticleConstructor from '../ArticleConstructor/ArticleConstructor';
import { Spinner, Pagination, MainContainer } from '../../AppElements/index';

export const ArticlesList: React.FC<IArticleList> = ({ articles, pageHandler, totalPages, load, page }) => {
  const content =
    articles &&
    articles?.map((article) => (
      <li key={article.slug} className="content__itemContainer">
        <ArticleConstructor article={article} flag={false} />
      </li>
    ));

  return (
    <MainContainer>
      <div className="content">
        {(load || !articles) && <Spinner />}
        {!load && articles && <ul className="content__container-preview">{content}</ul>}
        <Pagination totalPages={totalPages} handler={pageHandler} currentPage={page} />
      </div>
    </MainContainer>
  );
};

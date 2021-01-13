import React from 'react';

import { IArticleList } from '../../../types/components/index.d';

import ArticleConstructor from '../ArticleConstructor/ArticleConstructor';
import { Spinner, Parination } from '../../decoreElements/index';

const ArticleList: React.FC<IArticleList> = ({
  articles,
  pageHandler,
  totalPages,
  load,
  page,
}) => {
  const content = articles
    ? articles?.map((article) => (
      <li key={article.slug} className="content__itemContainer">
        <ArticleConstructor article={article} flag={false} />
      </li>
    ))
    : null;

  return (
    <main className="content main__content">
      {(load || !articles) && <Spinner />}
      {!load && articles && (
        <ul className="content__container-preview">{content}</ul>
      )}
      <Parination
        totalPages={totalPages}
        handler={pageHandler}
        currentPage={page}
      />
    </main>
  );
};

export default ArticleList;

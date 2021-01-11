/* eslint-disable*/
import { formatedDate } from './utils';

import { IArticle } from '../types/redux/index.d';
import { IHandleArticleData } from '../types/components/index.d';

const articlePreviewDataFabric = (data: IArticle): IHandleArticleData => {
  const {
    author: { image, username },
    body,
    createdAt,
    description,
    favoritesCount,
    slug,
    tagList,
    title,
  } = data;

  const date = formatedDate(new Date(createdAt), 'MMMMd,y');
  return {
    header: {
      author: { image, username },
      date,
      slug,
      tagList,
      favoritesCount,
      title,
    },
    body: {
      body,
      description,
    },
  };
};

export default articlePreviewDataFabric;

import React, { FC } from 'react';

import { IArticleTags } from '../../../types/components/index.d';

const ArticleTags: FC<IArticleTags> = ({ tag }) => (
  <button type="button" className="article__tag">
    {tag}
  </button>
);

export default ArticleTags;

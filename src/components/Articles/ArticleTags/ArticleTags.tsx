import React, { FC } from 'react';

import { IArticleTags } from '../../../types/components/index.d';

export const ArticleTags: FC<IArticleTags> = ({ tag }) => (
  <button type="button" className="article__tag">
    {tag}
  </button>
);

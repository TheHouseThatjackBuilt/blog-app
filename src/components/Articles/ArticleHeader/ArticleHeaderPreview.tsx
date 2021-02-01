import React, { FC } from 'react';
import { OwnerPanel } from './OwnerPanel';

interface IArticleHeaderPreview {
  description: string;
  owner: boolean;
}

export const ArticleHeaderPreview: FC<IArticleHeaderPreview> = ({ description, owner }) => (
  <div className="article__header-preview">
    <div className="article__description">{description}</div>
    {owner && <OwnerPanel />}
  </div>
);

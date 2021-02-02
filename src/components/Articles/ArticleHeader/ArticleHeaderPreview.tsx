import React, { FC } from 'react';
import { OwnerPanelContainer } from '../../../containers/UserArticleContainer/OwnerPanelContainer';

interface IArticleHeaderPreview {
  description: string;
  owner: boolean;
  slug: string;
}

export const ArticleHeaderPreview: FC<IArticleHeaderPreview> = ({ description, owner, slug }) => (
  <div className="article__header-preview">
    <div className="article__description">{description}</div>
    {owner && <OwnerPanelContainer articleID={slug} />}
  </div>
);

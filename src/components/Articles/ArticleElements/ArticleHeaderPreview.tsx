import React, { FC } from 'react';
import { UserButtonsContainer } from '../../../containers/UserArticleContainer/UserButtonsContainer';

interface IArticleHeaderPreview {
  description: string;
  owner: boolean;
  slug: string;
}

export const ArticleHeaderPreview: FC<IArticleHeaderPreview> = ({ description, owner, slug }) => (
  <div className="article__header-preview">
    <div className="article__description">{description}</div>
    {owner && <UserButtonsContainer articleID={slug} />}
  </div>
);

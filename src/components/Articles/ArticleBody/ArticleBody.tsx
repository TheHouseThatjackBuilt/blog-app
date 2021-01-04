import React from 'react';
import { IArticleBody } from '../../../types/components/index.d';

const ArticleBody: React.FC<IArticleBody> = ({ description }) => <h1>{description}</h1>;

export default ArticleBody;

import React, { FC } from 'react';

export const FormHeader: FC = ({ children, ...props }) => (
  <h2 className="newArticle__header" {...props}>
    {children}
  </h2>
);

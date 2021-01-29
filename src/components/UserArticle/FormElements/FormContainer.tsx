import React, { FC } from 'react';

export const FormContainer: FC = ({ children, ...props }) => (
  <div className="newArticle newArticle_position" {...props}>
    {children}
  </div>
);

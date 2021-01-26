import React, { FC } from 'react';

export const Form: FC = ({ children, ...props }) => (
  <form className="form form_position" noValidate {...props}>
    {children}
  </form>
);

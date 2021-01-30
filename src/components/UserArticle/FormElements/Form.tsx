import React, { FC } from 'react';
import { IForm } from '../../../types/components/index.d';

export const Form: FC<Pick<IForm, 'onSubmit'>> = ({ children, ...props }) => (
  <form className="form form_position" noValidate {...props}>
    {children}
  </form>
);

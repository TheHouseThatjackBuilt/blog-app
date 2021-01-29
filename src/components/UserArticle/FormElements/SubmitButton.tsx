import React, { FC } from 'react';

export const SubmitButton: FC = ({ children, ...props }) => (
  <button type="submit" className="form__submit" {...props}>
    {children}
  </button>
);

import React, { FC } from 'react';
import { IForm } from '../../../types/components/index.d';

export const SubmitButton: FC<Pick<IForm, 'load'>> = ({ load, children }) => (
  <button type="submit" className="form__submit" disabled={load}>
    {children}
  </button>
);

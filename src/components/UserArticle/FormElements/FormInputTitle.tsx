import React, { forwardRef } from 'react';
import { IFormUserArticle } from '../../../types/components/index.d';

export const FormInputTitle = forwardRef<HTMLInputElement & HTMLTextAreaElement, Pick<IFormUserArticle, 'errors'>>(
  ({ errors }, ref) => (
    <label className="form__title input">
      Title
      <input ref={ref} type="text" autoComplete="off" className="input__text" placeholder="title" name="title" />
      {errors?.title && <span>{errors.title.message}</span>}
    </label>
  )
);

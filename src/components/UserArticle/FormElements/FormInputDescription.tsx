import React, { forwardRef } from 'react';
import { IFormUserArticle } from '../../../types/components/index.d';

export const FormInputDescription = forwardRef<HTMLInputElement & HTMLTextAreaElement, Pick<IFormUserArticle, 'errors'>>(
  ({ errors }, ref) => (
    <label className="form__description input">
      Short description
      <input ref={ref} type="text" autoComplete="off" className="input__text" placeholder="description" name="description" />
      {errors?.description && <span>{errors.description.message}</span>}
    </label>
  )
);

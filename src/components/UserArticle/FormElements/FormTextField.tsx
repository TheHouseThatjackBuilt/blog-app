import React, { forwardRef } from 'react';
import { IFormUserArticle } from '../../../types/components/index.d';

export const FormTextField = forwardRef<HTMLInputElement & HTMLTextAreaElement, Pick<IFormUserArticle, 'errors'>>(
  ({ errors }, ref) => (
    <label className="form__text input">
      Text
      <textarea ref={ref} className="input__text input_textArea" placeholder="print your article here" id="text" name="body" />
      {errors?.body && <span>{errors.body.message}</span>}
    </label>
  )
);

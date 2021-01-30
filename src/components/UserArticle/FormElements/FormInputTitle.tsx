import React, { forwardRef } from 'react';

export const FormInputTitle = forwardRef<HTMLInputElement & HTMLTextAreaElement>((props, ref) => (
  <label className="form__title input">
    Title
    <input ref={ref} type="text" autoComplete="off" className="input__text" placeholder="title" name="title" {...props} />
  </label>
));

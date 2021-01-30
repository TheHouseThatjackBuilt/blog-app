import React, { forwardRef } from 'react';

export const FormInputDescription = forwardRef<HTMLInputElement & HTMLTextAreaElement>((props, ref) => (
  <label className="form__description input">
    Short description
    <input
      ref={ref}
      type="text"
      autoComplete="off"
      className="input__text"
      placeholder="description"
      name="description"
      {...props}
    />
  </label>
));

import React, { forwardRef } from 'react';

export const FormTextField = forwardRef<HTMLInputElement & HTMLTextAreaElement>((props, ref) => (
  <label className="form__text input">
    Text
    <textarea
      ref={ref}
      className="input__text input_textArea"
      placeholder="print your article here"
      id="text"
      name="text"
      {...props}
    />
  </label>
));

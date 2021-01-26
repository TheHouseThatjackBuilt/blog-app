import React, { FC } from 'react';

export const FormTextField: FC = () => (
  <label className="form__text input">
    Text
    <textarea className="input__text input_textArea" placeholder="print your article here" id="text" name="text" />
  </label>
);

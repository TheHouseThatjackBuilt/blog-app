import React, { FC } from 'react';

export const FormInputDescription: FC = () => (
  <label className="form__description input">
    Short description
    <input type="text" autoComplete="off" className="input__text" placeholder="description" name="description" />
  </label>
);

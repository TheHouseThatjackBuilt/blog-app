import React, { FC } from 'react';

export const FormInputTitle: FC = () => (
  <label className="form__title input">
    Title
    <input type="text" autoComplete="off" className="input__text" placeholder="title" name="title" />
  </label>
);

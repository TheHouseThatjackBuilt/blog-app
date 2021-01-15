import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';
import { IFormInput } from '../../../types/components/index.d';

export const Input = forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  IFormInput
>((props, ref) => (
  <TextField
    variant="outlined"
    margin="normal"
    inputRef={ref}
    fullWidth
    {...props}
  />
));

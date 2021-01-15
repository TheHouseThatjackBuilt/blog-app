import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { IFormInput } from '../../../types/components/index.d';

const useStyle = makeStyles({
  root: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
  },
});

export const Input = forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  IFormInput
>((props, ref) => {
  const styles = useStyle();
  return (
    <TextField
      className={styles.root}
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});

import React, { forwardRef } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { IFormCheckbox } from '../../../types/components/index.d';

const useStyles = makeStyles({
  label: {
    marginTop: 21,
    paddingTop: 8,
    fontSize: 14,
    color: '#595959',
    borderTop: '1px solid #E8E8E8',
  },
});

export const FormCheckbox = forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  IFormCheckbox
>((props, ref) => {
  const styles = useStyles();
  return (
    <FormControlLabel
      name="checkbox"
      className={styles.label}
      control={<Checkbox color="primary" inputRef={ref} required />}
      inputRef={ref}
      {...props}
    />
  );
});

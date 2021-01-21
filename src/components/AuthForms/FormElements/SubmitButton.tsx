import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IForm2 } from '../../../types/components/index.d';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#1890FF',
    marginTop: 10,
    height: 40,
  },
}));

export const SubmitButton: FC<Pick<IForm2, 'load'>> = ({ children, ...props }) => {
  const styles = useStyles();
  const { load } = props;
  return (
    <Button
      onSubmit={() => {}}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={styles.root}
      disabled={load}
    >
      {children}
    </Button>
  );
};

import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IForm } from '../../../types/components/index.d';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
});

export const Form: FC<Pick<IForm, 'onSubmit'>> = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <form className={styles.root} noValidate {...props}>
      {children}
    </form>
  );
};

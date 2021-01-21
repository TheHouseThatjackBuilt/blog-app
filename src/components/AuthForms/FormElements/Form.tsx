import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IForm2 } from '../../../types/components/index.d';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
});

export const Form: FC<Pick<IForm2, 'onSubmit'>> = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <form className={styles.root} noValidate {...props}>
      {children}
    </form>
  );
};

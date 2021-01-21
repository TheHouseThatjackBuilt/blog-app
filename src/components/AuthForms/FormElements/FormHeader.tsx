import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 30,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    textAlign: 'center',
    color: '#262626',
  },
}));

export const FormHeader: FC = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Typography component="h2" className={styles.root} {...props}>
      {children}
    </Typography>
  );
};

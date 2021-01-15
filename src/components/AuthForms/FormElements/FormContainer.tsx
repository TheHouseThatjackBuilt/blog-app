import React, { FC } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 647,
    width: 384,
    marginTop: theme.spacing(4),
    display: 'grid',
    gridTemplate: '100px 1fr / 1fr',
    alignItems: 'start',
    justifyItems: 'center',
    background: theme.palette.background.paper,
    border: '1px solid #d9d9d9',
    borderRadius: 6,
    boxShadow: theme.shadows[2],
  },
}));

export const FormContainer: FC = ({ children, ...props }: any) => {
  const styles = useStyles();

  return (
    <Container
      className={styles.root}
      component="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};

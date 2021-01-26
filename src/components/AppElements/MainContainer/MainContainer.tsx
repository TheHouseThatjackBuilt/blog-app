import React, { FC } from 'react';

export const MainContainer: FC = ({ children, ...props }) => (
  <main className="main__content" {...props}>
    {children}
  </main>
);

import React, { FC } from 'react';

import { ErrorBoundary } from '../components/AppElements';
import SignInContainer from '../containers/AuthContainers/SignInContainer';

export const SignInPage: FC = () => (
  <ErrorBoundary>
    <SignInContainer />
  </ErrorBoundary>
);

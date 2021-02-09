import React, { FC } from 'react';

import { ErrorBoundary } from '../components/AppElements';
import EditProfileContainer from '../containers/AuthContainers/EditProfileContainer';

export const EditProfilePage: FC = () => (
  <ErrorBoundary>
    <EditProfileContainer />
  </ErrorBoundary>
);

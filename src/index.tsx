import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Alert } from 'antd';

import { store } from './redux/store/store';
import MainRouter from './router';
import './style/index.scss';

const { ErrorBoundary } = Alert;

render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <MainRouter />
        </Router>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('wrapper')
);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './redux/store/store';
import MainRouter from './router';
import './style/index.scss';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <MainRouter />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('wrapper')
);

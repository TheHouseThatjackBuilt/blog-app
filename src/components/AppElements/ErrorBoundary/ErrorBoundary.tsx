/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MainContainer } from '..';
import bigfoot from './bigfoot.gif';

export class ErrorBoundary extends Component {
  state = { hasError: false, message: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  render() {
    const { hasError, message } = this.state;
    const { children } = this.props;
    if (hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return (
        <MainContainer>
          <div className="error error__container">
            <h1 className="error__title">Oops, got error</h1>
            <div className="error__message">{message}</div>
            <button type="button" className="error__link">
              <Link to="/">go to main screen</Link>
            </button>
            <div className="error__img">
              <img src={bigfoot} alt="error animation" />
            </div>
          </div>
        </MainContainer>
      );
    }

    return children;
  }
}

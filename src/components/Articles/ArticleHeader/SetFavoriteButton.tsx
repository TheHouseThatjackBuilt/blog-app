/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC } from 'react';
import cn from 'classnames';

interface ISetFavoriteButton {
  clickHandler: () => void;
  favorite: boolean;
  counter: number;
}

export const SetFavoriteButton: FC<ISetFavoriteButton> = ({ clickHandler, favorite, counter }) => (
  <div className="article__like-container">
    <button onClick={clickHandler} type="button" className={cn('article__like', { article__like_active: favorite })} />
    <div className="article__like-counter">{counter === 0 ? null : counter}</div>
  </div>
);

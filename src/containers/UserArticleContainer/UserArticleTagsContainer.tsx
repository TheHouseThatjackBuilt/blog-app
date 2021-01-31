/* eslint-disable */
import React, { FC, useState, ChangeEvent, MouseEvent } from 'react';

import { IUserArticleTagsContainer } from '../../types/components/index.d';
import { UserArticleTags } from '../../components/UserArticle/ArticleTags';

export const UserArticleTagsContainer: FC<IUserArticleTagsContainer> = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => setInputValue(evt.target.value);
  const handleEditInputChange = (evt: ChangeEvent<HTMLInputElement>) => setEditInputValue(evt.target.value);
  const handleClose = (removedTag: string) => setTags(tags.filter((tag) => tag !== removedTag));

  const getArgsFromTag = (evt: MouseEvent<HTMLSpanElement>, editIndex: number, value: string) => {
    evt.preventDefault();
    setEditInputIndex(editIndex);
    setEditInputValue(value);
  };
  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputConfirm = () => {
    !tags.includes(inputValue) && setTags([...tags, inputValue]);
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputConfirm = () => {
    setTags(tags.map((key, index) => (index === editInputIndex ? (key = editInputValue) : key)));
    setEditInputIndex(-1);
    setEditInputValue('');
  };

  return (
    <UserArticleTags
      editInputHandlers={{ editInputValue, editInputIndex, handleEditInputChange, handleEditInputConfirm }}
      inputHandlers={{ handleInputChange, handleInputConfirm, inputValue }}
      tags={tags}
      getArgsFromTag={getArgsFromTag}
      showInput={showInput}
      handleClose={handleClose}
      inputVisible={inputVisible}
    />
  );
};

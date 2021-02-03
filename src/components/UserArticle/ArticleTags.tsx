/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC, useRef } from 'react';
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { IUserArticleTags } from '../../types/components/index.d';

export const UserArticleTags: FC<IUserArticleTags> = ({
  editInputHandlers,
  inputHandlers,
  tags,
  handleClose,
  getArgsFromTag,
  inputVisible,
  showInput,
}) => {
  const inputRef = useRef<Input>(null);
  const inputRef2 = useRef<Input>(null);
  const { editInputValue, handleEditInputChange, handleEditInputConfirm, editInputIndex } = editInputHandlers;
  const { inputValue, handleInputChange, handleInputConfirm } = inputHandlers;

  const content = tags.map((tag, index) => {
    if (editInputIndex === index) {
      return (
        <Input
          ref={inputRef2}
          key={tag}
          size="small"
          className="tag-input tags__input"
          value={editInputValue}
          onChange={handleEditInputChange}
          onBlur={handleEditInputConfirm}
          onPressEnter={handleEditInputConfirm}
        />
      );
    }
    const isLongTag = tag.length > 20;
    const tagElem = (
      <Tag className="edit-tag tags__item" key={tag} closable onClose={() => handleClose(tag)}>
        <span onDoubleClick={(evt) => getArgsFromTag(evt, index, tag)}>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
      </Tag>
    );
    return isLongTag ? (
      <Tooltip title={tag} key={tag}>
        {tagElem}
      </Tooltip>
    ) : (
      tagElem
    );
  });

  return (
    <div className="tags form__tags">
      {content}
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          className="tag-input tags__input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag className="site-tag-plus tags__item" onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </div>
  );
};

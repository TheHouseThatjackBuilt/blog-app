/* eslint-disable */
import React, { FC } from 'react';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export const OwnerPanel: FC = () => {
  const { confirm } = Modal;

  const showDeleteConfirm = () => {
    confirm({
      title: 'delete article',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure to delete this article?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div className="article__buttons">
      <button type="button" className="buttons buttons__delete-article" onClick={showDeleteConfirm}>
        DELETE
      </button>
      <button type="button" className="buttons buttons__edit-article" onClick={() => {}}>
        Edit
      </button>
    </div>
  );
};

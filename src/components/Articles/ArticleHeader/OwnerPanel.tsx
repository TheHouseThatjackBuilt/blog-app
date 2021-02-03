/* eslint-disable */
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface IOwnerPanel {
  deleteArticle: (id: string, token: string) => void;
  token: string;
  id: string;
}

export const OwnerPanel: FC<IOwnerPanel> = ({ deleteArticle, token, id }) => {
  const { confirm } = Modal;
  const history = useHistory();

  const showDeleteConfirm = () => {
    confirm({
      title: 'delete article',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure to delete this article?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        await deleteArticle(id, token);
        history.push('/');
      },
      onCancel() {
        console.log('ok');
      },
    });
  };

  return (
    <div className="article__buttons">
      <Button className="buttons buttons__delete-article" onClick={showDeleteConfirm} danger>
        Delete
      </Button>
      <Button className="buttons buttons__edit-article" onClick={() => history.push(`/articles/${id}/edit`)}>
        Edit
      </Button>
    </div>
  );
};

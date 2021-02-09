import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface IOwnerPanel {
  deleteArticle: () => void;
  id: string;
}

export const UserButtons: FC<IOwnerPanel> = ({ deleteArticle, id }) => {
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
        deleteArticle();
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

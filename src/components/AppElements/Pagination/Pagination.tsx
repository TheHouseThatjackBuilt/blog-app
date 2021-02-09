import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Pagination as Paginator } from 'antd';

import { IPaginator } from '../../../types/components/index.d';

export const Pagination: React.FC<IPaginator> = ({ totalPages, handler, currentPage }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <Paginator
      className="content__pagination"
      size="small"
      showSizeChanger={false}
      onChange={(page: number) => {
        handler(page);
        history.push({ search: `page=${page}` });
      }}
      pageSize={5}
      total={totalPages}
      defaultPageSize={10}
      current={Number(location.search.match(/\d+/g)?.[0])}
      defaultCurrent={currentPage}
    />
  );
};

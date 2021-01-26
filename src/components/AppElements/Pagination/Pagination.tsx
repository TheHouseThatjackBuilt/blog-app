import React from 'react';
import { Pagination as Paginator } from 'antd';

import { IPaginator } from '../../../types/components/index.d';

export const Pagination: React.FC<IPaginator> = ({ totalPages, handler, currentPage }) => (
  <Paginator
    className="content__pagination"
    size="small"
    showSizeChanger={false}
    onChange={(page: number) => handler(page)}
    pageSize={5}
    total={totalPages}
    defaultPageSize={5}
    defaultCurrent={currentPage}
  />
);

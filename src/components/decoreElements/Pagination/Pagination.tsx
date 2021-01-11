import React from 'react';
import { Pagination } from 'antd';

import { IPaginator } from '../../../types/components/index.d';

const Parginator: React.FC<IPaginator> = ({
  totalPages,
  handler,
  currentPage,
}) => (
  <Pagination
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

export default Parginator;

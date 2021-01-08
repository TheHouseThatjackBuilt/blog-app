import React from 'react';
import { Pagination } from 'antd';

import { IPaginator } from '../../../types/components/index.d';

const Parginator: React.FC<IPaginator> = ({ totalPages, handler }) => (
  <Pagination
    className="content__pagination"
    size="small"
    showSizeChanger={false}
    onChange={(page: number) => handler(page)}
    pageSize={5}
    total={totalPages}
    defaultCurrent={1}
    defaultPageSize={5}
  />
);

export default Parginator;

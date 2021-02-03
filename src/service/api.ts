// types & url constants:
import { IUserError } from '../types/redux/index.d';
import { BASE_URL } from './constants';

class ResponseApiError<T> extends Error {
  item: { error: T };

  constructor(requestBody: { error: T }) {
    super();
    this.name = '422 Error';
    this.item = requestBody;
  }

  getErrorData() {
    return this.item;
  }
}

export const http = async <T>(url: string, options: any): Promise<T> => {
  const link = new URL(url, BASE_URL);
  const response = await fetch(link.toString(), options);

  if (response.status === 422) throw new ResponseApiError<IUserError>(await response.json());
  if (!response.ok) throw new Error('some unexpected error');
  return response.json();
};

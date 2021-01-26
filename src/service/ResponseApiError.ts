export class ResponseApiError<T> extends Error {
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

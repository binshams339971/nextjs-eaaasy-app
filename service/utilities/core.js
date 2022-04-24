import apiProvider from './provider';

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = (requestConfig) => {
        return apiProvider.getAll(options.url, requestConfig);
      };
    }   
  }
}
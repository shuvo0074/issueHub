import {baseUrl} from '../env.js';
export default async function FetchService(
  method: String = 'GET',
  path: String,
  triedCount: number = 5,
  jsonBody: object = {},
) {
  function errorHandler(err: Error): any { //if failed, retry the rquest for "triedCount" number of times
    let retryCount = triedCount - 1;
    if (!retryCount) {
      throw err;
    }

    return setDelay(1000).then(() =>
      FetchService(method, path, retryCount, jsonBody),
    );
  }

  function setDelay(d: number) {
    return new Promise(resolve => setTimeout(resolve, d));
  }

  let url = baseUrl + path;

  let headers = {
    Accept: '*/*',
  };

  let body: String = JSON.stringify(jsonBody);

  let options: Object =
    method === 'POST' ? {method, headers, body} : {method, headers};

  return fetch(url, options)
    .then(async data => {
      return data.json();
    })
    .catch(errorHandler);
}

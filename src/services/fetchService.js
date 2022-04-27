import {baseUrl} from '../env.js';
export default async function FetchService(
  method = 'GET',
  path,
  triedCount = 5,
  jsonBody = {},
) {
  function errorHandler(err) {
    let retryCount = triedCount - 1;
    if (!retryCount) {
      throw err;
    }

    return setDelay(1000).then(() =>
      FetchService(method, path, retryCount, jsonBody),
    );
  }

  function setDelay(d) {
    return new Promise(resolve => setTimeout(resolve, d));
  }
  let url = baseUrl + path;

  let headers = {
    Accept: '*/*',
  };
  let body = JSON.stringify(jsonBody);

  let options = method == 'POST' ? {method, headers, body} : {method, headers};

  return fetch(url, options)
    .then(async data => {
      return data.json();
    })
    .catch(errorHandler);
}

'use strict';

const request = (url) => {
  fetch(url).then((response) => {
    if (!response.ok) {
      return Promise.reject(
        new Error(`${response.status} - ${response.statusText}`)
      );
    }

    if (!response.headers.get('content-type').includes('application/json')) {
      return Promise.reject(new Error('Response is not JSON'));
    }

    return response.json();
  });
};

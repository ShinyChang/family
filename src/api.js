import 'whatwg-fetch';
const base_api = '/api/';
// const base_api = 'http://localhost:4000/api/';

let token = '';
function getOptions() {
  var opt = {};
  if (token) {
    opt.Authorization = 'JWT  ' + token
  }
  return opt;
};

export default {
  setToken(t) {
    token = t;
  },
  unsetToken() {
    token = null;
  },
  get(uri, data) {
    const options = getOptions;
    return fetch(`${base_api}${uri}`, options).then((response) => {
      return response.json();
    });
  },
  post(uri, data) {
    const options = getOptions;
    options.method = 'POST';
    return fetch(`${base_api}${uri}`, options).then((response) => {
      return response.json();
    });
  },
  put(uri, data) {
    const options = getOptions;
    options.method = 'PUT';
    return fetch(`${base_api}${uri}`, options).then((response) => {
      return response.json();
    });
  },
  delete (uri, data) {
    const options = getOptions;
    options.method = 'DELETE';
    return fetch(`${base_api}${uri}`, options).then((response) => {
      return response.json();
    });
  }
}

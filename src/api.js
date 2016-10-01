import 'whatwg-fetch';
const base_api = '/api/';

let token = '';
function getOptions() {
  var opt = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  if (token) {
    opt.Authorization = 'JWT  ' + token
  }
  return opt;
};

function qs(data) {
  return Object.keys(data).map((key) => {
    return `${key}=${encodeURIComponent(data[key])}`;
  }).join('&');
}

function objectToFormData(obj) {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key]);
  });
  return formData;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export default {
  setToken(t) {
    token = t;
  },
  unsetToken() {
    token = null;
  },
  get(uri, data) {
    const options = getOptions();
    let query_string = '';
    if (data) {
      query_string = `?${qs(data)}`;
    }
    return fetch(`${base_api}${uri}${query_string}`, options)
            .then(checkStatus)
            .then(parseJSON);
  },
  post(uri, data) {
    const options = getOptions();
    options.method = 'POST';
    options.body = JSON.stringify(data);
    return fetch(`${base_api}${uri}`, options)
            .then(checkStatus)
            .then(parseJSON);
  },
  put(uri, data) {
    const options = getOptions();
    options.method = 'PUT';
    options.body = objectToFormData(data);
    return fetch(`${base_api}${uri}`, options)
            .then(checkStatus)
            .then(parseJSON);
  },
  delete (uri) {
    const options = getOptions();
    options.method = 'DELETE';
    return fetch(`${base_api}${uri}`, options)
            .then(checkStatus)
            .then(parseJSON);
  }
}

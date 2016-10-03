import API from '../api';
import 'whatwg-fetch';

export const login = (accessToken) => {
  return (dispatch) => {
    return API.post('auth', {accessToken}).then(data => {
      API.setToken(data.token);
      localStorage.setItem('token', data.token);
      dispatch({type: 'AUTH_SUCCESS', user: data});
    }).catch(() => {
      API.setToken(null);
      localStorage.removeItem('token');
      dispatch({type: 'AUTH_FAIL'});
    })
  }
}

export const fetchMedia = () => {
  return (dispatch) => {
    dispatch({type: 'MEDIA_FETCH_START'});
    return API.get('medias').then(data => {
      dispatch({type: 'MEDIA_FETCH_SUCCESS', list: data});
    }).catch(() => {
      dispatch({type: 'MEDIA_FETCH_FAIL'});
    })
  };
};

export const uploadFile = (file, meta) => {
  return (dispatch, getState) => {
    dispatch({type: 'UPLOAD_ADD', meta});
    const id = getState().uploads[0].id;
    return API.get('medias/upload_url', meta).then(data => {
      dispatch({type: 'UPLOAD_START', id});
      fetch(data.signedUrl, {method: 'PUT', body: file}).then(() => {
        dispatch({type: 'UPLOAD_COMPLETE', id});
      }).catch(() => {
        dispatch({type: 'UPLOAD_FAIL', id});
      });
    });
  }
}

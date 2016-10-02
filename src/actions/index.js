import api from '../api';
import 'whatwg-fetch';

export const login = (accessToken) => {
  console.log('login');
  return (dispatch) => {
    return api.post('auth', {accessToken}).then(data => {
      console.log(data)
    }).catch(() => {
      console.log('err')
    })
  }
}

export const fetchMedia = () => {
  return (dispatch) => {
    dispatch({type: 'MEDIA_FETCH_START'});
    return api.get('medias').then(data => {
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
    return api.get('medias/upload_url', meta).then(data => {
      dispatch({type: 'UPLOAD_START', id});
      fetch(data.signedUrl, {method: 'PUT', body: file}).then(() => {
        dispatch({type: 'UPLOAD_COMPLETE', id});
      }).catch(() => {
        dispatch({type: 'UPLOAD_FAIL', id});
      });
    });
  }
}

import api from '../api';
export const fetchMedia = () => {
  return (dispatch) => {
    dispatch({type: 'MEDIA_FETCH_START'});
    return api.get('medias').then(data => {
      dispatch({type: 'MEDIA_FETCH_SUCCESS', list: data});
    }).catch(function(ex) {
      dispatch({type: 'MEDIA_FETCH_FAIL'});
    })
  };
};

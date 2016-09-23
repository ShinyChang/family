// const media = (state, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

const DEFAULT_STATE = {
  fetching: false,
  list: []
}

const medias = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'MEDIA_FETCH_START':
      return Object.assign({}, state, {fetching: true});
    case 'MEDIA_FETCH_FAIL':
      return Object.assign({}, state, {fetching: false});
    case 'MEDIA_FETCH_SUCCESS':
      return Object.assign({}, state, {
        fetching: false,
        list: state.list.concat(action.list),
      });
    default:
      return state
  }
}

export default medias

const DEFAULT_STATE = [];

const uploads = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'UPLOAD_ADD':
      return [
        {
          id: state.reduce((maxId, queue) => Math.max(queue.id, maxId), -1) + 1,
          ...action.meta,
          uploading: false,
          uploaded: false
        },
        ...state,
      ];
    case 'UPLOAD_START':
      return state.map(queue => {
        return queue.id === action.id
          ? {...queue, uploading: true}
          : queue;
      });
    case 'UPLOAD_COMPLETE':
      return state.map(queue => {
        return queue.id === action.id
          ? {...queue, uploading: false, uploaded: true}
          : queue;
      });
    case 'UPLOAD_FAIL':
      return state.map(queue => {
        return queue.id === action.id
          ? {...queue, uploading: false, uploaded: false, error: action.error}
          : queue;
      });
    default:
      return state
  }
}

export default uploads

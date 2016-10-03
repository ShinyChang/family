const auth = (state = null, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return action.user;
    case 'AUTH_FAIL':
      return null;
    default:
      return state
  }
}

export default auth

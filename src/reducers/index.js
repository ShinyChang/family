import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import medias from './medias'
import uploads from './uploads'
import auth from './auth'

const reducer = combineReducers({
  routing: routerReducer,
  medias,
  uploads,
  auth
})

export default reducer

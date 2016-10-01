import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import medias from './medias'
import uploads from './uploads'

const reducer = combineReducers({
  routing: routerReducer,
  medias,
  uploads
})

export default reducer

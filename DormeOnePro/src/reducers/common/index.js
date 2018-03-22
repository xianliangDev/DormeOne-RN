import {combineReducers} from 'redux'
import loading from './loading'
import  router from  './router'
import  movie from '../movie'
const commonReducer = combineReducers({
  loading,
  router,
})

export default commonReducer
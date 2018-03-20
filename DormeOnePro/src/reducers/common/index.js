import {combineReducers} from 'redux'
import loading from './loading'
import  router from  './router'

const commonReducer = combineReducers({
  loading,
  router
})

export default commonReducer
import {combineReducers} from 'redux'

import  movie from  './movie'
import common from './common'
const  rootReducers = combineReducers({
    common,
    movie
})

export default rootReducers
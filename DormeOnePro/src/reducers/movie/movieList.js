import type from '../../constants/actionType'
import {handleActions} from 'redux-actions'

const initialState = {
    showTimeList: [],
}

const originalReducers = {}

originalReducers[type.MOVIE_SHOWTIME_LIST + type.FETCH_SUCCESS_SUFFIX] = (state,action) => {
    return {
        ...state,
        showTimeList: action.payload.ms
    }
}

const  reducer = handleActions(originalReducers,initialState)
export  default  reducer
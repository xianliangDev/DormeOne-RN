import actionType from '../../constants/actionType'
import {handleActions} from 'redux-actions'
 
const initialState = {
    movieDetail:{}
}

const originReducers = {}

originReducers[actionType.MOVIE_DETAIL + actionType.FETCH_SUCCESS_SUFFIX] = (state,action) => {
    return {
        ...state,
        movieDetail:action.payload.data
    }
}

const reducer = handleActions(originReducers,initialState)

export default reducer
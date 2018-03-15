import {handleActions} from 'redux-actions'
import actionType from '../../constants/actionType'

const loadingInitialState = {
    showHUD: false
}

const Actions = {}

Actions[actionType.FETCH_SHOW_HUD] = (state,action) => {
    if (state.showHUD != action.payload) {
       return {
           ...state,
           showHUD: action.payload
       }
    } else {
       return {
           ...state
       }
    }
}

const loadingReducer =  handleActions(Actions,loadingInitialState)

export default loadingReducer

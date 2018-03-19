/**
 * Created by joincoder on 18/3/18.
 */
import  React from  'react'
import ProgressHud from  './progressHud'
import  type from  '../../constants/actionType'
import store from '../../store'
import  {createAction} from  'redux-actions'
import  {Actions} from  'react-native-router-flux'

import RootSiblings from 'react-native-root-siblings'

const loadingAction = createAction(type.FETCH_SHOW_HUD)

let silbing = undefined

const ShowProgress = {
    show:() => {
        silbing = new RootSiblings(<ProgressHud/>)
    },
    hidden:() => {
        if (silbing  instanceof RootSiblings) {
            silbing.destroy()
        }
    }
}

const RootHUD = {
    show:() => {
        let currentStatus = store.getState().common.loading.showHud
        if (!currentStatus) {
            Actions.loading()
            store.dispatch(loadingAction(true))
        }
    },
    hidden:() => {
        store.dispatch(loadingAction(false))
    }
}

export {RootHUD}


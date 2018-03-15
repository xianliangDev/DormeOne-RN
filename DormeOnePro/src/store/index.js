import {createStore,applyMiddleware} from 'redux'
import reducers from '../reducers'
import thunkMiddleWare   from 'redux-thunk'

const middleWares = [
    thunkMiddleWare
]



const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore)
const store = createStoreWithMiddleWare(reducers)

export  default store

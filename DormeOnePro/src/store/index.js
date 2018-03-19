import {createStore,applyMiddleware} from 'redux'
import reducers from '../reducers'
import thunkMiddleWare   from 'redux-thunk'
import promiseMiddleWare from 'redux-promise-middleware'

const middleWares = [
    thunkMiddleWare,
    promiseMiddleWare({promiseTypeSuffixes:['Loading','SUCCESS','ERROR']}),
]



const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore)
const store = createStoreWithMiddleWare(reducers)

export  default store

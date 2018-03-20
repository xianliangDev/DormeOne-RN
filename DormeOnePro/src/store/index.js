import {createStore,applyMiddleware} from 'redux'
import reducers from '../reducers'
import thunkMiddleWare   from 'redux-thunk'
import promiseMiddleWare from 'redux-promise-middleware'
import validatorMiddleware from '../middlewares/validatorMiddleware'

const middleWares = [
    thunkMiddleWare,
    promiseMiddleWare({promiseTypeSuffixes:['Loading','SUCCESS','ERROR']}),
    validatorMiddleware()
]



const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore)
const store = createStoreWithMiddleWare(reducers)

export  default store

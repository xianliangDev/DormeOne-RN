import {bindActionCreators} from 'redux'
import movie from './movie'

const action = {
    movie
}

const dispatch = name => dispatch => {
   if (Array.isArray(name)) {
       let tempActionCreatores = {}
       for (let i = 0; i < name.length; i++) {
        Object.assign(tempActionCreatores,action[name[i]].actionCreators)
       }
       return bindActionCreators(tempActionCreatores, dispatch)
   } else {
       return bindActionCreators(action[name].actionCreators,dispatch)
   }
}

export  default  {dispatch}
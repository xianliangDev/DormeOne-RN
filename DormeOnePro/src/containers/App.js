/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import {Provider,connect} from 'react-redux'

import Launch from '../components/commonPage/Launch'

import {Scene, Router, Actions, Reducer, ActionConst, Modal, Stack, Lightbox, Tabs} from "react-native-router-flux"
//引入store
import store from '../store'

//引入action
import Action from '../actions'

//加载条
import Loading from '../utils/progressHud/progressHud'

import  {dispatch} from  '../utils/venilog/dispatchLog'
import type from '../constants/actionType'

import MessageBar from '../utils/messageBar/MessageBar'

import Tabbar from './TabbarController'
//电影详情
import MovieDetail from '../components/pages/movie/movieDetail'
//演员列表
import ActorsList from '../components/pages/movie/actorsList'
//预告花絮
import MovieTrailerList from '../components/pages/movie/movietrailerlist'



const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    action.type !== type.REACT_NATIVE_ROUTER_FLUX_SET_PARAMS ? dispatch(state)(action) : null
    return defaultReducer(state, action)
  }
}

/**
 * 方式一：是将<Router><Scene></Scene></Router>
 * 方式二： Alternatively, 
 * you could define all of your scenes during compile time and use it later within Router: 
 * user the second example
 * */
const scenes = Actions.create(
  <Scene key='root'>
    <Modal key='modal' hideNavBar>
      <Lightbox key='lightbox' hideNavBar={true}>
        <Stack key='init'>
          <Scene key='launch'  component={Launch} hideNavBar/>
          <Scene key='main' initial back={false} component={Tabbar} hideNavBar/>
          <Scene key='movieDetail'  hideNavBar component={connect(
            (state) => state.movie.movieDetail,
            Action.dispatch('movie')
          )(MovieDetail)}/>
          <Scene key='actorsList' component={ActorsList}/>
          <Scene key='movieTrailerList' component = {connect(
            (state) => state.movie.movieList,
            Action.dispatch('movie')
          )(MovieTrailerList)}/>
        </Stack>
        <Scene key='loading' component={connect(
         (state) => state.common.loading
      )(Loading)}/>
      </Lightbox>
      
    </Modal>
  </Scene>  
)
class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <Router
          scenes={scenes}
          createReducer={reducerCreate}
        />
        <MessageBar />
      </View>
    );
  }
}

const initApp = () =>{
  return (
      <Provider store={store}>
        <App/>
      </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});


export default initApp
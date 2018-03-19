import {createAction} from 'redux-actions'
import  type from  '../../constants/actionType'
import actions from  '../../actionsCreator/movie'

const  getMovieList = createAction(type.MOVIE_LIST,actions.movieList)
const  getMovieShowTimeList = createAction(type.MOVIE_SHOWTIME_LIST,actions.movieShowTimeList)
const  getMovieComingNewList = createAction(type.MOVIE_COMEING_NEW_LIST,actions.movieComingList)

const  actionCreators = {
    getMovieList:params => getMovieList(params),
    getMovieShowTimeList,
    getMovieComingNewList
}
export  default {actionCreators}
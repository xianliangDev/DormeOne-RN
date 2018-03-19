import {getFetch,postFetch,postFetchForValidator} from '../../utils/netWork/request/HttpExtension'
import {PATH} from '../../constants/urls'
import {ApiSource} from '../../constants/commonType'

const movieList = params =>  getFetch(PATH.MOVIE_LIST,params)
const movieShowTimeList = params => getFetch(PATH.MOVIE_LIST_SHOWTIME,params,ApiSource.MOVIE_LIST_SHOWTIME)
const movieComingList = params => getFetch(PATH.MOVEI_LIST_COMINGNEW,params,ApiSource.MOVEI_LIST_COMINGNEW)

export default {
    movieList,
    movieShowTimeList,
    movieComingList
}
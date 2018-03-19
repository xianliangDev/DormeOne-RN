import {getFetch,postFetch,postFetchForValidator} from '../../utils/netWork/request/HttpExtension'
import {PATH} from '../../constants/urls'
import {ApiSource} from '../../constants/commonType'

const MOVIE_LIST = params =>  getFetch(PATH.MOVIE_LIST,params)
const MOVIE_LIST_SHOWTIME = params => getFetch(PATH.MOVIE_LIST_SHOWTIME,params,ApiSource.MOVIE_LIST_SHOWTIME)
const MOVEI_LIST_COMINGNEW = params => getFetch(PATH.MOVEI_LIST_COMINGNEW,params,ApiSource.MOVEI_LIST_COMINGNEW)

export {
    MOVEI_LIST_COMINGNEW,
    MOVIE_LIST_SHOWTIME
}
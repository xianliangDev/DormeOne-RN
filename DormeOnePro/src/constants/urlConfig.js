/**网络接口的配置文件 */

const host = {
    //开发环境
    dev:{
        API_URL:'http://v3.wufazhuce.com:8000/api',
        XIAMI_URL:'http://xiamirun.avosapps.com',
        TIME_MOVIE_URL:'https://api-m.mtime.cn',
        TIME_TICKET_URL:'https://ticket-api-m.mtime.cn',
        MSTIE_URL:'http://m.xxx.com',
        VENILOG_URL:'http://venilog.xxx.com'
    },

    //准生产环境
    pre:{
        API_URL:'http://v3.wufazhuce.com:8000/api',
        XIAMI_URL:'http://xiamirun.avosapps.com',
        TIME_MOVIE_URL:'https://api-m.mtime.cn',
        TIME_TICKET_URL:'https://ticket-api-m.mtime.cn',
        MSTIE_URL:'http://m.xxx.com',
        VENILOG_URL:'http://venilog.xxx.com'
    },
    //生产环境
    prd:{
        API_URL:'http://v3.wufazhuce.com:8000/api',
        XIAMI_URL:'http://xiamirun.avosapps.com',
        TIME_MOVIE_URL:'https://api-m.mtime.cn',
        TIME_TICKET_URL:'https://ticket-api-m.mtime.cn',
        MSTIE_URL:'http://m.xxx.com',
        VENILOG_URL:'http://venilog.xxx.com'
    }
}

let ENV = 'prd'
let currentHost = host[ENV]

const setHost = (env = 'dev') => {
    ENV = env
    currentHost = host[ENV]
}

const API_URL = currentHost.API_URL
const XIAMI_URL = currentHost.XIAMI_URL
const TIME_MOVIE_URL = currentHost.TIME_MOVIE_URL
const TIME_TICKET_URL = currentHost.TIME_TICKET_URL
const MSTIE_URL = currentHost.MSTIE_URL
const VENILOG_URL = currentHost.VENILOG_URL

export{ENV,API_URL,XIAMI_URL,TIME_MOVIE_URL,TIME_TICKET_URL,MSTIE_URL,VENILOG_URL,setHost}
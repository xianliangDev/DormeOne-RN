const PATH = {
    //获取首页的图文列表
    PICTURE_LIST:'/hp/idlist/0',
    //获取图文详情数据
   PICTURE_DETAIL:'/hp/detail/',
   PICTURE_GRID_LIST:'/hp/bymonth',

    MOVIE_LIST: '/movie/list/',
    MOVIE_STORY: '/movie/${id}/story/1/0',

    // 时光网数据
    MOVIE_SHOWTIME: '/Showtime/LocationMovies.api?locationId=290',
    MOVIE_COMEING_NEW: '/Movie/MovieComingNew.api?locationId=290',
    MOVIE_DETAIL: '/movie/detail.api?locationId=290',
    MOVIE_COMMENT_LIST: '/movie/hotComment.api',
    MOVIE_MINI_COMMENT_LIST: '/Showtime/HotMovieComments.api',
    MOVIE_PLUS_COMMENT_LIST: '/Movie/HotLongComments.api',
    MOVIE_TRAILER_LIST: '/Movie/Video.api',
    MOVIE_ACTOR_LIST: '/Movie/MovieCreditsWithTypes.api',
    MOVIE_PICTURE_LIST: '/Movie/ImageAll.api',
}

export {PATH}
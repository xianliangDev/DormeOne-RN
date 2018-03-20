import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

import {connect} from  'react-redux'

import  Action from  '../../actions'


import  {commonStyles} from  '../../utils/commonStyles'

import  {SegmentedControl} from  'antd-mobile'
//电影列表正在热映
import ShowTimeList from './showTime/showTimeList'
//电影列表即将上映
import ComingNewList from './comingNews/comingNewList'

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state = {
            refresh:false,
            hasMore:false,
            showTimeList:[],
            comingNewList:[],
            attentionList:[],
            selectedTab:'正在热映'
        }
    }

    componentDidMount() {
        Promise.all([this.props.getMovieShowTimeList(),this.props.getMovieComingNewList()]).then((response) => {
            this.setState({
                showTimeList: response[0].value.ms,
                comeingNewList: response[1].value.moviecomings,
                attentionList: response[1].value.attention
            })
        })
    }

    onValueChange = (value) =>  {
        this.setState({selectedTab:value})
    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.navBarStyle}>
                    <View style={styles.segContainer}>
                        <SegmentedControl
                            style={styles.tabStyle}
                            selectedIndex={0}
                            values={['正在热映', '即将上映']}
                            onValueChange={(value)=> this.onValueChange(value)}
                        />
                    </View>
                </View>
                {
                    this.state.selectedTab === '正在热映' ?
                        <ShowTimeList dataArr={this.state.showTimeList}/> :
                        <ComingNewList comingNewArr={this.state.comeingNewList} attentionArr={this.state.attentionList}/>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    navBarStyle: {
        height: commonStyles.navHeight,
        backgroundColor: '#151C28',
    },
    segContainer: {
        marginTop: commonStyles.navStatusBarHeight,
        height: commonStyles.navContentHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabStyle: {
        width: 180
    }
    }
)

const  _MovieList = connect(
    (state) => state.movie.movieList,
    Action.dispatch('movie')
)(MovieList)
export default _MovieList
import React,{Component} from 'react'

import {View,Text,StyleSheet} from 'react-native'

//电影列表正在热映
import showTimeList from './showTime/showTimeList'
//电影列表即将上映
import comingNewList from './comingNews/comingNewList'

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <View style={styles.container}>
            <Text>
            Movie
            </Text> 
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
    }
    }
)

export default MovieList
import React,{Component} from 'react'
import {StyleSheet,View} from 'react-native'

import {commonStyles} from '../../../utils/commonStyles'

export default class MovieTrailerlist extends Component { 

    render(){
        return (
            <View style={styles.container}>
            </View>    
        )
    }
}

const styles =  StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:commonStyles.white
        }
    }
)
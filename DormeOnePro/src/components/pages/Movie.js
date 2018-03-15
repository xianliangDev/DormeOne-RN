import React,{Component} from 'react'

import {View,Text,StyleSheet} from 'react-native'

class Movie extends Component {
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

export default Movie